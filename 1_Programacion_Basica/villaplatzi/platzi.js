var vp = document.getElementById("villaplatzi");
var papel  = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = {
    url: "vaca.png",
    cargaOK: false
};
var pollo = {
    url: "pollo.png",
    cargaOK: false
};
var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}
function cargarVaca(){
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo(){
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar();
}


function dibujar(){
    numAnimales = 7;
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOK)
    {
        for(var v=0; v<numAnimales; v++)
        {
            var x = aleatorio(0,5)*80;
            var y = aleatorio(0,5)*80;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
    if(pollo.cargaOK)
    {
        for(var p=0; p<numAnimales; p++)
        {
            var x = aleatorio(0,5)*80;
            var y = aleatorio(0,5)*80;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
    if(cerdo.cargaOK)
    {
        for(var c=0; c<numAnimales; c++)
        {
            var x = aleatorio(0,5)*80;
            var y = aleatorio(0,5)*80;
            papel.drawImage(cerdo.imagen,x,y);
        }
    }
}

function aleatorio(min,max){
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min;
    return resultado;
}
