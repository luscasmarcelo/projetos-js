function paraRomano(num) {
    const numeralRomano = [
      { valor: 1000, numeral: "M" },
      { valor: 900, numeral: "CM" },
      { valor: 500, numeral: "D" },
      { valor: 400, numeral: "CD" },
      { valor: 100, numeral: "C" },
      { valor: 90, numeral: "XC" },
      { valor: 50, numeral: "L" },
      { valor: 40, numeral: "XL" },
      { valor: 10, numeral: "X" },
      { valor: 9, numeral: "IX" },
      { valor: 5, numeral: "V" },
      { valor: 4, numeral: "IV" },
      { valor: 1, numeral: "I" }
    ];
    let resultado = "";
  
    for(let i = 0; i < numeralRomano.length; i++) {
      while (num >= numeralRomano[i].valor) {
        resultado += numeralRomano[i].numeral;
        num -= numeralRomano[i].valor;
      }
    }
    return resultado;
  }
  
  const number = document.getElementById("number");
  const convertBtn = document.getElementById("convert-btn");
  const output = document.getElementById("output");
  
  convertBtn.addEventListener("click", () => {
    const inputValue = parseFloat(number.value);
    if(!isNaN(inputValue) && inputValue >= 1 && inputValue <= 3999) {
      const numeralRomano = paraRomano(inputValue);
      output.innerText = numeralRomano;
    }else if(inputValue < 1) {
      output.innerText = "Insira um número maior ou igual a 1."
    }else if(number.value >= 4000) {
      output.innerText = "Insira um número menor ou igual a 3999."
    }else {
      output.innerText = "Insira um número válido."
    }
  });  