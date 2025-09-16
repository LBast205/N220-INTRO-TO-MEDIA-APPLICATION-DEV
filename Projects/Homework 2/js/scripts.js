console.log("Javascript Loaded Successfully");
//Dating
const pageTicketNum = document.getElementById("ticketNum");
const pageTicketCost = document.getElementById("ticketCost");
const pageTtCost = document.getElementById("ttCost");

let tCount = 2;//Ticket count
let tCost = 14.00;//ticket cost for calculations
let tTotal = tCount * tCost

pageTicketNum.textContent = pageTicketNum.textContent+tCount;
pageTicketCost.textContent = pageTicketCost.textContent+tCost;
pageTtCost.textContent = pageTtCost.textContent+tTotal;



//Shopping
const pageBank = document.getElementById("bank");
const pageAddJacket = document.getElementById("addJacket");

let sBank = 235.87;

let sJacket = 70;
let sSweater = 55;
let sShirt = 35;
let sPants = 75;
let sSkirt = 49;
let sScandals = 30;
let sShoes = 60;

sBank = sBank-(sShirt+sPants+sShoes);

pageBank.textContent = "Bank: $"+sBank;

let sAddJacket = (sBank - sJacket) > 0;

if(sAddJacket){
    pageAddJacket.textContent = "You can get the jacket. ("+sAddJacket+")";
}else{
    pageAddJacket.textContent = "You can't get the jacket. ("+sAddJacket+")";
}



//Pizza
const pageProfPizza = document.getElementById("profPizza");

let pPizzaCount = 4
let pStudentEstimate = 2.5;//Estimated pieces of pizza each student would eat.

let pStudentsFed = Math.floor((pPizzaCount*8) / pStudentEstimate); //Can't get a fraction of a student, must round down 
let pRemainder = ((pPizzaCount*8) % pStudentEstimate)

pageProfPizza.textContent = "There would be "+pStudentsFed+" students fed with "+pRemainder+" slices left over.";



//Monty's Mega Bar
const pageMonty = document.getElementById("Monty");

let mAdultCount = 2;
let mChildCount = 1;
let mDrinkCount = 3;

let mTotalCost = ((mAdultCount*12)+(mChildCount*6)+(mDrinkCount*1.5));

pageMonty.textContent ="Total: $"+(mTotalCost).toFixed(2);



//Average Earned Tips
const pageTips = document.getElementById("tips");
//Just to make this more interesting I decided to use an array
let ptTips = [202.45, 134.97, 256.63, 178.22];
let ptTotal = 0;

for(let i in ptTips){
    ptTotal+= ptTips[i];
}
let ptAverage = ptTotal/(ptTips.length)

pageTips.textContent = "Weekly Average: "+(ptAverage).toFixed(2);