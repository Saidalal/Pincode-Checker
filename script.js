function checkPincode() {
    var pincode = document.querySelector('.enter-pin').value;
    var pincodeApi = `https://api.postalpincode.in/pincode/${pincode}`;
    var resultList = document.querySelector('.result-list');
    
    resultList.innerHTML = '';

    fetch(pincodeApi)
        .then(response => response.json())
        .then(data => {
            if (data[0].Status === 'Success') {
                var postOffices = data[0].PostOffice;
                postOffices.forEach(postOffice => {
                    var listItem = document.createElement('li');
                    listItem.innerHTML = `<b>${postOffice.Name}</b> - ${postOffice.DeliveryStatus}`;
                    resultList.appendChild(listItem);
                });
            } else {
                var listItem = document.createElement('li');
                listItem.textContent = 'Invalid pincode or pincode not found.';
                resultList.appendChild(listItem);
            }
        })
        .catch(error => alert(`Error: ${error}`));
}
