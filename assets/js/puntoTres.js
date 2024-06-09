let opcionUno = document.querySelector('#opcionUno');
opcionUno.onchange = opcionUno;

let opcionDos = document.querySelector('#opcionDos');
opcionDos.onchange = opcionDos;

let opcionTres = document.querySelector('#opcionTres');
opcionTres.onchange = opcionTres;

let button = document.querySelector('button')
button.onclick = ingresarPassword;

function ingresarPassword() {
    let password = (opcionUno.value + opcionDos.value + opcionTres.value);
    let parrafo = document.querySelector('h2');

    if ( password == '911' ) {
        parrafo.innerHTML = 'Password 1 correcto'
    } else if ( password == '714' ) {
        parrafo.innerHTML = 'Password 2 correcto'
    } else {
        parrafo.innerHTML = 'Password incorrecto'
    }
}