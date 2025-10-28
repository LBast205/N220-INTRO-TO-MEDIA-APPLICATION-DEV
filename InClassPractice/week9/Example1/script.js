console.log("Scripts Loaded");

const greetings = document.getElementsByClassName('greeting');
console.log(greetings);
console.log(greetings[0].innerHTML);
console.log(greetings[0].outerHTML);

const outputDiv = document.querySelector('#output');

const changeColorbtn = document.querySelector('.change-color-btn');
const addItembtn = document.querySelector('.add-item-btn');
const hoverbtn = document.querySelector('.hover-btn');

//Event output that will be overwritten when a new event happens
const eventOutput = document.createElement('p');
outputDiv.appendChild(eventOutput);

//Color Change Button Code
textColorChangeBool = false;
changeColorbtn.addEventListener('click', () => {
    if (textColorChangeBool) {//Change color back
        greetings[0].style.color = "#ffffff";
        textColorChangeBool = false;
        eventOutput.textContent = "Text color has been reverted";
    }else{//Change to new color
        greetings[0].style.color = "#fb7e14";
        textColorChangeBool = true;
        eventOutput.textContent = "Text color has been changed";
    }
    console.log(eventOutput.textContent);
    
})

//Add Item Button Code
addItembtn.addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, facere fuga? Dolor rerum ipsam voluptates recusandae corrupti at ex doloremque possimus odit quis? Voluptatem dolorem reiciendis qui quos. Consectetur, facere?";
    outputDiv.appendChild(newPara);
    eventOutput.textContent = "Added paragraph";
})

//Hover Button Code
hoverbtn.addEventListener('mouseover', () => {
    eventOutput.textContent = "Hovered over button";
})


//Key listener
document.addEventListener('keydown', (event) =>{
    eventOutput.textContent = `You pressed the "${event.key}" key`;
})
