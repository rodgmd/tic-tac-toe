let jugador = 'X';
let ganador = '';
let jugando = true;

(() => {
    const divs = document.getElementsByClassName('vidrio');
    const images = document.getElementsByClassName('marca');

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', () => {
            (jugador === 'X') ? marcarEquis(images[i]) : marcarCirculo(images[i]);
        }, { once: true });
    }
})();

function hayGanador() {
    if (determinarGanador() !== '') {
        if (determinarGanador() === 'Empate') {
            setTimeout(function () { alert(ganador + '!') }, 100);
        }
        else {
            setTimeout(function () { alert("Ganó " + ganador + '!') }, 100);
        }
        document.getElementById('divs-grid').remove();
        setTimeout(function () { window.location.reload() }, 100);
    }
}

function marcarEquis(imgElement) {
    imgElement.src = 'equis.svg';
    jugador = 'Círculo';
    hayGanador();
}

function marcarCirculo(imgElement) {
    imgElement.src = 'círculo.svg';
    jugador = 'X';
    hayGanador();
}

function cargarMarcas() {
    const imagenes = document.getElementsByClassName('marca');
    let marcas = [];

    for (let imagen of imagenes) {
        let data = '';
        if (imagen.getAttribute('src') === 'equis.svg') {
            data = 'x';
        }
        else if (imagen.getAttribute('src') === 'círculo.svg') {
            data = 'o';
        }
        else {
            data = 'v';
        }
        marcas.push(data);
    }
    return marcas;
}

function determinarGanador() {
    const marcas = cargarMarcas();

    if ((marcas[0] === 'x' && marcas[1] === 'x' && marcas[2] === 'x') ||
        (marcas[3] === 'x' && marcas[4] === 'x' && marcas[5] === 'x') ||
        (marcas[6] === 'x' && marcas[7] === 'x' && marcas[8] === 'x') ||
        (marcas[0] === 'x' && marcas[3] === 'x' && marcas[6] === 'x') ||
        (marcas[1] === 'x' && marcas[4] === 'x' && marcas[7] === 'x') ||
        (marcas[2] === 'x' && marcas[5] === 'x' && marcas[8] === 'x') ||
        (marcas[0] === 'x' && marcas[4] === 'x' && marcas[8] === 'x') ||
        (marcas[2] === 'x' && marcas[4] === 'x' && marcas[6] === 'x')) {
        ganador = 'X';
    }

    if ((marcas[0] === 'o' && marcas[1] === 'o' && marcas[2] === 'o') ||
        (marcas[3] === 'o' && marcas[4] === 'o' && marcas[5] === 'o') ||
        (marcas[6] === 'o' && marcas[7] === 'o' && marcas[8] === 'o') ||
        (marcas[0] === 'o' && marcas[3] === 'o' && marcas[6] === 'o') ||
        (marcas[1] === 'o' && marcas[4] === 'o' && marcas[7] === 'o') ||
        (marcas[2] === 'o' && marcas[5] === 'o' && marcas[8] === 'o') ||
        (marcas[0] === 'o' && marcas[4] === 'o' && marcas[8] === 'o') ||
        (marcas[2] === 'o' && marcas[4] === 'o' && marcas[6] === 'o')) {
        ganador = 'Círculo';
    }

    if (ganador === '') {
        for (let marca of marcas) {
            if (marca === 'v') {
                jugando = true;
                break;
            }
            else {
                jugando = false;
            }
        }
        if (jugando === false) ganador = 'Empate';
    }
    return ganador;
}