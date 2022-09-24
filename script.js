let palabras = ["ALURA", "ORACLE", "GOOGLE", "LATAM", "HTML", "JAVA", "SOFTWARE", "HARDWARE", "CSS", "PYTHON", "RUBY", "PHP", "MYSQL", "SQL", "JQUERY", "ANGULAR", "REACT", "VUE", "NODE", "EXPRESS", "MONGODB", "MONGOOSE", "LARAVEL", "DJANGO", "FLASK", "RUBY", "ASP", "SWIFT", "KOTLIN", "RUST", "DART", "PERL", "MATLAB", "SCALA", "COBOL", "FORTRAN", "PASCAL", "LISP", "PROLOG", "HASKELL", "ERLANG", "ELIXIR", "RUST", "DART", "PERL"];
let tablero = document.getElementById("diseno_canva").getContext("2d");
let palabrasecreta = "";



function escojepalabra() {
    palabrasecreta = palabras[Math.floor(Math.random() * palabras.length)];
    console.log(palabrasecreta);
    return palabrasecreta;
}

function teclado(evento) {
    let tecla = evento.keyCode;
    let letra = String.fromCharCode(tecla);
    if (/[^A-ZÑ]/.test(letra)) {
        return
    }
    if (palabrasecreta.includes(letra)) {
        indicarLetras(letra);
    } else {
        indicarMalas(letra);
    }

}

// function clickLetra(event) {
//     let letrabtn = event.target;
//     letrabtn.disabled = true;
//     tecleado = letrabtn.innerHTML;
//     console.log(letrabtn);
//     if (palabrasecreta.includes(tecleado)) {
//         indicarLetras(tecleado);
//     }
//     else {
//         indicarMalas(tecleado);
//     }
// }

// function teclado_mobile(eve) {
//     let tecleado = document.querySelectorAll(".teclado_pantalla button");
    
//     for (let i = 0; i < tecleado.length; i++) {
//         tecleado[i].addEventListener("click", clickLetra);
//     }
// }

let correctas = [];
let palabra_mala = [];
function indicarLetras(correcta) {
    let ancholinea = 500 / palabrasecreta.length; //calcula el ancho de cada linea
    for (let i = 0; i < palabrasecreta.length; i++) {
        let reemplazo = palabrasecreta[i];
        if (reemplazo == reemplazo && !palabra_mala.includes(reemplazo)) {
            palabra_mala.push(reemplazo);
        }
        if (reemplazo == correcta) {
            tablero.font = "bold 30px Arial";
            tablero.fillStyle = "#0a3871";
            tablero.fillText(reemplazo, ancholinea * i + 565, 410);
            tablero.stroke();
            tablero.closePath();

            /* Comprobamos si la variable correcta es igual a la variable de reemplazo y si la variable correcta no está incluida en la matriz correctas. Si ambas condiciones son verdaderas, luego, la variable correcta se inserta en la matriz correctas. */
            if (correcta == reemplazo && !correctas.includes(correcta)) {
                correctas.push(correcta);

            }
        }
    }

    ganaste()
}

let contador = 7;
let incorrectas = [];

function indicarMalas(incorrecta) {
    let ancholinea = 500 / palabrasecreta.length; //calcula el ancho de cada linea
    for (let i = 0; i < palabrasecreta.length; i++) {
        let reemplazar = palabrasecreta[i];
        if (reemplazar != incorrecta && !incorrectas.includes(incorrecta)) {
            incorrectas.push(incorrecta);
            contador = contador - 1;
            if (contador == 0) {
                console.log("perdiste");
                perdiste();
            }
            console.log(contador);
            tablero.font = " 20px verdana ";
            tablero.fillStyle = "#000";
            tablero.fillText(incorrectas, ancholinea * i + 565, 450);
            tablero.stroke();
            tablero.closePath();
            break;
        }
    }
    munecohorca()
}


