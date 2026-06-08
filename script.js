function abrirCarta(){

    document.getElementById("sobre").innerHTML = "💌";

    for(let i = 0; i < 250; i++){

        const flor = document.createElement("div");

        flor.classList.add("flor");

        flor.innerHTML = "🌸";

        flor.style.left =
            Math.random() * window.innerWidth + "px";

        flor.style.top =
            Math.random() * window.innerHeight + "px";

        flor.style.animationDuration = "3s";

        document.getElementById("flores")
            .appendChild(flor);

        setTimeout(() => {
            flor.remove();
        },3000);

    }

setTimeout(() => {

    const carta =
        document.getElementById("carta");

    carta.style.display = "block";

    setTimeout(() => {
        carta.classList.add("mostrar");
    },100);

},2500);

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
