console.log("Scripts Loaded");

const nameInput = document.querySelector('#userInputName');
const dateInput = document.querySelector('#userInputDate');
const button = document.querySelector('#validateBtn');
const resultNameDiv = document.querySelector('#result1');
const resultDateDiv = document.querySelector('#result2');

button.addEventListener('click', ()=>{
    const userText = nameInput.value;
    const userDate = dateInput.value;
    const regexLetter = /^[A-Za-z]+$/;
    const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if(regexLetter.test(userText)){
        resultNameDiv.textContent = "Valid Name✅";
        resultNameDiv.style.color = "green";
    }else{
        resultNameDiv.textContent = "Invalid Name❌ (Only letters are allowed)";
        resultNameDiv.style.color = "red";
    }

    if(regexDate.test(userText)){
        resultDateDiv.textContent = "Valid Date✅";
        resultDateDiv.style.color = "green";
    }else{
        resultDateDiv.textContent = "Invalid Date❌";
        resultDateDiv.style.color = "red";
    }
})