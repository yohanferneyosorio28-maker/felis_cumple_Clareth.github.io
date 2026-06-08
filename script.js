function abrirCarta(){

    document.getElementById("carta").style.display = "block";

    document.getElementById("sobre").innerHTML = "💌";

}

function crearFlor(){

    const flor = document.createElement("div");

    flor.classList.add("flor");

    const flores = ["🌸","🌺","🌷"];

    flor.innerHTML =
        flores[Math.floor(Math.random()*flores.length)];

    flor.style.left =
        Math.random()*window.innerWidth + "px";

    flor.style.animationDuration =
        (5 + Math.random()*5) + "s";

    document.getElementById("flores")
        .appendChild(flor);

    setTimeout(() => {
        flor.remove();
    },10000);

}

setInterval(crearFlor,400);
