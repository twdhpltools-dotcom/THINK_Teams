<?php 
/*if($_SERVER['HTTP_REFERER']){
    header("Location: https://google.com");
}*/
$arr = explode('.', $_SERVER['HTTP_HOST']);
$subdomain = $arr[0];
if(!file_exists('config/'.$subdomain.'/'.$subdomain.'.config.php')) {
    header("Location: https://thinkwide.in");
}
ob_start();
session_start();
require_once('config/config.php');
require_once ('../common/third-party/google-authenticator/GoogleAuthenticator.php');
require_once ('common/fetch-store.php');
$ip = $_SERVER['REMOTE_ADDR'];

if(SECURE_ACCESS_ENABLE == 1)
{
    if (!isset($_COOKIE['asset_v'])){header('Location: secure/');}else{
        $res_token_chk = $conn->query("SELECT token FROM secure_access WHERE token = '".mysql_real_escape_string($_COOKIE['asset_v'])."'");

        //echo $res_login_chk;
        if(!mysqli_num_rows($res_token_chk)>0)
        {
            header('Location: secure/invalid.php');
        }
    }
}

$invalid_login;
$subdomainChild ='';

$arr = explode('.', $_SERVER['HTTP_HOST']);
    if(isset($arr[1])){
        $subdomainChild = $arr[1]; 
    }    
    // Testing for local - directly login on franchise portal.
    //$subdomainChild = 'franchise';
if(($subdomainChild == 'franchise')&&(!FRANCHISE_PORTAL)){
    header("Location: https://thinkwide.in/");
}
if(@$_GET['action'] == 'logout')
{
    session_destroy();
    header("Location:index.php");
}

if((LOGIN_SSO == 1) AND (isset($_GET['SSO_Authorization']))){
    $ssoSql="SELECT `user_id`, module, valid_upto FROM trnz_api_token WHERE token = '".$_GET['SSO_Authorization']."'";
    //echo $ssoSql;exit;
    $res_token_chk = $conn->query($ssoSql);
	if (!$res_token_chk) 
	{
		$invalid_login = "Error in login process. Please try again.";
	}
	
	if(mysqli_num_rows($res_token_chk)>0)
	{
		$token_array = $res_token_chk->fetch_array(MYSQLI_ASSOC);
		$valid_upto = $token_array['valid_upto'];
        $module = $token_array['user_id'];

        if($valid_upto<time())
        {
            header("HTTP/1.1 401 Unauthorized");
			$invalid_login = "Invalid or Expired Token.";
        }else{
            $res_token_to_user = $conn->query("SELECT `user_name`, user_pwd FROM user_master WHERE `user_id` = '".$module."'");
            $user_au = $res_token_to_user->fetch_array(MYSQLI_ASSOC);

            $_POST['login'] = 'Login';
            $_POST['user_name'] = $user_au['user_name'];
            $_POST['user_pwd'] = $user_au['user_pwd'];
        }
    }
}

