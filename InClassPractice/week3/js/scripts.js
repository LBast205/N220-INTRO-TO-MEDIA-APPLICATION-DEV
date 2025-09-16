const myButton = document.getElementById("my-button");
const clickCountElement = document.getElementById("click-count");
const secretTextElement = document.getElementById("secret-text");

//Console Testing
let consoleText = "Hello World! This text and the ruturned variables are for testing!";
console.log(consoleText);
console.log(consoleText.endsWith("ing!")); //returns true 

let consoleText2 = "Now let's try replacing!"
console.log(consoleText2.replace("let's try replacing!","you won't read this!")); //Replaces text

let backtickText = "backtick!"
console.log(`Don't forget about the ${backtickText}`)

console.log(Math.pow(2,3)); //Is equal to 2^3
console.log(2**3); //Same as above

console.log(Math.sqrt(2,3)); //Is equal to 2 sqareroot 3

console.log(Math.abs(-10)); //returns 10, removes negative

console.log(Math.round(1.24)); //rounds by normal logic
console.log(Math.ceil(1.24)); //rounds up
console.log(Math.floor(1.24)); //rounds down
console.log(Math.trunc(1.24)); //removes the decimal


//Page Code
let count = 0;
let dependentS = "";

myButton.addEventListener("click", function(){
count++;
clickCountElement.textContent = (`You Have Clicked ${count} Time${dependentS}!`);
console.log("Button clicked.");
secretTextElement.textContent = "";
if(count > 0){
    dependentS = "s";
}
if(count == 69){
    secretTextElement.textContent = "Nice :)";
}

})




