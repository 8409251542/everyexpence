let addBtn = document.getElementById("addSpend");
let pop = document.querySelector(".popup");
addBtn.addEventListener('click',popUp);
function popUp(){
    pop.style.display='flex';
}
let closeBtn =document.getElementById("closePop");
closeBtn.addEventListener('click',closePop);
function closePop(){
    pop.style.display='none';
}
let addTrn = document.querySelector(".submit");
addTrn.addEventListener('click',addTrasaction);
function addTrasaction(){
    let desc=document.getElementById("Desc");
    let amt=document.getElementById("amt");
    let date=document.getElementById("date");
    let check=document.getElementById("type");
    if(check==checked){
        console.log("income");
    }
}