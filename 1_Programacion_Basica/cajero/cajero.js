var caja = [];

var dinero = 0;
var entregado = [];
var papeles = 0;
var div = 0;

class Billete{

    constructor(v,c){
        this.valor = v;
        this.cantidad = c;
    }

}

caja.push(new Billete(100,5));
caja.push(new Billete(50,10));
caja.push(new Billete(20,5));
caja.push(new Billete(10,20));
caja.push(new Billete(5,15));

function entregarDinero(){
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja)
    {
        if(dinero>0)
        {
            div = Math.floor(dinero/bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push( new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if( dinero > 0 )
    {
        resultado.innerHTML = "NO HAY SUFICIENTE DINERO";
    }
    else
    {
        for(var e of entregado)
        {
            if (e.cantidad > 0){
                resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br>";    
            }
            
        }
    }
    console.log(entregado);
}

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");