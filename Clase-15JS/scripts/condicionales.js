
const AGE_MAX = 18;
const SEX = "m";

function ElBar(){
  let name = prompt('Ingresa tu nombre');
  let age = prompt('Ingresa tu edad');
  let sex = prompt('Ingresa tu sexo');

  if(age > AGE_MAX && sex.toLocaleLowerCase() == SEX ){
    alert(Welcome(name));
  } else if (age< AGE_MAX){
    alert(notSupporAge(name));
  } else{
    alert(notWelcome(name));
  }
}


  function Welcome(name){
    return `Bienvenido al bar ${name}`;
  }

  function notSupporAge(name){
    return `Lo siento ${name} no puedes entrar eres menor`;
  }

  function notWelcome(name){
    return `Lo siento ${name} no puedes entrar`;
  }

  //*ElBar();


  function flavorChose(flavor){
    return(`El sabor ${flavor} fue elegido`);
  }
  function flavorNotFound(flavor){
    return(`Lo siento ${flavor} no esta disponible`);
  }

  // * laHeladeria

  function laHeladeria(){
    let flavor = prompt('Ingresa el sabor que quieres (fresa,melon,sandia,naranja,kiwi)');

    switch(flavor){
      case 'fresa' :{
        alert(flavorChose(flavor));
        break;
      }
      case 'melon' :{
        alert(flavorChose(flavor));
        break;
      }
      case 'sandia' :{
        alert(flavorChose(flavor));
        break;
      }
      case 'naranja' :{
        alert(flavorChose(flavor));
        break;
      }
      case 'kiwi' :{
        alert(flavorChose(flavor));
        break;
      }
      default :{
        alert(flavorNotFound(flavor));
        break;
      }
    }
    console.log("Vuelva pronto :D");
  }

  // *laHeladeria();


  // function suma(a,b){
  //   if (arguments.length>2)throw console.error('Solo se puede sumar 2 numeros');
  //   return a+b;

  // }

  // suma(2,3,4);
  // console.log('acaa');


  function saveName(name){
    let message="";
    try{
      if(name.length<6) throw 'SHORT';
      if(name.length>10) throw 'LONG';

      message = `el nombre ${name} es correcto`;

    }catch(error){
      if (error === 'SHORT') message = `el nombre ${name} es muy corto`;
      if (error === 'LONG') message = `el nombre ${name} es muy largo`;
  } finally{
    console.log('NOMBRE EVALUADO',message);
  }
  }

  saveName('Juan');
  saveName('Juan Jose');
  saveName('Juan Jose Perez');
  saveName('Juan Jose Perez Perez');