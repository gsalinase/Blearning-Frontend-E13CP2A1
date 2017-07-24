function elemento1() {
    document.getElementById("piedra").innerHTML = 'Piedra';
}
function elemento2() {
    document.getElementById("papel").innerHTML = 'Papel';
}
function elemento3() {
    document.getElementById("tijera").innerHTML = 'Tijera';
}
function win () {
    document.getElementById("gana").innerHTML = compara(eleccionComputador);
}
var box = document.getElementsByClassName('box');
var eleccionUsuario = box;
var eleccionComputador = Math.random();
if (eleccionComputador <0.34){
    eleccionComputador = "Piedra";
}else if(eleccionComputador <=0.67){
    eleccionComputador = "Papel";
}
else{
    eleccionComputador = "Tijera";
}
var compara = function(opcion1,opcion2){
    if(opcion1===opcion2){
        return "Empate";
    }
    if(opcion1==="Piedra"){
        if(opcion2==="Tijera"){
            return "Gana Piedra";
        }
        else{
            return "Gana Papel";
        }
    }
    if(opcion1==="Papel"){
        if(opcion2==="Piedra"){
            return "Gana Papel";
        }
        else{
            return "Gana Tijera";
        }
    }
    if(opcion1==="Tijera"){
        if(opcion2==="Piedra"){
            return "Gana Piedra";
        }
        else{
            return "Gana Tijera";
        }
    }
};
compara(eleccionUsuario,eleccionComputador);
