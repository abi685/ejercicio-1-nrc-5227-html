const titulo = "ARRAYS"; //CONSTANTES
var personas = ['Jonathan', 'Anshela', 'Israel', 'César', 'Grace', 'Anita', 'Luis']; //Variable global

function imprimirPersonas(){
    setTimeout(function(){
        document.getElementById('arrPersonas').innerText = personas;            
    }, 1000);   
}

function appendArrPersonas(){
    let text = document.getElementById('txtLetra').value;  //Variables locales
    document.getElementById('arrResultado').append(text);
}

function innerTextArrPersonas(){
    let text = document.getElementById('txtLetra').value;  //Variables locales
    document.getElementById('arrResultado').innerText = text;
}

function innerHTMLArrPersonas(){
    let text = document.getElementById('txtLetra').value;  //Variables locales
    document.getElementById('arrResultado').innerHTML = text;    
}


function forEachPersonas(){
    personas.forEach((x) => {
        console.log(x);
        console.log(x.length);
        let b = document.createElement('b');        
        let br = document.createElement('br');
        b.innerText = x;
        document.getElementById('arrResultado').append(b);
        document.getElementById('arrResultado').append(br);
    });
}

function everyPersonas(letra){    
    //Every, todos los elementos del arreglo cumplen con la condición
    var resultado = personas.every((x) => x.includes(letra));
    document.getElementById('arrResultado').innerText = resultado;
}

function somePersonas(filtro){    
    //Some, algun elemento del arreglo cumplen con la condición
    var resultado = personas.some((x) => x.includes(filtro));
    document.getElementById('arrResultado').innerText = resultado;
}

function filterPersonas(filtro){ 
    document.getElementById('arrResultado').innerText = "";
    let arrNuevo  = personas.filter((x) => x.toLowerCase().includes(filtro));
    arrNuevo.forEach((x) => {
        let b = document.createElement('b');        
        let br = document.createElement('br');
        b.innerText = x;
        document.getElementById('arrResultado').append(b);
        document.getElementById('arrResultado').append(br);
    });
}

function mapPersonas(){
    let arrNuevo = personas.map((x) => x.toLowerCase());    
    document.getElementById('arrResultado').innerText = arrNuevo;
}

function findPersonas(filtro){
    let resultado = personas.find((x) => x == filtro);
    document.getElementById('arrResultado').innerText = resultado;
}

function findIndexPersonas(filtro){
    let resultado = personas.findIndex((x) => x == filtro);
    document.getElementById('arrResultado').innerText = resultado;
}
/*
function everyPersonas(letra){
    //every, todos cumplen con la codición
    //var resultado = personas.every((x) => x.length ==5);
    //var resultado = personas.every((x) => x.includes ('a'));
    var resultado = personas.every((x) => x.includes (letra));
    //document.getElementById('arrResultado').append(resultado);
    document.getElementById('arrResultado').innerText = resultado;
}*/