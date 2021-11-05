
//* LET

let nombre = "aldo";
let lr;
console.log(nombre);
console.log(lr);

lr= "otro valor";
console.log(lr);


//*  CONSTANTES
const PI = 3.1416;
console.log(PI);
// PI = 2 //dara error

//*TIPOS DE DATOS*/

let user = "Aldo"; //string
let age = 23; //number
let isMan = true; //boolean
let isMan2 = false;
let account = null; //null
let married; //undefined
let hash = Symbol ('123456'); //symbol -- valor unico

let alumno = {
  sexo: "f",
  edad: 23,
  grado: 5,
};  //*OBJECT

console.log(user, typeof user);
console.log(age, typeof age);
console.log(isMan, typeof isMan);
console.log(isMan2, typeof isMan2);
console.log(account, typeof account);
console.log(married, typeof married);
console.log(hash, typeof hash);
console.log(alumno, typeof alumno);


// * CAMBIAR TIPOS DE DATOS

let age2 = 30;
let age3 = '30 aldoo' ;
console.log(age2, typeof age2);
console.log(age2, typeof String(age2).replace('30',200));
console.log(age2, typeof Boolean(age2));
console.log(age3,  Number(age3).toFixed(2));
