function getInputFieldValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

function getTextFieldValueById(id){
  const inputTextValue = document.getElementById(id).innerText;
  const inputTextNumber = parseFloat(inputTextValue);
  return inputTextNumber;
}

function showSectionByBtn(id){

  document.getElementById('card').classList.add('hidden');
  document.getElementById('history').classList.add('hidden');


  document.getElementById(id).classList.remove('hidden');

}