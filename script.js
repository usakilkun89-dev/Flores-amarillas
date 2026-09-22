const sobre = document.getElementById("sobre");
const inicio = document.getElementById("inicio");
const contenido = document.getElementById("contenido");

const ramoInteraccion =
    document.getElementById("ramoInteraccion");

const mensajeTexto =
    document.getElementById("mensajeTexto");

const petalosCaidos =
    document.getElementById("petalosCaidos");


/* =========================
   FRASES
========================= */

const frases = [

    "Para alguien muy especial...",

    "No sé en qué momento comenzaste a ocupar tanto espacio en mis pensamientos.",

    "Tal vez las flores no sepan decir lo que siento, pero espero que puedan acercarse un poquito.",

    "Hay personas que llegan sin avisar y, sin darse cuenta, cambian el color de nuestros días.",

    "Y entre tantas casualidades, qué bonito que la vida haya hecho que nuestros caminos se cruzaran.",

    "No te regalo estas flores para pedirte nada; te las regalo porque pensé en ti.",

    "Quizá querer también sea esto: cuidar un sentimiento sin exigirle que florezca de inmediato."

];


const fraseFinal =
    "Y si llegaste hasta aquí... estas flores siempre fueron para ti. 🌻";


let indiceFrase = 0;


/* =========================
   ABRIR SOBRE
========================= */

sobre.addEventListener("click", () => {

    if (sobre.classList.contains("abierto")) {
        return;
    }

    sobre.classList.add("abierto");


    setTimeout(() => {

        inicio.classList.add("ocultar");

    }, 1200);


    setTimeout(() => {

        contenido.classList.add("mostrar");

        iniciarFrases();

        crearPetalos();

    }, 1800);

});


/* =========================
   FRASES
========================= */

function iniciarFrases() {

    mensajeTexto.textContent =
        frases[0];

    setTimeout(() => {

        siguienteFrase();

    }, 5000);

}


function siguienteFrase() {

    indiceFrase++;


    if (indiceFrase < frases.length) {

        cambiarTexto(
            frases[indiceFrase]
        );

        setTimeout(
            siguienteFrase,
            5500
        );

    } else {

        setTimeout(() => {

            cambiarTexto(
                fraseFinal,
                true
            );

        }, 5500);

    }

}


/* =========================
   CAMBIO DE TEXTO
========================= */

function cambiarTexto(texto, final = false) {

    mensajeTexto.style.opacity = "0";

    mensajeTexto.style.transform =
        "translateY(15px)";


    setTimeout(() => {

        mensajeTexto.textContent =
            texto;


        if (final) {

            mensajeTexto.classList.add(
                "final"
            );

        }


        mensajeTexto.style.opacity = "1";

        mensajeTexto.style.transform =
            "translateY(0)";

    }, 1000);

}


/* =========================
   PÉTALOS
========================= */

function crearPetalos() {

    const cantidad = 16;


    for (let i = 0; i < cantidad; i++) {

        const petalo =
            document.createElement("span");


        petalo.classList.add(
            "petalocaido"
        );


        petalo.style.left =
            Math.random() * 100 + "%";


        petalo.style.animationDuration =
            (7 + Math.random() * 6) + "s";


        petalo.style.animationDelay =
            (Math.random() * 8) + "s";


        petalo.style.transform =
            `scale(${0.6 + Math.random() * 0.8})`;


        petalosCaidos.appendChild(
            petalo
        );

    }

}


/* =========================
   MOVIMIENTO DEL MOUSE
========================= */

document.addEventListener(
    "mousemove",
    (evento) => {

        if (
            !contenido.classList.contains(
                "mostrar"
            )
        ) {
            return;
        }


        const x =
            (evento.clientX /
                window.innerWidth) - .5;


        const y =
            (evento.clientY /
                window.innerHeight) - .5;


        ramoInteraccion.style.transform =
            `
            translate(
                ${x * 12}px,
                ${y * 8}px
            )
            rotate(
                ${x * 3}deg
            )
            `;

    }
);


/* =========================
   REGRESAR AL CENTRO
========================= */

document.addEventListener(
    "mouseleave",
    () => {

        ramoInteraccion.style.transform =
            "translate(0, 0) rotate(0deg)";

    }
);