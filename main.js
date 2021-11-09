document.addEventListener("DOMContentLoaded", init)

function init() {
    document.getElementById("tipus").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("meret").value = "12";
    document.getElementById("teszt").innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById("teszt").style.fontSize = "12px";
    document.getElementById("szovegSzin").value = "#000000";
    document.getElementById("hatterSzin").value = "#FFFFFF";
    document.getElementById('teszt').style.color = "#000000";
    document.getElementById('teszt').style.backgroundColor = "#FFFFFF";
    document.getElementById("tipus").addEventListener("input", tipusEll);
    document.getElementById("meret").addEventListener("input", meretEll);
    document.getElementById("szovegSzin").addEventListener("input", betuSzinEll);
    document.getElementById("hatterSzin").addEventListener("input", hatterSzinEll);
    document.getElementById("alapGomb").addEventListener("click", alap);
}

var style;
var size;
var fontColor;
var bgColor;

function tipusEll() {
    style = document.getElementById("tipus").value;
    if (style == '') {
        document.getElementById('hiba').innerHTML = "A mező nem lehet üres";
    }
    else{
        document.getElementById('hiba').innerHTML = "";
    }
    document.getElementById("teszt").innerHTML = style;
}
function meretEll() {
    size = document.getElementById("meret").value;

    document.getElementById("teszt").style.fontSize = size + "px";
}
function betuSzinEll() {
    fontColor = document.getElementById("szovegSzin").value;

    document.getElementById("teszt").style.color = fontColor;
}
function hatterSzinEll() {
    bgColor = document.getElementById("hatterSzin").value;

    document.getElementById("teszt").style.backgroundColor = bgColor;
}

function alap() {
    document.getElementById("tipus").value = "Árvíztűrő tükörfúrógép";
    document.getElementById("meret").value = "12";
    document.getElementById("teszt").innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById("teszt").style.fontSize = "12px";
    document.getElementById("szovegSzin").value = "#000000";
    document.getElementById("hatterSzin").value = "#FFFFFF";
    document.getElementById('teszt').style.color = "#000000";
    document.getElementById('teszt').style.backgroundColor = "#FFFFFF";
}
