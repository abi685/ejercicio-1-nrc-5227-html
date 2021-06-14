function calcularIMC(){
    //lectura de los valores desde los IMPUTS
    let strEstatura = document.getElementById('txtEstatura').value;
    let strPeso = document.getElementById('txtPeso').value;
    let strNombre = document.getElementById('txtNombre').value;
    //conversion de los valores de String  a Integer
    let estatura = parseInt(strEstatura) * 0.01;
    let peso = parseInt(strPeso);
    //implementa el modelo matematico
    let imc = peso / Math.pow(estatura, 2);
    //evalua el IMC, retorna un string
    let evaluacion = evaluarIMC(imc);
    //crea la imagen en el dom
    let img = document.createElement('img');
    img.src = "img/" + evaluacion + ".jpeg";
    img.alt = evaluacion;
    img.width = 24;
    img.height = 24;
    //presentacion de resultados 
    document.getElementById('pResultado').innerText = "la persona se llama: "+strNombre+ "--->"+"IMC =>" + imc.toFixed(2) + "-" +evaluacion;
    //anexo de la imagen
    document.getElementById('pResultado').append(img);
}

function evaluarIMC(imc){
    let resultado = '';
    if(imc >=18.5 && imc < 25){
        resultado = "normal";
    }
    else if(imc >= 25 && imc <= 30.0){
        resultado = "sobrepeso";
    }
    else if(imc > 30.00){
        resultado = "obesidad";
    }
    else{
        resultado = "bajo";
    }
    return resultado;
}

