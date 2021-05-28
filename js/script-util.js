/* funcion registra la hora de accerso de la pagna*/
function logAccess(){
    var hoy= new Date();
    console.log('Acesso registrado a' + name);
    console.log(hoy.getHours() +":" +hoy.getMinutes() +":"+ hoy.getSeconds() );
}