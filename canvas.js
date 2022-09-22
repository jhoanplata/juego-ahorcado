function dibujaAhorcado() {
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#e5e5e5";
    tablero.strokeStyle = "#0a3871";

    tablero.fillRect(370, 0, 800, 660);
    tablero.beginPath();
    tablero.moveTo(650, 300);
    tablero.lineTo(900, 300);
    tablero.stroke();
    tablero.closePath();

    tablero.moveTo(775, 300);
    tablero.lineTo(775, 50);
    tablero.stroke();
    tablero.closePath();

    tablero.moveTo(775, 50);
    tablero.lineTo(600, 50);
    tablero.stroke();
    tablero.closePath();
}

function lineasAbajo() {
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#e5e5e5";
    tablero.strokeStyle = "#0a3871";

    let ancholinea = 500 / palabrasecreta.length; //calcula el ancho de cada linea
    for (let i = 0; i < palabrasecreta.length; i++) {
        tablero.beginPath();
        tablero.moveTo(ancholinea * i + 550, 420); //550 es el inicio de la linea en x , 420 es el inicio de la linea en y
        tablero.lineTo(ancholinea * i + 600, 420);
        tablero.stroke();
        tablero.closePath();
    }
}


function munecohorca() {
    switch (contador) {
        case 6:
            palito();
            break;
        case 5:
            cabeza();
            break;
        case 4:
            cuerpo();
            break;
        case 3:
            brazoizq();
            break;
        case 2:
            brazoder();
            break;
        case 1:
            piernaizq();
            break;
        case 0:
            piernader();
            break;
    }
}


function palito() {
    tablero.beginPath();
    tablero.moveTo(600, 50);
    tablero.lineTo(600, 100);
    tablero.stroke();
    tablero.closePath();
}

function cabeza() {
    tablero.beginPath();
    tablero.arc(600, 130, 30, 0, Math.PI * 2, false);
    tablero.stroke();
    tablero.closePath();
}

function cuerpo() {
    tablero.beginPath();
    tablero.moveTo(600, 160);
    tablero.lineTo(600, 230);
    tablero.stroke();
    tablero.closePath();
}

function brazoizq() {
    tablero.beginPath();
    tablero.moveTo(600, 180);
    tablero.lineTo(575, 200);
    tablero.stroke();
    tablero.closePath();
}

function brazoder() {
    tablero.beginPath();
    tablero.moveTo(600, 180);
    tablero.lineTo(625, 200);
    tablero.stroke();
    tablero.closePath();
}

function piernaizq() {
    tablero.beginPath();
    tablero.moveTo(600, 230);
    tablero.lineTo(575, 250);
    tablero.stroke();
    tablero.closePath();
}

function piernader() {
    tablero.beginPath();
    tablero.moveTo(600, 230);
    tablero.lineTo(625, 250);
    tablero.stroke();
    tablero.closePath();
}
