
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
let listaNumeros = [10, 20, 30, 40, 50];

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');

function muestraElementosLista(lista) {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lista[i]);
    }
}

function muestraElementosListaInverso(lista) {
    for (let i = lista.length -1; i >=0; i-- ) {
        console.log(lista[i]);
    }
}

function promedioLista(lista) {
    let totalSuma = 0;
    for (let i = 0; i < lista.length; i++){
        totalSuma += lista[i];
    }
    return totalSuma / lista.length
}

function maximoMinimo(lista) {
    let mayor = lista[0];
    let menor = lista[0];

    for(let i = 0; i < lista.length; i++){
        if(lista[i] > mayor) {
            mayor = lista[i];
        }
        if(lista[i] < menor) {
            menor = lista[i]
        }
    }
    console.log(`El numero mayor es: ${mayor} y el numero menor es: ${menor}`);
}

function sumaLista(lista) {
    let totalSuma = 0;
    for (let i = 0; i < lista.length; i++){
        totalSuma += lista[i];
    }
    return totalSuma
}

muestraElementosLista(lenguajesDeProgramacion);
console.log('------------------------------------------')
muestraElementosListaInverso(lenguajesDeProgramacion);
console.log('------------------------------------------')
console.log(promedioLista(listaNumeros));
console.log('------------------------------------------')
maximoMinimo(listaNumeros);
console.log('------------------------------------------')
console.log(sumaLista(listaNumeros));

