document.getElementById('donation-button-03').addEventListener('click', function(event){
  event.preventDefault();
  // console.log('hi');
  const donationInput03 = getInputFieldValueById('donation-input-03');
  const donationTotalCurrentBalance = getTextFieldValueById('donation-total-current-balance');
  const donationMoney03 = getTextFieldValueById('donation-money-03');
  // console.log(donationInput, donationTotalCurrentBalance, donationMoney);
  
  
  if (donationInput03 > donationTotalCurrentBalance) {
    alert("Donation amount exceeds your account balance.");
    return;
  }
  
  
  if (isNaN(donationInput03) || donationInput03 <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  
  const updateDonationMoney =  donationMoney03  +  donationInput03 ;
  document.getElementById('donation-money-03').innerText = updateDonationMoney;
  
  const newCurrentBalance = donationTotalCurrentBalance - donationInput03;
  document.getElementById('donation-total-current-balance').innerText = newCurrentBalance;

    // add transaction history
    const cardLocation03 = document.getElementById('card-03-Location');
    // console.log(cardLocation);
    const p = document.createElement('p');
    p.innerText = `
    
    ${donationInput03} Taka is ${cardLocation03.innerHTML} 
    Date: ${new Date().toString()}
    
    `;
    p.style.fontWeight = 'bold';  // Makes the text bold
    p.style.color = 'black';
    p.style.textAlign = 'center'; // Center text
    p.style.border = '2px solid black'; // Black border
    p.style.padding = '10px'; 
    p.style.maxWidth = '1160px'; 
    p.style.marginLeft = 'auto';
    p.style.marginRight = 'auto';
    p.style.marginBottom = '20px '; 
    document.getElementById('history').appendChild(p);
  
  });