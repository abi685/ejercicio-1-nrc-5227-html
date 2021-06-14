var origen = ['Wilson', 'Alison', 'Josselyn', 'Julio', 'Somiel', 'Paola']

var destino = ['Wilson', 'Alison', 'Josselyn', 'Julio', 'Somiel', 'Paola']



function imprimirOrigen(){
    //document.getElementById('arrOrigen').innerText = origen;
    var foo = origen.map(function(bar){
        return '<li>'+origen
      })
      document.getElementById("foo").innerHTML = foo;
    
}

function imprimirNuevo(nuevo){
    document.getElementById('arrNuevo').innerText = nuevo;
    
}

function forEachPersonassubir(){
    
    origen.forEach((x) => {
        console.log(x);
        console.log(x.length);
        let b = document.createElement('b');        
        let br = document.createElement('br');
        b.innerText = x;
        document.getElementById('arrDestino').append(b);
        document.getElementById('arrDestino').append(br);
    });
   
    
}
function forEachPersonasbajar(){
    
    destino.forEach((x) => {
        console.log(x);
        console.log(x.length);
        let b = document.createElement('b');        
        let br = document.createElement('br');
        b.innerText = x;
        document.getElementById('arrOrigen').append(b);
        document.getElementById('arrOrigen').append(br);
        
    });
    
}

function ushift(){
    var input = document.getElementById(origen);
    var nombre = input.value;
    input.value = "";
    imprimirOrigen();
}

function slice(){
    var strInicio = document.getElementById('txtInicio').value;
    var strFin = document.getElementById('txtFinal').value;
    var nuevoArregloPersonas = personas.slice(strInicio, strFin);
    imprimirNuevo(nuevoArregloPersonas);
    imprimirOrigen();
}