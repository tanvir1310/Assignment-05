document.getElementById('donation-button').addEventListener('click', function(event){
event.preventDefault();
// console.log('hi');
const donationInput = getInputFieldValueById('donation-input');
const donationTotalCurrentBalance = getTextFieldValueById('donation-total-current-balance');
const donationMoney = getTextFieldValueById('donation-money');
const cardLocation = document.getElementById('card-Location');
// console.log(donationInput, donationTotalCurrentBalance, donationMoney);


if (donationInput > donationTotalCurrentBalance) {
  alert("Donation amount exceeds your account balance.");
  return;
}


if (isNaN(donationInput) || donationInput <= 0) {
  alert("Please enter a valid donation amount.");
  return;
}


const updateDonationMoney =  donationMoney  +  donationInput ;
document.getElementById('donation-money').innerText = updateDonationMoney;

const newCurrentBalance = donationTotalCurrentBalance - donationInput;
document.getElementById('donation-total-current-balance').innerText = newCurrentBalance;

    // add transaction history

    const cardLocation01 = document.getElementById('card-Location');
    // console.log(cardLocation);
    const p = document.createElement('p');
    p.innerText = `
    
    ${donationInput} Taka is ${cardLocation01.innerHTML} 
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







