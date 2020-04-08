var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function dibujarLinea(a,b,c,d,color,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(a,b);
    lienzo.lineTo(c,d);
    lienzo.stroke();
    lienzo.closePath();
}

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x= 150;
var y= 150;



function dibujarTeclado(evento){
    var colorcito = "red";
    var movimiento = 10;
    console.log(evento);

    switch(evento.keyCode){
        case teclas.UP:
            dibujarLinea(x,y,x,y - movimiento,colorcito,papel);
            y = y - movimiento;
        break;
        
        case teclas.DOWN:
            dibujarLinea(x,y,x,y + movimiento,colorcito,papel);
            y = y + movimiento;
        break;

        case teclas.LEFT:
            dibujarLinea(x,y,x - movimiento,y,colorcito,papel);
            x = x - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(x,y,x + movimiento,y,colorcito,papel);
            x = x + movimiento;
        break;

        default:
            console.log("Otra tecla");
        break;
    }
}
    
// var teclas = {
//     UP: 38,
//     DOWN: 40,
//     LEFT: 37,
//     RIGHT: 39
// };

// function dibujarLinea(a,b,c,d,color,lienzo){
//     lienzo.beginPath();
//     lienzo.strokeStyle = color;
//     lienzo.lineWidth = 3;
//     lienzo.moveTo(a,b);
//     lienzo.lineTo(c,d);
//     lienzo.stroke();
//     lienzo.closePath();
// }

// document.addEventListener("keydown", dibujarTeclado);
// var cuadrito = document.getElementById("area_de_dibujo");
// var papel = cuadrito.getContext("2d");
// var x= 150;
// var y= 150;



// function dibujarTeclado(evento)
// {
//     var colorcito = "red";
//     var movimiento = 10;
//     console.log(evento);

//     switch(evento.keyCode)
//     {
//         case teclas.UP:
//             dibujarLinea(x,y,x,y - movimiento,colorcito,papel);
//             y = y - movimiento;
//         break;
        
//         case teclas.DOWN:
//             dibujarLinea(x,y,x,y + movimiento,colorcito,papel);
//             y = y + movimiento;
//         break;

//         case teclas.LEFT:
//             dibujarLinea(x,y,x - movimiento,y,colorcito,papel);
//             x = x - movimiento;
//         break;

//         case teclas.RIGHT:
//             dibujarLinea(x,y,x + movimiento,y,colorcito,papel);
//             x = x + movimiento;
//         break;

//         default:
//             console.log("Otra tecla");
//         break;
//     }
    
// }
