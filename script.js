// Animación suave al aparecer las secciones

const sections = document.querySelectorAll("section");

const mostrarSeccion = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("mostrar");

        }

    });

};

window.addEventListener("scroll", mostrarSeccion);

mostrarSeccion();


// Efecto flotante en las tarjetas

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// Efecto máquina de escribir en el título

const texto = "💻 Estudiante de Programación";
const subtitulo = document.querySelector("header h2");

subtitulo.textContent = "";

let i = 0;

function escribir() {

    if (i < texto.length) {

        subtitulo.textContent += texto.charAt(i);
        i++;

        setTimeout(escribir, 80);

    }

}

escribir();


// Botón volver arriba

const botonArriba = document.createElement("button");

botonArriba.innerHTML = "⬆";
botonArriba.id = "arriba";

document.body.appendChild(botonArriba);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botonArriba.style.display = "block";

    } else {

        botonArriba.style.display = "none";

    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});
section{
    opacity:0;
    transform:translateY(60px);
    transition:1s;
}

section.mostrar{
    opacity:1;
    transform:translateY(0);
}

#arriba{
    position:fixed;
    right:25px;
    bottom:25px;
    width:55px;
    height:55px;
    border:none;
    border-radius:50%;
    background:#2563eb;
    color:white;
    font-size:25px;
    cursor:pointer;
    display:none;
    box-shadow:0 0 20px #2563eb;
    transition:.3s;
}

#arriba:hover{
    transform:scale(1.1);
}
