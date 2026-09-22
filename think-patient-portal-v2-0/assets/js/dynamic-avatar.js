/*------------------------------------------- JS FOR USER-DYNAMIC-AVATAR START ------------------------------------------*/
const avatarColors = {
  A:['#D32F2F','#FDECEC'],B:['#C2185B','#FCEAF2'],C:['#7B1FA2','#F5EAF8'],D:['#512DA8','#EEEAF8'],
  E:['#303F9F','#EBEDF8'],F:['#1976D2','#EAF4FD'],G:['#0288D1','#E8F7FD'],H:['#0097A7','#E6F8FA'],
  I:['#00796B','#E5F5F2'],J:['#388E3C','#ECF7ED'],K:['#689F38','#F1F7E8'],L:['#AFB42B','#F8F9E9'],
  M:['#F9A825','#FFF7E2'],N:['#F57C00','#FFF1E5'],O:['#E64A19','#FDECE7'],P:['#5D4037','#F1ECEA'],
  Q:['#616161','#F1F1F1'],R:['#455A64','#EDF1F3'],S:['#00838F','#E5F4F5'],T:['#2E7D32','#E8F3E9'],
  U:['#AD1457','#F8E8F0'],V:['#4527A0','#ECE8F6'],W:['#1565C0','#E8F0F9'],X:['#00695C','#E5F1EF'],
  Y:['#EF6C00','#FFF0E3'],Z:['#C62828','#F9E8E8']
};

function setMemberAvatars(){
  document.querySelectorAll('.member-avatar').forEach(avatar=>{
    const name=(avatar.getAttribute('data-name') || '').trim();
    const letter=name ? name.charAt(0).toUpperCase() : '?';
    const colors=avatarColors[letter] || ['#64748B','#F1F5F9'];

    avatar.style.backgroundColor=colors[1];

    const letterEl=avatar.querySelector('.member-avatar-letter');
    letterEl.textContent=letter;
    letterEl.style.color=colors[0];
  });
}
document.addEventListener('DOMContentLoaded',setMemberAvatars);
/*-------------------------------------- JS FOR USER-DYNAMIC-AVATAR COMPLETE ----------------------------------------*/