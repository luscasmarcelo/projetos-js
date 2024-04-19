const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const lowerReplaced = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g,"");
  
  if (textInput.value === "") {
    alert("Insira um valor.")
  }else if (textInput.value.length === 1) {
    result.innerText = `${textInput.value} é um palíndromo!`
  }else if (lowerReplaced === [...lowerReplaced].reverse().join("")) {
    result.innerText = `${textInput.value} é um palíndromo!`
  } else {
    result.innerText = `${textInput.value} não é um palíndromo!`
  }
});