//Minutos, segundos y milisegundos
let m = 0;
let s = 0;
let ms = 0;
//Contenedores de valores
let mCont = document.getElementById("mCont");
let sCont = document.getElementById("sCont");
let msCont = document.getElementById("msCont");
//Botones
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
//Intervalos
let msInterval = null;
let sInterval = null;
let mInterval = null;
//Funciones
function aumentarMs() {
   msInterval = setInterval(() => {
        ms++
        if (ms <= 9) {
            msCont.innerHTML = "0" + ms;
        } else {
            msCont.innerHTML = ms;
        };
        aumentarS();
        aumentarM();
    }, 10);
};

function aumentarS() {
    if (ms > 99) {
        ms = 0;
        msCont.innerHTML = "0" + ms;
        s++;
        if (s <= 9) {
            sCont.innerHTML = "0" + s;
        } else {
            sCont.innerHTML = s;
        }
    }
 };

 function aumentarM() {
    if (s > 59) {
        s = 0;
        sCont.innerHTML = "0" + s;
        m++;
        if (m <= 9) {
            mCont.innerHTML = "0" + m;
        } else {
            mCont.innerHTML = m;
        }
    }
 };

//Eventos
start.addEventListener("click", function() {
    aumentarMs();
    reset.disabled = true;
    start.disabled = true;
});

stop.addEventListener("click", function() {
    clearInterval(msInterval);
    reset.disabled = false;
    start.disabled = false;
});

reset.addEventListener("click", function() {
    m = 0;
    s = 0;
    ms = 0;
    mCont.innerHTML = "00";
    sCont.innerHTML = "00";
    msCont.innerHTML = "00";
})