function Verde(){
    document.getElementById("Corpo").
    style.backgroundColor="#0f0";
}
function Azul(){
    document.getElementById("Corpo").
    style.backgroundColor="#00f";
}
function Amarelo(){
    document.getElementById("Corpo").
    style.backgroundColor="#ff0";
}
function nome(){
    if(document.getElementById("cxnome").value=="" 
    ||
    document.getElementById("cxemail").value==""){
        alert("Dgt um valor, campo em branco");
    }
    else{
        alert("Gravado com sucesso!");
    }
}