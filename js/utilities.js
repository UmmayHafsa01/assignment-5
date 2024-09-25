
function getInputValuebyId(id){
  const inputvalue =  document.getElementById(id).value;
  const inputNumber = parseFloat(inputvalue);
  return inputNumber;
}
function getTextValuebyId(id){
    const textvalue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textvalue);
    return textNumber;
}


