let op2, op1, aux = 0;

document.getElementById("botoes").addEventListener('click',function(event){
  const num1 = parseFloat(event.target.id);
  if (num1>=0 && num1<=9) {
    document.getElementById("output").innerHTML += num1;
    op2 += num1; 
  }
  else if(event.target.id === "clean-all") {
    document.getElementById("output").innerHTML = "";
  }
  else if(event.target.value >= "1" && event.target.value <="4") {
    op1 = parseFloat(document.getElementById("output").innerText);
    document.getElementById("output").innerHTML += " "+ event.target.innerText+ " ";
    op2 = 0;
    aux = parseInt(event.target.value); 
  }
  else if(event.target.id === "=") {
    let resultado = 0; 
    switch(aux) {
      case 1: //dividir 
        resultado = op1 / op2;
        break;
      case 2: //multiplicar
        resultado = op1 * op2; 
        break;
      case 3: //subtrair 
        resultado = op1 - op2; 
        break;
      case 4: //somar
        resultado = op1 + op2;
        break;
    }
    document.getElementById("output").innerHTML = resultado;

  }
})