function iniciarJuego() {
    document.getElementById("iniciar_juego").style.display = "none";
    document.getElementById("nueva_palabra").style.display = "none";
    document.getElementById("footer_redes").style.display = "none";
    document.getElementById("ahorcado_img").style.display = "flex"; //muestra el canvas
    document.getElementById("contenedor_ahorcado").style.display = "flex";
    document.addEventListener("keydown", teclado);
    escojepalabra()
    dibujaAhorcado()
    lineasAbajo()
    contador = 7;
    incorrectas = [];
}

function regresarInicio() {
    document.getElementById("iniciar_juego").style.display = "block";
    document.getElementById("nueva_palabra").style.display = "block";
    document.getElementById("footer_redes").style.display = "block";
    document.getElementById("ahorcado_img").style.display = "none"; //oculta el canvas
    document.getElementById("text_Area").style.display = "none";
    document.getElementById("mesage_container").style.display = "none";
    document.getElementById("contenedor_ahorcado").style.display = "none";


}

function nuevoJuego() {
    document.getElementById("iniciar_juego").style.display = "none";
    document.getElementById("nueva_palabra").style.display = "none";
    document.getElementById("footer_redes").style.display = "none";
    document.getElementById("ahorcado_img").style.display = "flex";
    document.getElementById("contenedor_ahorcado").style.display = "flex";
    document.getElementById("mesage_container").style.display = "none";
    escojepalabra()
    dibujaAhorcado()
    lineasAbajo()
    contador = 7;
    incorrectas = [];
    correctas = [];
    palabra_mala = [];
}

const inputText = document.querySelector(".input_Text");

function nuevaPalabra() {
    document.getElementById("iniciar_juego").style.display = "none";
    document.getElementById("nueva_palabra").style.display = "none";
    document.getElementById("footer_redes").style.display = "none";
    document.getElementById("text_Area").style.display = "flex";
    inputText.value = ""
}

function perdiste() {
    document.getElementById("iniciar_juego").style.display = "none";
    document.getElementById("nueva_palabra").style.display = "none";
    document.getElementById("footer_redes").style.display = "none";
    document.getElementById("ahorcado_img").style.display = "none";
    document.getElementById("contenedor_ahorcado").style.display = "none";
    document.getElementById("mesage_container").style.display = "flex";
    document.getElementById("final_mesage").innerHTML = "Perdiste. 😭 ";
    document.getElementById("final_mesage").style.color = "red";
    document.getElementById("final_mesage").style.fontSize = "45px";
    document.getElementById("final_mesage_revelado").innerHTML = "La palabra era: " + palabrasecreta;


}

function ganaste() {

    let letra_correcta = JSON.stringify(correctas);
    let letra_mala = JSON.stringify(palabra_mala); 
    if (letra_correcta.length == letra_mala.length) {
        console.log("ganaste");
        document.getElementById("iniciar_juego").style.display = "none";
        document.getElementById("nueva_palabra").style.display = "none";
        document.getElementById("footer_redes").style.display = "none";
        document.getElementById("ahorcado_img").style.display = "none";
        document.getElementById("mesage_container").style.display = "flex";
        document.getElementById("contenedor_ahorcado").style.display = "none";
        document.getElementById("final_mesage").innerHTML = "Ganaste. 😎 ";
        document.getElementById("final_mesage").style.color = "green";
        document.getElementById("final_mesage").style.fontSize = "45px";
        document.getElementById("final_mesage_revelado").innerHTML = "";
    }
}


function guardaPalabra() {
    let palabraGuardada = document.getElementById("inputText").value;

    if (palabraGuardada.length > 8) {
        swal("", "La palabra no puede tener mas de 8 letras", "error");
    } else if (palabraGuardada.length < 3) {
        swal("", "La palabra no puede tener menos de 3 letras", "error");

    } else if (palabraGuardada.length == 0) {
        swal("", "No puedes dejar el campo vacio", "error");

    } else {
        swal({
            text: "La palabra se guardo correctamente",
            icon: "success",

            buttons: ["Agregar otra palabra", "Jugar"],
        }).then((value) => {
            if (value) {
                document.getElementById("text_Area").style.display = "none";
                iniciarJuego();

                palabras.push(palabraGuardada.toUpperCase());
                console.log(palabras);
            } else {
                document.getElementById("inputText").value = "";
            }
        });
    }

}
