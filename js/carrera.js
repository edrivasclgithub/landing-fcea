// JavaScript Document

var formCarrera = document.getElementById("text-00000010");

function cambiarCarrera(a){

    if(a !=""){
        switch (a) {
  case 'Licenciatura en Marketing':
    formCarrera.value = a;
    console.log(formCarrera.value);
    break;
  case 'Licenciatura en Gestión Financiera y Auditoría':
    formCarrera.value = a;
    console.log(formCarrera.value);
    break;
  case 'Licenciatura Dirección Empresarial':
    formCarrera.value = a;
    console.log(formCarrera.value);
    break;
    case 'Licenciatura en Economía':
    formCarrera.value = a;
    console.log(formCarrera.value);
    break;
    case 'Licenciatura en Hospitalidad y Turismo':
    formCarrera.value = a;
    console.log(formCarrera.value);
    break;
    case 'Licenciatura en Administración Hotelera':
    formCarrera.value = a;
    console.log(formCarrera.value);
    break;
  default:
    console.log(`Sorry, we are out of ${formCarrera}.`);
}
    }
}

cambiarCarrera(programa);