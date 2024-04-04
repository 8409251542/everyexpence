


let btnAI = document.getElementById("investAI");
let popAI = document.querySelector(".popupai");

btnAI.addEventListener('click',popUpAi);
function popUpAi(){
    popAI.style.display='flex';
}
let closeBtnAi =document.getElementById("closePopAi");
closeBtnAi.addEventListener('click',closePopAi);
function closePopAi(){
    popAI.style.display='none';
}
