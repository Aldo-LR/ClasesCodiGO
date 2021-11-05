// * FUNCION RETORNA VALORES , FUNCION PURA
function sumar(a,b){
  return a+b;
}

function restar(a,b){
  return a-b;
}

console.log(sumar(2,3));
console.log(sumar(3,4));
console.log(sumar(5,6));
console.log(sumar(7,8));

console.log(restar(12,2));
console.log(restar(13,5));
console.log(restar(15,2));
console.log(restar(17,2));

// * SOLO EJECUTA COMANDOS

(function (){

//* solo ejecuta comandos
  function calculadora(){
    let a = parseFloat(prompt("ingresa el primer numero"));

    let b = parseFloat(prompt("ingresa el segundo numero"));

    console.log("sumar a + b = ",sumar(a,b))
    console.log("restar a - b = ",restar(a,b))
  }
  //*calculadora();

})();




