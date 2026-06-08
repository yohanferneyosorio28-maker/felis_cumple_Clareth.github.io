function abrirCarta() {

    document.getElementById("sobre").innerHTML = "💌";

    for (let i = 0; i < 250; i++) {

        const flor = document.createElement("div");

        flor.classList.add("flor");

        flor.innerHTML = "🌸";

        flor.style.left = Math.random() * window.innerWidth + "px";
        flor.style.top = Math.random() * window.innerHeight + "px";

        document.getElementById("flores").appendChild(flor);

        setTimeout(() => {
            flor.remove();
        }, 2500);
    }

    setTimeout(() => {

        const carta = document.getElementById("carta");

        carta.style.display = "block";

        carta.classList.add("mostrar");

    }, 2000);
}

function crearFlor() {

    const flor = document.createElement("div");

    flor.classList.add("flor");

    flor.innerHTML = "🌸";

    flor.style.left = Math.random() * window.innerWidth + "px";

    flor.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.getElementById("flores").appendChild(flor);

    setTimeout(() => {
        flor.remove();
    }, 10000);
}

setInterval(crearFlor, 500);
