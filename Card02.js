document.getElementById('donation-button-02').addEventListener('click', function(event){
  event.preventDefault();
  // console.log('hi');
  const donationInput02 = getInputFieldValueById('donation-input-02');
  const donationTotalCurrentBalance = getTextFieldValueById('donation-total-current-balance');
  const donationMoney02 = getTextFieldValueById('donation-money-02');
  // console.log(donationInput, donationTotalCurrentBalance, donationMoney);
  
  
  if (donationInput02 > donationTotalCurrentBalance) {
    alert("Donation amount exceeds your account balance.");
    return;
  }
  
  
  if (isNaN(donationInput02) || donationInput02 <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  
  const updateDonationMoney =  donationMoney02  +  donationInput02 ;
  document.getElementById('donation-money-02').innerText = updateDonationMoney;
  
  const newCurrentBalance = donationTotalCurrentBalance - donationInput02;
  document.getElementById('donation-total-current-balance').innerText = newCurrentBalance;

    // add transaction history
    const cardLocation02 = document.getElementById('card-02-Location');
    // console.log(cardLocation);
    const p = document.createElement('p');
    p.innerText = `
    
    ${donationInput02} Taka is ${cardLocation02.innerHTML} 
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