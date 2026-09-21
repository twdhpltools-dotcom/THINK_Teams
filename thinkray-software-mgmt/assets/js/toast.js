/*------------------------------------------- JS FOR TOAST START ------------------------------------------*/
/*-------------------------------------- ADD-CART-TOAST ----------------------------------------*/
document.addEventListener("DOMContentLoaded",function(){
  const cartIcon=document.querySelector(".bi-cart3");
  const cartButton=cartIcon.closest("button");
  const cartCount=cartButton.querySelector("span");
  let count=parseInt(cartCount.textContent)||0;

  function animateCart(){
    cartIcon.style.color="var(--primary)";

    cartIcon.animate([
      {transform:"scale(1) rotate(0deg)"},
      {transform:"scale(1.35) rotate(-12deg)"},
      {transform:"scale(.9) rotate(8deg)"},
      {transform:"scale(1) rotate(0deg)"}
    ],{duration:450,easing:"ease-out"});

    cartCount.animate([
      {transform:"scale(1)"},
      {transform:"scale(1.5)"},
      {transform:"scale(1)"}
    ],{duration:350,easing:"ease-out"});

    setTimeout(()=>cartIcon.style.color="",500);
  }

  function updateCart(){
    cartCount.textContent=count;
    cartCount.classList.toggle("hidden",count===0);
    animateCart();
  }

  document.querySelectorAll(".cart-btn").forEach(function(button){
    button.addEventListener("click",function(event){
      event.stopPropagation();

      if(button.classList.contains("added")){
          button.classList.remove("added");
          button.innerHTML='Add to Cart';
          count=Math.max(0,count-1);
        }else{
          button.classList.add("added");
          button.innerHTML='<i class="bi bi-trash"></i>';
          count++;
        }
      updateCart();
    });
  });

  cartCount.classList.toggle("hidden",count===0);
});
/*-------------------------------------- ADD-CART-TOAST ----------------------------------------*/
/*-------------------------------------- JS FOR TOAST COMPLETE ----------------------------------------*/