/*------------------------------------------- JS FOR ACCORDIAN START ------------------------------------------*/
function toggleAccordion(head) {
  const body = head.nextElementSibling;
  const icon = head.querySelector(".pg-accordion-icon");

  body.classList.toggle("max-h-0");
  body.classList.toggle("pt-0");
  body.classList.toggle("max-h-[500px]");
  body.classList.toggle("pt-3");

  icon.classList.toggle("rotate-180");
}

function toggleAccordionNw(headNw) {
  const bodyNw = headNw.nextElementSibling;
  const iconNw = headNw.querySelector(".pg-accordion-icon-Nw");

  bodyNw.classList.toggle("max-h-0");
  bodyNw.classList.toggle("pt-0");
  bodyNw.classList.toggle("max-h-[500px]");
  bodyNw.classList.toggle("pt-1");
  bodyNw.classList.toggle("pb-2");

  iconNw.classList.toggle("rotate-180");
}
/*-------------------------------------- JS FOR ACCORDIAN COMPLETE ----------------------------------------*/