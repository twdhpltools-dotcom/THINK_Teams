/*------------------------------------------- JS FOR TIMER-COUNT START ------------------------------------------*/
let timeLeft=30;
const timer=document.getElementById("otpTimer");

const countdown=setInterval(()=>{
  timeLeft--;
  timer.textContent=timeLeft;

  if(timeLeft<=0){
    clearInterval(countdown);
    timer.parentElement.innerHTML="Resend OTP";
  }
},1000);
/*-------------------------------------- JS FOR TIMER-COUNT COMPLETE ----------------------------------------*/