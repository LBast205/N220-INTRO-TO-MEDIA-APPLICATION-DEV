console.log("Scripts Loaded");

// Dom Access (Selecting HTML Elements)
const form = document.getElementById("userForm");
console.log(form);
const message = document.getElementById("message");

//Form Listener
form.addEventListener('submit', function(event){
    event.preventDefault(); 
    
    //Extract input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const country = document.getElementById('country').value;
    const termsChecked = document.getElementById('terms').checked;

    //Radio Values
    let gender='';
    const genderRadios = document.getElementsByName('gender');
    for(let radio of genderRadios){
        if(radio.checked){
            gender= radio.value;
            break;
        }
    }
    console.log(genderRadios);

    //Form Validataion
    if (!name || !email || !password) {
        showMessage('Please fill out all required feilds', 'error');
        return;
    }
    if(!termsChecked){
        showMessage('You must agree to the Terms & Conditions before submitting', 'error');
        return;
    }

    //Create a Javascript object to store the form data
    const userData ={
        name: name,
        email: email,
        password: password,
        age: age || 'Not selected',
        gender: gender || 'Not selected',
        country: country || 'Not selected',
        termsAccepted: termsChecked
    }

    //Convert Obj to Json
    const jsonData = JSON.stringify(userData,null,2);

    message.className = `success`;
    message.textContent = `User Data: ${jsonData}`;
    
    //download user data as .json
    const blob = new Blob([jsonData],{type:'application/json'})//Binary Large OBject
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'userData.json';//Name of file

    //Create download link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);


    // showMessage(`Hello ${name}!\n\nEmail: ${email}\nPassword: ${password}\nAge: ${age}`, 'success');
    setTimeout(() => form.reset(), 1500);
    
});

function showMessage(text, type) {
        message.textContent = text;
        message.className = type;
}