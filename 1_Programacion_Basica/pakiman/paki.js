var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pocacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

console.log(imagenes);


class Pakiman
{
    constructor(n,v,a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.imagen.src = imagenes[this.nombre];
    }

    hablar()
    {
        alert(this.nombre);
    }

    mostrar()
    {   
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("<strong>"+ this.nombre + "</strong><br>");
        document.write("Vida: "+ this.vida + "<br>");
        document.write("Ataque: "+ this.ataque);
        document.write("</p> <br/>");
    }
}

var cauchin = new Pakiman("Cauchin", 100 , 30);
var pocacho = new Pakiman("Pocacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);


var coleccion = [];

coleccion.push(cauchin);
coleccion.push(pocacho);
coleccion.push(tocinauro);

for(p in coleccion)
{
    console.log(coleccion[cauchin]);
}