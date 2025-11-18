console.log("Scripts Loaded");

const nameInput = document.querySelector('#userInputName');
const dateInput = document.querySelector('#userInputDate');
const button = document.querySelector('#validateBtn');
const resultNameDiv = document.querySelector('#result1');
const resultDateDiv = document.querySelector('#result2');

button.addEventListener('click', ()=>{
    const userText = nameInput.value;
    const regexLetter = /^[A-Za-z]+$/;
    
    if(regexLetter.test(userText)){
        resultNameDiv.textContent = "Valid Name✅";
        resultNameDiv.style.color = "green";
    }else{
        resultNameDiv.textContent = "Invalid Name❌ (Only letters are allowed)";
        resultNameDiv.style.color = "red";
    }

})