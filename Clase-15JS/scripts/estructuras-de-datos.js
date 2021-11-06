let numbers = [0,1,2,3,4,5,6,7,8,9];
let nombres = ['sebastian','jose','luis','pedro'];
let sabores = ['chocolate','vainilla','fresa'];

console.log(nombres[0]);
console.log(sabores[2]);


// * LENGTH
numbers.length // * LONGITUD DE UN ARRAY

// * PUSH
numbers.push(10); // * AGREGA UN ELEMENTO AL FINAL DEL ARRAY

// * UNSHIFT
numbers.unshift(0); // * AGREGA UN ELEMENTO AL INICIO DEL ARRAY

//* POP
numbers.pop(); // * ELIMINA EL ULTIMO ELEMENTO DEL ARRAY

// * SHIFT
numbers.shift(); // * ELIMINA EL PRIMER ELEMENTO DEL ARRAY

//* SPLICE
numbers.splice(1,2); // * ELIMINA LOS ELEMENTOS DEL ARRAY

let alumno = {
    nombre: 'sebastian',
    lastname: 'perez',
    age: 23,
    grade:5,
    sex: 'm',

    getName: function (){
      return this.nombre;
    },
    getFullName: function(){
      return `${this.nombre} ${this.lastname}`;
    },
};

console.log('alumno.nombre',alumno.nombre);
console.log('alumno.nombre',alumno.lastname);



// let profesor = {
//   nombre: 'aldo',
//   lastname: 'lazaro',
//   age: 24,
//   grade: 5,
//   sex: 'm',
//   experience[
//     {
//       college: 'santisima trinidad',
//       age: 2022,
//     },
//   ]
// }