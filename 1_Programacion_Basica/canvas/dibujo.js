var l = 1;
var yinicial, xfinal, xinicial, yfinal;
var btnDibujo = document.getElementById("btnDibujo");
var txtLineas = document.getElementById("txtLineas");

btnDibujo.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
console.log(lienzo);


function dibujoPorClick(){
    var lineas = parseInt(txtLineas.value);
    alert("Lineas ingresadas: " + lineas);
    
    var espacio = ancho/lineas;

    function dibujarLinea(a,b,c,d,color){
        lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(a,b);
        lienzo.lineTo(c,d);
        lienzo.stroke();
        lienzo.closePath();
    }
    
    dibujarLinea(1,1,1,299,"black");
    dibujarLinea(1,299,299,299,"black");
    dibujarLinea(1,1,299,1,"black");
    dibujarLinea(299,1,299,299,"black");
    
    while(l < lineas){ 
        yinicial = espacio * (l + 1);
        xfinal = espacio * l;
        xinicial = yinicial;
        yfinal = xfinal;
        dibujarLinea(0,yinicial,xfinal,300,"blue");
        dibujarLinea(xinicial,0,300,yfinal,"blue");
        console.log("linea " + l);
        l = l + 1;
    }
    for( l = 0 ; l<lineas; l++){   
        yinicial = espacio * (l + 1);
        xfinal = 300 - (espacio * l);
        xinicial = 300 - yinicial;
        yfinal = yinicial;
        dibujarLinea(0,yinicial,xfinal,0,"red");
        dibujarLinea(xinicial,300,300,yfinal,"red");
        console.log("linea " + l);
    }
    
}