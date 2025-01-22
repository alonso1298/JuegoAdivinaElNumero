let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function botonClick() {
    alert('El botón fue clicado');
}

function iLove() {
    alert('Yo amo JS');
}

function preguntaNombre() {
    let nombre = prompt('Ingresa un nombre de una ciudad de Brasil');
    alert(`Estuve en la ciudad de ${nombre} y me acorde de ti`);
}

function suma() {
    let num1 = parseInt(prompt('Ingresa el primer numero a sumar'));
    let num2 = parseInt(prompt('Ingresa el primer numero a sumar'));
    alert(`La suma de los numero es de: ${num1 + num2}`);
}