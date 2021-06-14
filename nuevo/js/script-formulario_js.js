function setup(){
    const myForm = document.getElementById('myForm');
    myForm.setAttribute('action','results.html');
}

function cancel(){
    document.getElementById('myForm').reset();
}

function send(){
    const myForm = document.getElementById('myForm');
    myForm.submit();
}