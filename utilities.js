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