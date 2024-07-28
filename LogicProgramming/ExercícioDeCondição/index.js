var x = "";
var y = "";

x = prompt("Qual é o seu email?");
y = prompt("Qual é a sua idade?");

if (y < 18){
    alert("Uma mensagem não será enviada ao email: " + x);
} else {
    alert("Uma mensagem será enviada ao email: " + x);
}