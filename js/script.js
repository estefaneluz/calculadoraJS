let op2, op1, aux = 0;
let novoNumero = true; 
let novaOperacao = true; 

document.getElementById("botoes").addEventListener('click',function(event){
  
  if (event.target.innerText>=0 && event.target.innerText<=9 || event.target.id===".") {
    if(novoNumero) {
      document.getElementById("output").innerHTML = event.target.innerText;
      novoNumero = false; 
    } else {
      document.getElementById("output").innerHTML += event.target.innerText;
    }
    op2 += event.target.innerText; 
  }
  else if(event.target.id === "clean-all") {
    document.getElementById("output").innerHTML = "";
    novaOperacao = true;
  }
  else if(event.target.value >= "1" && event.target.value <="4") {
    //verficação para não permitir que tentem fazer outra conta ao msm tempo 
    //ex: 2+- ou 2 + 2 x 3 
    op1 = parseFloat(document.getElementById("output").innerText);

    if(novaOperacao) { 
      document.getElementById("output").innerHTML += " "+ event.target.innerText+ " ";
      novaOperacao = false;
    } else {
      document.getElementById("output").innerHTML = op1 +" "+ event.target.innerText+ " ";
    }
    op2 = 0;
    aux = parseInt(event.target.value); 
  }
  else if(event.target.id === "=") {
    op2 = parseFloat(op2);
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
    novoNumero = true; 
    novaOperacao = true;
  }
})