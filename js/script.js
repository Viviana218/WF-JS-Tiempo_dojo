var temperatura = document.querySelector("#T°");

function eliminaCookie() {
    var elementoCookie = document.querySelector('.cookie') //seleccionamos aquel elemento de clase cookie//
    elementoCookie.remove();
}

function loadingw (city){
    alert("Loading weather report of "+city+"...")

    var elementoH2=document.querySelector('.sanjose h2');
    elementoH2.innerText=city;
}

function edit(){
    temperatura.innerText = (('T°' * 9/5) + 32);
}