// Fetch - A modern JS browser interface for making HTTP requests
fetch('userData.json')
    //First then() recevies the response object
    // .json() converts the raw data into JSON data
    .then(response => response.json())
    // Once data is converted, it can be used in this block
    .then(data =>{
        console.log(data);
        const continer = document.getElementById('user-info');
        
        const p = document.createElement('p');
        p.textContent = `${data.name} (${data.email}) - Age: ${data.age}`
        continer.appendChild(p);

        const details = document.createElement('p');
        details.textContent = `Gender: ${data.gender}, Country: ${data.country}`
        continer.appendChild(details);
    })

    .catch(error => console.error('Error Collecting User Data'))