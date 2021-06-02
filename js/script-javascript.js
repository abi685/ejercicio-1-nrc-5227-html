function changeTitle(){
    document.getElementById('txtejemplo').innerText ='nuevo titulo';
    document.getElementById('btnclick').remove();
    document.getElementById('txttitulo').innerText = 'javascript';
}
function operar(tipo){
    alert(tipo);
    var t1 = document.getElementById('txtnumero1').value;
    var t2 = document.getElementById('txtnumero2').value;
    
    var n1 = parseInt(t1);//....
    var n2 = parseInt(t2);//..
    
    document.getElementById('txtResultadoSuma').value = sumar(n1, n2);
    document.getElementById('txtResultadoResta').value = restar(n1, n2);
    document.getElementById('txtResultadoMultiplicar').value = multiplicar(n1, n2);
    document.getElementById('txtResultadoDivicion').value = dividir(n1, n2);
    
}
function operar1(tipo){
    alert(tipo);
    var t3 = document.getElementById('txtnumero3').value;
    var n3 = parseInt(t3);
    document.getElementById('txtResultadoACuadrado').value = acuadrado(n3);

}

function operar2(tipo){
    alert(tipo);
    var t4 = document.getElementById('txtnumero4').value;
    var n4 = parseInt(t4);
    document.getElementById('txtResultadoVCubo').value = vcubo(n4);
}

function operar3(tipo){
    alert(tipo);
    var t5 = document.getElementById('txtnumero5').value;
    var t6 = document.getElementById('txtnumero6').value;
    var n5 = parseInt(t5);
    var n6 = parseInt(t6);
    document.getElementById('txtResultadoPRectangulo').value = prectangulo(n5, n6);
}

function sumar(n1, n2){
    
    console.log('sumar: ' + n1 + '+' + n2);
    var r = n1+ n2; 
    return r;
    
}

function restar(n1, n2){
    
    console.log('restar: ' + n1 + '-' + n2);
    var r = n1 - n2; 
    return r;
}

function multiplicar(n1, n2){
    
    //console.log('multiplicar: ' + n1 + '*' + n2);
    var r = n1 * n2; 
    return r;
}

function dividir(n1, n2){
    
    //console.log('dividir: ' + n1 + '/' + n2);
    var r = n1 / n2; 
    return r;
}
function acuadrado(n3){
    var r = Math.pow(n3, 2);
    return r;
}
function vcubo(n4){
    var r = Math.pow(n4, 3);
    return r;
}
function prectangulo(n5,n6){
    var r = 2 * (n5 + n6);
    return r;
}