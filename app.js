let numeroSecreto = 0;
let intentos =1 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;  
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos==1 ? " vez" : " veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuarion no asertó
        if(numeroUsuario < numeroSecreto){
            asignarTextoElemento('p','El número secreto es mayor');
        }else{
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    /*
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()*numeroMaximo))+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //preguntar si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se asignaron todos los números posibles");
    }else{
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}

condicionesIniciales();
