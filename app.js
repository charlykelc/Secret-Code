//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt('me indicas un numero entre el 1 y 100 por favor:'));

    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza
    la comparacion
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${Intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario >numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;  //rompemos el bucle para evitar que siga buscando
          //Si el numero de intentos es mayor a 3, rompemos el bucle para evitar que siga buscando
        }
        //La condicion no se cumplio
        //alert('Lo siento, no acertaste el numero');
    }  
    
}    