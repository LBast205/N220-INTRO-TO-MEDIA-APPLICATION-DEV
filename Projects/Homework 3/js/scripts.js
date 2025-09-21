console.log("Javascript Loaded Successfully");

const btn = document.getElementById("calculate");
const output = document.getElementById("output")

var principle, rate, time, interest; //Set up our variables

function btnClick(){ //Called by the button
    principle = parseFloat(document.getElementById("principle").value);
    rate = parseFloat(document.getElementById("rate").value);
    time = parseFloat(document.getElementById("time").value);
    interest = parseFloat(calcInterest(principle, rate, time))
    total = interest+principle;

    //Decimal formatter. If there is a decimal will set to have two decimal places. 
    if(interest %1 !== 0){ //checks if there is a decimal
        interest = interest.toFixed(2);
        total = total.toFixed(2);
    }

    //output
    if(isNaN(interest)){ //missing field
        output.textContent = "Error: Missing Field. Make sure all fields are filled in and remove any letters or characters.";
    }else{
        output.textContent = `With a beginning principal of $${principle} and with a growth rate of ${rate}% for ${time} years, your total intrest will be $${interest} with a grand total of $${total}.`;
    }
}

function calcInterest(princ, rt, tm){ //Performs the interest formula. Returns as float. If there is an invalid field will return NaN. 
    let inter = ((princ*(1+(rt*.01)*tm))-princ); 
    return parseFloat(inter).toFixed(2); //toFixed removes any numbers after the seccond decimal, however decimal formatting will be lost when returned.
}
