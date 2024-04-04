let transactionData=[];
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
let ul=document.getElementById("list")
let addTrn = document.querySelector(".submit");
let transactionForm=document.getElementById("transactionForm");
transactionForm.addEventListener('submit',addTrasaction);
let eraning=0,spendinng=0,remaining=0;

function addTrasaction(e){
    e.preventDefault();
    let desc=document.getElementById("Desc").value;
    let amt=document.getElementById("amt").value;
    let date=document.getElementById("date").value;
    let check=document.getElementById("type");
    let earn=document.getElementById("income");
    let spend=document.getElementById("expence")
    let remain=document.getElementById("remain");
    
    if(check.checked){
       // console.log("income");
        transactionData.push({
            "Date":date,
            "Amount":amt,
            "Description":desc,
            "Type":"Income"
        })
        eraning+=Number(amt);
        remaining+=Number(amt);
        let list = document.createElement('li');
        list.className="plus";
        list.innerHTML= `${desc} <span> ₹${amt}</span>`;
        ul.appendChild(list);
        earn.innerText=`₹${eraning}`;
        remain.innerText=`₹${remaining}`;
        
    }
    else{
        //console.log("expense");
        transactionData.push({
            "Date":date,
            "Amount":-amt,
            "Description":desc,
            "Type":"expense"
        })
        spendinng+=Number(amt);
        remaining-=Number(amt);
        let list = document.createElement('li');
        list.className="minus";
        list.innerHTML= `${desc} <span> -₹${amt}</span>`;
        ul.appendChild(list);
        remain.innerText=`₹${remaining}`;
        spend.innerText=`₹${spendinng}`;
        
    }
   // console.log(desc,amt,date);
   updateChart();
}
console.log(transactionData);
// showheading
function showHeading(){
    let h1 = document.getElementById("heading");
    h1.innerText=eraning;
}