if(@$_POST['login'] == 'Login')
{    
	if((TWOFA == 1) && ($subdomainChild != 'franchise'))
	{
        $usCode="SELECT user_security_code FROM user_master WHERE `user_name` = '".$conn->real_escape_string($_POST['user_name'])."'";
        //echo $ssoSql;exit;
        $res_usCode_chk = $conn->query($usCode);
        $usCode_array = $res_usCode_chk->fetch_array(MYSQLI_ASSOC);
		$usCode = $usCode_array['user_security_code'];

		$ga = new PHPGangsta_GoogleAuthenticator();
		$checkResult = $ga->verifyCode($usCode, $_POST['2fatoken']);
		//$checkResult = $ga->verifyCode('2MENS6F4C5ENJJZP', $_POST['2fatoken']);
		if (!$checkResult) {
			header('Location: index.php');
			exit;
		}
	}
    $user_name = $conn->real_escape_string($_POST['user_name']);
    $user_pwd = $conn->real_escape_string($_POST['user_pwd']);
        
    if($subdomainChild == 'franchise')
    {
        $res_login_chk_sql = "SELECT center_master.center_name,center_master.center_id,center_master.center_limit,
                                center_master.login_user_id,user_master.sts_id,center_master.parent_centre_id,
                                center_master.operation_type,center_master.operation_mode,center_master.limit_show,center_master.login_enable
                                FROM center_master 
                                LEFT JOIN user_master 
                                ON user_master.user_id = center_master.login_user_id 
                                WHERE center_code = '".$user_name."' AND center_login_pass = '".$user_pwd."' AND login_enable IN('Y','L','E')";
        //echo $res_login_chk_sql;exit;
        $res_login_chk = $conn->query($res_login_chk_sql);
        if(mysqli_num_rows($res_login_chk)>0)
        {
            $row_login_chk = $res_login_chk->fetch_array(MYSQLI_ASSOC);

            $_SESSION['login_sts'] = 'login';
            $_SESSION['module'] = 'franchise_portal';
            $_SESSION['fname'] = $row_login_chk['center_name'];
            $_SESSION['center_id'] = $row_login_chk['center_id'];
            $_SESSION['default_center_id'] = $row_login_chk['parent_centre_id'];
            $_SESSION['center_limit'] = $row_login_chk['center_limit'];
            $_SESSION['uid'] = $row_login_chk['login_user_id'];

            $_SESSION['operation_type'] = $row_login_chk['operation_type'];
            $_SESSION['operation_mode'] = $row_login_chk['operation_mode'];
            $_SESSION['limit_show'] = $row_login_chk['limit_show'];
            $_SESSION['login_access'] = $row_login_chk['login_enable'];
            
            $_SESSION['agent_portal'] = 'Y';
            $_SESSION['booking_enable'] = 'N';
            if($row_login_chk['sts_id'] == '1'){
                $_SESSION['booking_enable'] = 'Y';
                fetchAndStore($conn);
            }
            
                // Franchise Amount Due
                /*$sql1 = "SELECT sum(due_ammount)as due_ammount 
                FROM trnz 
                WHERE 
                center_id = ".$row_login_chk['center_id']." AND 
                due_ammount <> '0' AND 
                sts_id = 1";
                $result = $conn->query($sql1);
                $rowDueAmount = $result->fetch_array(MYSQLI_ASSOC);
            
                $_SESSION['center_due'] =  $rowDueAmount['due_ammount'];
                
                if($row_login_chk['center_limit']>$rowDueAmount['due_ammount']){
                    $_SESSION['account_enable'] = 'Y';                
                }else{
                    $_SESSION['account_enable'] = 'N';
                }*/

            header('Location: franchise/dashboard.php');
            exit;
        }else{
            $invalid_login = ' Incorrect ';
        }
    }else
    {
        $res_login_chk = $conn->query("SELECT role_id, `user_id` FROM user_master WHERE user_name = '".$user_name."' AND user_pwd = '".$user_pwd."' AND sts_id = 1");
        if(mysqli_num_rows($res_login_chk)>0)
        {
            $row_login_chk = $res_login_chk->fetch_array(MYSQLI_ASSOC);
            $role = $row_login_chk['role_id'];
            switch ($role) {
                case 1:
                    $module = 'resp';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'reception/invoice-list.php';
                    break;
                case 2:
                    $module = 'report';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'report/invoice-list.php';
                    break;
                case 3:
                    $module = 'admin';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'admin/dashboard.php';
                    break;
                case 15:
                    $module = 'admin';
                    $_SESSION['support_stuff']='Y';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    //$path = 'admin/dashboard.php';
                    $path = 'supportAuthoriation.php';
                    break;
                case 4:
                    $module = 'marketing';
                    fetchAndStore($conn);
                    $path = 'marketing/dashboard.php';
                    break;
                case 17:
                    $module = 'marketingM';
                    fetchAndStore($conn);
                    $path = 'marketing/dashboard.php';
                    break;
                /*case 5:
                    $module = 'report_entry';
                    $path = 'report_entry/patient_admin.php';
                    break;*/
                case 6:
                    $module = 'supervisor';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'common/mis/entry_point.php';
                    break;
                case 7:
                    $module = 'stock_manager';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'admin/invt_purchase_orders.php';
                    break;
                case 8:
                    $module = 'account_manager';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'admin/dashboard.php';
                    break;
                case 9:
                    $module = 'phlebotomist';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'phle/sample-register.php';
                    break;
                case 10:
                    $module = 'report_review';
                    fetchAndStore($conn,$row_login_chk['user_id']);
                    $path = 'report/invoice-list.php';
                    break;
                case 11:
                    $module = 'doctor_portal';
                    $path = 'doctor_portal/patient_list.php';
                    break;
                case 13:
                    $module = 'diacom_console';
                    $sql = "SELECT `code`,`name`,phone,symbol,alpha_3,digit_validation FROM countries ORDER BY default_order DESC, `name` ASC";
                    //echo $sql;exit;
                    if ($result = $conn->query($sql)) 
                    {
                    $_SESSION['mtbl_countries'] = $result->fetch_all(MYSQLI_ASSOC);
                    }
                    $path = 'diacom_console/pending-reports.php';
                    if(ONLYTHINKRAY==1){
                        $path = 'diacom_console/case-list.php?pending=1';
                    }
                    break;
                case 14:
                    $module = 'processing_lab';
                    fetchAndStore($conn);
                    $path = 'lab/sample-register.php';
                    break;
                case 16:
                    $module = 'blood_collector';
                    fetchAndStore($conn);
                    $path = 'collector/work-list.php';
                    break;
            }
            
            $_SESSION['login_sts'] = 'login';
            $_SESSION['center_name'] = CLIENT_CODE;
            $_SESSION['center_id'] = 0;
            $_SESSION['origin_module'] = $module;
            $_SESSION['module'] = $module;
            $_SESSION['swichedModule'] = '';
            
            $sql_user_pro = "SELECT `userinfo_name`,`user_id`,`default_center_id`,discount_allow FROM userinfo_master INNER JOIN center_master ON userinfo_master.default_center_id = center_master.center_id WHERE userinfo_master.user_id ='".$row_login_chk['user_id']."' AND center_master.operation_mode = 'O'";
            //echo $sql_user_pro;
            $res_user_pro = $conn->query($sql_user_pro);
            $res_user_pro2 = $res_user_pro->fetch_array(MYSQLI_ASSOC);
            
            $_SESSION['fname'] = $res_user_pro2['userinfo_name'];
            $_SESSION['uid'] = $res_user_pro2['user_id'];
            $_SESSION['default_center_id'] = $res_user_pro2['default_center_id'];
            $_SESSION['discount_allow'] = $res_user_pro2['discount_allow'];
            
            ### log insert ###            
            $meta = $_SERVER['HTTP_USER_AGENT'];
            $login_log_sql = "INSERT INTO sys_userlog (userlog_time,`user_id`,`action`,access_ip,access_meta) 
                                VALUES  ('".CURRENT_TIMESTAMP_U."','".$_SESSION['uid']."','LOGIN','".$ip."','".$meta."')";
            $conn->query($login_log_sql);
            ##################

            //################## For multi tenent centre ##################################
            if($_SESSION['default_center_id'] == ''){$_SESSION['default_center_id']=0;}

            /*if($_SESSION['default_center_id'] == 0)
            {
                $allowed_centre_sql = "SELECT center_id, center_name FROM center_master";
                $allowed_centre_sql .= " WHERE center_sts = 1 ORDER BY CASE WHEN center_id='0' THEN 0 ELSE 1 END, `center_name` ASC";
            }else{
                $allowed_centre_sql = "SELECT center_id, center_name FROM center_master 
                                       WHERE parent_centre_id=".$_SESSION['default_center_id']." OR center_id =".$_SESSION['default_center_id'];
                $allowed_centre_sql .= " ORDER BY CASE WHEN center_id='".$_SESSION['default_center_id']."' THEN 0 ELSE 1 END, `center_name` ASC";
            }*/
            $allowed_centre_sql = "SELECT center_id, center_name FROM center_master 
                                    WHERE center_sts = 1 AND parent_centre_id=".$_SESSION['default_center_id']." AND `operation_mode` = 'F' OR center_id =".$_SESSION['default_center_id'];
            $allowed_centre_sql .= " ORDER BY CASE WHEN center_id='".$_SESSION['default_center_id']."' THEN 0 ELSE 1 END, `center_name` ASC";

            if ($result = $conn->query($allowed_centre_sql))
            {
              $_SESSION['data_center_master_allowed'] = $result->fetch_all(MYSQLI_ASSOC);
            }
            header('Location: '.$path);
            exit();
        }else
        {
            $invalid_login = ' Incorrect ';
        }
    }
$conn->close();
}
?>
<!------------------------------------------------------------- HTML START ----------------------------------------------------------->
<!DOCTYPE html>
<html lang="en">

