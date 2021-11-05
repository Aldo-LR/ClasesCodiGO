(function (){

  let a = parseFloat(prompt("ingresa el primer numero a"));
  let b = parseFloat(prompt("ingresa el segundo numero b"));


function sumar(a,b){
  return a+b;
}

function restar(a,b){
  return a-b;
}

function multiplicar(a,b){
  return a*b;
}

function dividir(a,b){
  return a/b;
}

function potencia(a,b){
  return a**b;
}
document.write("Los numeros ingresados fueron a " + a + " y b " + b + "<br>");
document.write("la suma es: " + sumar(a,b) + "<br>");
document.write("la resta es: " + restar(a,b) + "<br>");
document.write("la multiplicacion es: " + multiplicar(a,b) + "<br>");
document.write("la division es: " + dividir(a,b) + "<br>");
document.write("la potencia es: " + potencia(a,b) + "<br>");

console.log(sumar(a,b));
console.log(restar(a,b));
console.log(multiplicar(a,b));
console.log(dividir(a,b));
console.log(potencia(a,b));
})();