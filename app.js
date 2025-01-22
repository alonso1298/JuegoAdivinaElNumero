let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)
    
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    // El usuario no aserto
    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', 'El numero es menor')
    } else {
        asignarTextoElemento('p', 'El numero es mayor')
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
} 

function generarNumeroSecreto() {
    let numeroGenerado = parseInt((Math.random()*numeroMaximo)+1);
    // Ya sorteamos todos los números
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // Si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la caja 
    limpiarCaja();
    // Mensaje de intervalo de numero
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();