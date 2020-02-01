/* Jonathan Ali Corado h
    18001211 */

var canvas;
var con;
var X=150;
var Y=75;
var origen;
var destino;
var btn1;
var btn2;
var arrOrigen;
var arrDestino;

function init(){
    arrOrigen = [];
    arrDestino = [];
    destino = document.getElementById('destino');
    canvas = document.getElementById('circulo');
    btn1 = document.getElementById('btnagr');
    btn2 = document.getElementById('btnbor');
    con = canvas.getContext('2d');
    dibujarCirculo();
    window.addEventListener("keydown",moverCirculo,false);
    dibujarArreglo(arrDestino,destino);
    btn1.onclick = moverDatos;
    btn2.onclick = EliminarDatos;

}

function dibujarArreglo(arreglo,select){
    borrarSelect(select);
    arreglo.forEach(x => {
        let option = document.createElement("option");
        option.text = x;
        select.add(option);
    });
}



function moverDatos(){
    origen = document.getElementById('origen').value;
    arrDestino.push(origen);
    dibujarArreglo(arrDestino,destino);

}

function EliminarDatos(){
    if(destino.selectedIndex !=-1){
    arrDestino.splice(destino.selectedIndex,1);
    dibujarArreglo(arrDestino,destino);
    }else{
        alert("Es necesario seleccionar un dato");
    }
}

function borrarSelect(elemento) {
    while (elemento.options.length > 0) {                
        elemento.remove(0);
    }   
}


function dibujarCirculo(){
    con.clearRect(0,0,canvas.width,canvas.height);
    con.beginPath();
    con.arc(X,Y,12,0, 2 * Math.PI);
    con.stroke();
    con.fillStyle = "#FF0000"
    con.fill();
    
}

function moverCirculo(e){
    let buffer = 5
    switch (e.keyCode){
        case 37: //izquierda
        if(X > 14){
            X = X - buffer;
        }
        break;
        case 38: //arriba
        if(Y > 14){
        Y = Y - buffer;
        }
        break;
        case 39: //derecha
        if(X < canvas.width - 14){
        X = X + buffer;
        }
        break;
        case 40: //abajo
        if(Y < canvas.height - 14){
        Y = Y + buffer;
        }
        break;
    }
    dibujarCirculo();
}
init();