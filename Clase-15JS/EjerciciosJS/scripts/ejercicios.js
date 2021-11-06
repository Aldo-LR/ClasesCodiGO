(function ejercicio1(){

  let a = parseFloat(prompt("ingresa el primer numero a"));
  let b = parseFloat(prompt("ingresa el segundo numero b"));

  function sumar(a,b){
    return a+b;
  }
  console.log(sumar(a,b));

})();

(function ejercicio2(){

  let a = parseFloat(prompt("ingrese la primera nota"));
  let b = parseFloat(prompt("ingrese la segunda nota"));
  let c = parseFloat(prompt("ingrese la tercera nota"));
  let d = parseFloat(prompt("ingrese la cuarta nota"));

  function promedio(a,b,c,d){
    return (a+b+c+d)/4;
  }
  console.log(promedio(a,b,c,d));

})();

(function ejercicio3(){

  let a = parseFloat(prompt("ingrese la base"));
  let b = parseFloat(prompt("ingrese la altura"));

  function area_rectangulo(a,b){
    return a*b;
  }
  console.log(area_rectangulo(a,b));

})();

(function ejercicio4(){

  let a = parseFloat(prompt("ingrese la base"));
  let b = parseFloat(prompt("ingrese la altura"));

  function area_triangulo(a,b){
    return (a*b)/2;
  }
  console.log(area_triangulo(a,b));

})();

(function ejercicio5(){

    let a = parseFloat(prompt("ingrese el radio"));

    function area_circulo(a){
      return 3.1416*a*a;
    }
    console.log(area_circulo(a));

})();

(function ejercicio6(){

  let a = parseFloat(prompt("ingrese las horas trabajadas"));
  let b = parseFloat(prompt("ingrese el salario por hora"));

  function salario_por_hora(a,b){
    return a*b;
  }
  console.log(salario_por_hora(a,b));

})();

(function ejercicio7(){

  let a = parseFloat(prompt("ingrese la cantidad de tela"));

  function precio_tela(a){
    return a*0.0254;
  }
  console.log(precio_tela(a));

})();

(function ejercicio8(){

  let a = parseFloat(prompt("ingrese la cantidad de dinero (soles)"));

  function precio_dolar(a){
    return a*4.02;
  }
  console.log(precio_dolar(a));

})();

(function ejercicio9(){

  let a = prompt("ingrese el año en que nacio");

  function edad_actual(a){
    return 2021-a;
  }
  console.log(edad_actual(a));

})();

(function ejercicio10(){

  let nom1 = prompt("ingresa tu nombre");
  let edad1 = parseFloat(prompt("ingresa tu edad"));
  let nom2 = prompt("ingresa tu nombre");
  let edad2 = parseFloat(prompt("ingresa tu edad"));
  let nom3 = prompt("ingresa tu nombre");
  let edad3 = parseFloat(prompt("ingresa tu edad"));

function mayor_edad(edad1,edad2,edad3){
    if (edad1 < edad2 && edad1 < edad3){
      return edad1;

    }
    else if (edad2 < edad1 && edad2 < edad3){
      return edad2;

    }
    else if (edad3 < edad1 && edad3 < edad2){
      return edad3;

    }
  }
  console.log(mayor_edad(edad1,edad2,edad3));

})();

(function ejercicio11(){

  let a = parseFloat(prompt("ingrese cuantos años de antigüedad tiene"));
  let sueldo = 0;

  function antiguedad(a){
    if (a<=5){return sueldo + 100*a;}
    else{return sueldo + 1000}
  }
  console.log(antiguedad(a));

})();

(function ejercicio12(){

  let salario = 1500;

  function salario_bono(){
    for (let i = 1; i < 6; i++){
    salario = salario + (salario*0.10);
    console.log("El salario del año " + i + " es " + salario);
    }
  }
  console.log(salario_bono());

})();

(function ejercicio13(){

  let a = parseFloat(prompt("cuantos alumnos tiene"));
  let desaprobados = 0;
  let aprobados = 0;
  function calificaciones(a){
    while (a>0){
      let b = parseFloat(prompt("ingrese la nota del alumno"));
      if (b<=10){
        desaprobados++;
      }
      else{
        aprobados++;
      }
      a--;
    }
    console.log("aprobados: " + aprobados);
    console.log("desaprobados: " + desaprobados);

  }
  calificaciones(a);


})();

(function ejercicio14(){

  let a = parseFloat(prompt("ingrese la cantidad de focos"));
  let fverde = 0;
  let fblanco = 0;
  let frojo = 0;
  function focos(a){
    while (a>0){
      let color = prompt("ingrese el color del foco(verde,blanco,rojo)")
      switch (color){
        case "verde": { fverde++; break;}
        case "blanco": { fblanco++; break;}
        case "rojo": { frojo++; break;}
        default: {console.log("color no valido");}
        }
      a--;
    }
    console.log("focos verdes: "+fverde+" -- focos blancos: "+fblanco+" -- focos rojos: "+frojo);
  }
  focos(a);

})();

(function ejercicio15(){
  let a = parseFloat(prompt("ingrese su edad"));

  function edad(a){
    if (a>=18){
      return console.log("puede votar");
    }
    else {
      return console.log("No puede votar");
    }
  }
  edad(a);
})();

