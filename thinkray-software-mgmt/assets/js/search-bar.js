/*------------------------------------------- JS FOR SEARCH-BAR ANIMATION START ------------------------------------------*/
const searchTexts=[
  "Search by doctors ...",
  "Search by tests ...",
  "Search by health packages ...",
  "Search by reports, prescriptions ...",
  "Search by invoice number ...",
  "Search helps & faq's ..."
];

const searchInput=document.querySelector(".search-input input");
let textIndex=0,charIndex=0,isDeleting=false;

function animateSearchPlaceholder(){
  const text=searchTexts[textIndex];

  if(!isDeleting){
    charIndex++;
    searchInput.placeholder=text.slice(0,charIndex);

    if(charIndex===text.length){
      isDeleting=true;
      return setTimeout(animateSearchPlaceholder,1400);
    }
  }else{
    charIndex--;
    searchInput.placeholder=text.slice(0,charIndex);

    if(charIndex===0){
      isDeleting=false;
      textIndex=(textIndex+1)%searchTexts.length;
    }
  }
  setTimeout(animateSearchPlaceholder,isDeleting?35:55);
}

animateSearchPlaceholder();
/*-------------------------------------- JS FOR SEARCH-BAR ANIMATION COMPLETE ----------------------------------------*/