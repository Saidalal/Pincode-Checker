function checkPincode() {
    var pincode = document.querySelector('.enter-pin').value;
    var pincodeApi = `https://api.postalpincode.in/pincode/${pincode}`;
    
    fetch(pincodeApi)
        .then(response => response.json())
        .then(data => {
            if (data[0].Status === 'Success') {
                console.log(`Pincode ${pincode} is valid.`);
            } else {
               console.log(`Invalid pincode or pincode not found.`); 
            }
        })
        .catch(error => alert(`Error: ${error}`));
}