<!--------------------------------------------------------- HEAD START ------------------------------------------------------->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Log-in | India's First Laboratory Management System (LMS) | Thinkwide Digital Health PVT. LTD.</title>
    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Login | India's First Laboratory Management System (LMS) | Thinkwide Digital Health PVT. LTD.">
    <meta name="author" content="SW-THEMES">
    <!------------------ FAVICON -------------------------->
    <link rel="icon" type="image/x-icon" href="login-v2-assets/images/favicon.ico">

    <!----------------- CSS FOR ANIMATE-ON-SCROLL FILES START ------------------------>
    <link rel="stylesheet" href="login-v2-assets/css/data-aos.css">
    <!----------------- CSS FOR ANIMATE-ON-SCROLL FILES COMPLETE ------------------------>

    <!----------------- CSS FOR OWL-CAROUSEL FILES START ------------------------>
    <link rel="stylesheet" href="login-v2-assets/css/owl-carousel-min.css">
    <!----------------- CSS FOR OWL-CAROUSEL FILES COMPLETE ------------------------>

    <!------------------ CSS FOR FONT-AWESOME FILES START ----------------------------->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!------------------ CSS FOR FONT-AWESOME FILES COMPLETE ----------------------------->

    <!----------------- CSS FOR BOOTSTRAP FILES START ------------------------>
    <link rel="stylesheet" href="login-v2-assets/css/bootstrap-min.css">
    <!----------------- CSS FOR BOOTSTRAP FILES COMPLETE ------------------------>

    <!------------------ CSS FOR MAIN FILES START ---------------------->
    <link rel="stylesheet" href="login-v2-assets/css/style-biohm.css">
    <link rel="stylesheet" href="login-v2-assets/css/responsive-biohm.css">
    <!------------------ CSS FOR MAIN FILES COMPLETE ---------------------->

