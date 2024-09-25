document.getElementById('donation-button').addEventListener('click', function(event){
event.preventDefault();
// console.log('hi');
const donationInput = getInputFieldValueById('donation-input');
const donationTotalCurrentBalance = getTextFieldValueById('donation-total-current-balance');
const donationMoney = getTextFieldValueById('donation-money');
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
    const card01Location = document.getElementById('card-01-Location')
    const div = document.createElement('div');
    div.innerHTML = `
    
    <div class="text-block">${updateDonationMoney} Taka is ${card01Location}</div>

    
    `
    document.getElementById('history').appendChild(div);

});







