var color = ["red","blue","yellow","white","green","slateblue","violet","orange","dodgerblue","tomato","crimson","darkred","aqua","chartreuse","pink","darkorange","golden","cyan","goldenrod"];
var num ;
function start() {
    bucle();
    assturo();
}
function bucle() {
    document.getElementById("reloj").innerHTML = "<span style='font-size: 30px; color: '>Hora : </span>" + Date();
    setTimeout("bucle()",1000);
}
function assturo(){
    num = getRandomArbitrary(0,18);
    document.getElementById("arturo").style.color = color[num];
    setTimeout("assturo()",50);
}
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function mostrar(){
    var x = document.getElementById("form");
    var text = "";
    var i;
    for(i = 0;i<x.length ;i++){
        text+=x.elements[i].value + " ";
    }
    document.getElementById("arturo").innerHTML = text;
}