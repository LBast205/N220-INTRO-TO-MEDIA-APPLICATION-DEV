try{
    console.log(undefinedVariable);
    console.log("This message will not be sent")
} catch(error){
    console.log("Error Details: ", error.message);
}

const adviceBtn = document.getElementById("advice-button");
const catBtn = document.getElementById("cat-button");
const output = document.getElementById("output");

adviceBtn.addEventListener("click", async() =>{
    const url = "https://api.adviceslip.com/advice";
    
    output.textContent = "Fetching adivce for you...";

    try{
        const response = await fetch(url);
        const data = await response.json();
        const adviceText = data.slip.advice;
        output.textContent = adviceText;

    } catch(error){
        output.textContent = `An error occured: ${error.message}`
    }
})