</head>
<!--------------------------------------------------------- HEAD COMPLETE ------------------------------------------------------->

<!--------------------------------------------------------- BODY START ------------------------------------------------------->
<body style="background: #fff;">

    <!----------------------------------------------- LOGIN-HEADER START --------------------------------------------->
    <header class="login-header main-header">
        <nav class="nav">
            <div class="top-header">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-7 col-sm-12 col-12">
                            <div class="top-header-social">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6 col-6">
                                        <div class="social">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <a href="mailto: info@amensadiagnostics.com">info@amensadiagnostics.com</a>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-6">
                                        <div class="social">
                                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                                            <a href="tel: +91 7039394488">+91 7039394488</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5 col-sm-12 col-12">
                            <div class="social address">
                                <i class="fa fa-phone-square" aria-hidden="true"></i>
                                <p>OCS, Bima Chhaya, Mahatma Phule Rd, opp. CHINTAMANI DESHMUKH GARDEN,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!---------------------------------------------- LOGIN-HEADER COMPLETE ---------------------------------------------->

    <!----------------------------------------------- LOGIN-HERO SECTION START --------------------------------------------->
    <section class="login-hero">
        <div class="hero">
            <div class="login-hero-carousel" style="background-image: url('assets/images/client-proper-bg.png');">
                <div class="login-hero-carousel-overlay">
                    <div class="hero-content">
                        <div class="hero-text-content">
                            <div class="logo d-none-for-mob">
                                <a href="index.html">
                                    <img class="img-fluid" src="assets/images/amensia-logo.png" alt="Amensa Diagnostics">
                                </a>
                            </div>
                            <h1>Manage diagnostics with confidence</h1>
                            <div class="hero-color-line">
                                <span class="line-blue"></span>
                                <span class="line-green"></span>
                                <span class="line-yellow"></span>
                                <span class="line-red"></span>
                            </div>
                            <p>A comprehensive platform to streamline lab operations, improve accuracy, and deliver reliable results.</p>
                            <!-- <hr class="pg-hr" /> -->
                            <div class="hero-benefits">
                                <div class="benefit-item pe-1">
                                    <div class="benefit-icon">
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M12 3l7 3v5c0 4.8-2.8 8.2-7 10-4.2-1.8-7-5.2-7-10V6l7-3z"></path>
                                            <path d="M9 12l2 2 4-4"></path>
                                        </svg>
                                    </div>
                                    <div class="benefit-content">
                                        <h4>Secure &amp; Compliant</h4>
                                        <p>Your data is protected with industry-leading security.</p>
                                    </div>
                                </div>
                                <div class="benefit-item px-1">
                                    <div class="benefit-icon">
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <circle cx="12" cy="12" r="8"></circle>
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <path d="M12 12l6-6"></path>
                                        </svg>
                                    </div>
                                    <div class="benefit-content">
                                        <h4>Accurate Results</h4>
                                        <p>Advanced tools ensure precision you can trust.</p>
                                    </div>
                                </div>
                                <div class="benefit-item ps-1">
                                    <div class="benefit-icon">
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z"></path>
                                        </svg>
                                    </div>
                                    <div class="benefit-content">
                                        <h4>Streamlined Workflows</h4>
                                        <p>Save time and improve lab efficiency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-form">
                <div class="basic-form" data-aos="flip-left" data-aos-delay="0">
                    <div class="login-card">
                        <div class="login-brand-line">
                            <span class="brand-blue"></span>
                            <span class="brand-green"></span>
                            <span class="brand-yellow"></span>
                            <span class="brand-red"></span>
                        </div>
                        <div class="logo d-block-for-mob">
                            <a href="index.html">
                                <img class="img-fluid" src="assets/images/amensia-logo.png" alt="Amensa Diagnostics">
                            </a>
                        </div>
                        <div class="basic-form-head">
                            <h2>Welcome back</h2>
                            <p>Sign in to access your diagnostic dashboard</p>
                        </div>
                        <form method="" action="">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label for="login_email">Email Address:</label>
                                        <div class="login-input">
                                            <i class="fa fa-user-o nw-ico-clss" aria-hidden="true"></i>
                                            <input type="text" name="login_email" id="login_email" value="" placeholder="name@company.com" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <label for="login_pass">Password:</label>
                                        <div class="login-input password-input">
                                            <i class="fa fa-lock nw-ico-clss" aria-hidden="true"></i>
                                            <input type="password" class="default-pass" name="login_pass" id="login_pass" value="" placeholder="Password" required>
                                            <i class="fa fa-eye pass-eye-icon" aria-hidden="true" onclick="togglePassword()"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-12">
                                    <div class="form-group mt-3 mb-0">
                                        <button type="submit" class="pg-submit-btn">
                                            <i class="fa fa-lock" aria-hidden="true"></i>
                                            <span>Secure Log-in</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-12">
                                    <div class="form-copyright">
                                        <em>© 2026 Amensa Diagnostic, All Rights Reserved</em>
                                        <p><a target="_blank" href="https://thinkwide.in/data_processing">Data Policy</a> | <a target="_blank" href="https://biohmlab.com/terms&conditions.php">Terms & Conditions</a> | <a target="_blank" href="https://biohmlab.com/privacypolicy.php">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!----------------------------------------------- LOGIN-HERO SECTION COMPLETE --------------------------------------------->


    <!----------------------------------------- JS FOR JQUERY FILES START ---------------------------------------------->
    <script src="login-v2-assets/js/jquery.js" type="text/javascript"></script>
    <!------------------------------------------- JS FOR JQUERY FILES COMPLETE ------------------------------------------>
   
    <!----------------------------------- JS FOR ANIMATE-ON-SCROLL FILES START ------------------------------------------------->
    <script src="login-v2-assets/js/data-aos.js" type="text/javascript"></script>
    <!------------------------------------- JS FOR ANIMATE-ON-SCROLL FILES COMPLETED ------------------------------------------->

    <!----------------------------------- JS FOR OWL-CAROUSEL FILES START ------------------------------------------------->
    <script src="login-v2-assets/js/owl-carousel-min.js" type="text/javascript"></script>
    <!------------------------------------- JS FOR OWL-CAROUSEL FILES COMPLETED ------------------------------------------->

    <!----------------------------------- JS FOR BOOTSTRAP FILES START ------------------------------------------------->
    <script src="login-v2-assets/js/bootstrap-bundle-min.js" type="text/javascript"></script>
    <!------------------------------------- JS FOR BOOTSTRAP FILES COMPLETED ------------------------------------------->

    <!------------------------------------ JS FOR MAIN FILES START -------------------------------------------->
    <script src="login-v2-assets/js/main.js" type="text/javascript"></script>
    <!----------------------------------------- JS FOR MAIN FILES COMPLETE ---------------------------------------->
</body>
<!--------------------------------------------------------- BODY COMPLETE ------------------------------------------------------->

</html>
<!------------------------------------------------------------- HTML COMPLETE ----------------------------------------------------------->