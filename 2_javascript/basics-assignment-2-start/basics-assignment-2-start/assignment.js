const task3Element = document.getElementById('task-3');


function ab(){
    alert("Hola");
}
function ac(name){
    alert("Hola: "+ name);
}

ab();
ac("Carlos");


task3Element.addEventListener("click",ab);

function ad(nombre2,nombre3,nombre4){

    let nombreCompleto = nombre2+" "+nombre3+" "+nombre4;
    return nombreCompleto;
}


alert(ad("Andres","Martinez","Cuellar"));