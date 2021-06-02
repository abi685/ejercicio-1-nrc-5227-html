//arreglo de Javascript
//arreglos: un conjunto de elementos definidos en una estructura 
//definiciones
//Arreglo strings
var provincias = ['Loja', 'Azuay', 'Canar', 'Chimborazo'];
//arreglo de varios tipos de dato
var varios_tipos = [3, 'juan', true, '2021-05-31']
//definir un arreglo por el constructor con el numero de elementos, en este caso 10
var numeros_primos = new Array(10)
//definir un arreglo por el constructor con sus elementos
var serie_fibonacci = new Array(1,1,2,3,5,8,13,21)
//definir un arreglo vacio
var figuras_geometricas = new Array();

//funcion que imprime los arreglos
function imprimirarreglos(){
    document.getElementById('arrProvincias').innerText = provincias;
    document.getElementById('arrTipos').innerText = varios_tipos;
    document.getElementById('arrPrimos').innerText = numeros_primos;
    document.getElementById('arrFibonaci').innerText = serie_fibonacci;
    document.getElementById('arrGeometricas').innerText = figuras_geometricas;
}

function imprimirCadaProvincia(){
    // Va a recorrer cada elemento del arreglo Provincias
    provincias.forEach((x) =>{
        var li = document.createElement('li'); // crea un nuevo elemento en el DOM por su etiqueta de HTML
        li.innerText = x;
        document.getElementById('ulProvincias').append(li);
    }); // El metodo forEach es un callback, implementa una funcionalidad

}

function imprimirSerieFibonaci(){
    // Va a recorrer cada elemento del arreglo Provincias
    serie_fibonacci.forEach((h) =>{
        var li = document.createElement('li'); // crea un nuevo elemento en el DOM por su etiqueta de HTML
        li.innerText = h;
        document.getElementById('ulFibonaci').append(li);
    }); // El metodo forEach es un callback, implementa una funcionalidad

}

function agregarFigura(){
    var nombre = document.getElementById('txtFigura').value;
    figuras_geometricas.push(nombre);
    document.getElementById('arrGeomatricas').innerText = figuras_geometricas;
    document.getElementById('txtFigura').value = '';
}

function agregarProvincias(){
    var nombres = document.getElementById('txtProvincias').value;
    provincias.push(nombres);
    document.getElementById('arrProvincias').innerText = provincias;
    document.getElementById('txtProvincias').value = '';
}