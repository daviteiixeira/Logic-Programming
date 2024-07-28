//botar o botão de adicionar a funcionar:
let btnResult = document.querySelector("#addNota");

btnResult.addEventListener("click", function () {
    let ntOfStudent = document.querySelector(".studentNotas").value;
    let list = document.querySelector("#list");
    let newLi = document.createElement("li");
    newLi.innerHTML = ntOfStudent;
    list.appendChild(newLi);
})

//botar o botão de limpar a funcionar:
let btnClean = document.querySelector("#cleanNota");

btnClean.addEventListener("click", function () {
    let list = document.querySelector("#list");
    list.innerHTML = "";
    let mediaDiv = document.querySelector("#media");
    mediaDiv.innerHTML = "";
    let ratingDiv = document.querySelector("#rating");
    ratingDiv.innerHTML = "";
})

//botar o botão de calcular a media a funcionar:
let btnCalc = document.querySelector("#calcNota");

btnCalc.addEventListener("click", function () {
    let list = document.querySelector("#list");
    let sum = 0;
    for (let i = 0; i < list.children.length; i++) {
        sum += Number(list.children[i].innerHTML);
    }
    let media = sum / list.children.length;
    let mediaDiv = document.querySelector("#media");
    mediaDiv.innerHTML = `A média é: ${media}`;
})

//Reprovado ou aprovado?
btnCalc.addEventListener("click", function () {
    let list = document.querySelector("#list");
    let sum = 0;
    for (let i = 0; i < list.children.length; i++) {    
        sum += Number(list.children[i].innerHTML);
    }
    let media = sum / list.children.length;
    if (media >= 6) {
        let list = document.querySelector("#rating");
        list.innerHTML = "Aprovado";
    }
    else {
        let list = document.querySelector("#rating");
        list.innerHTML = "Reprovado";
    }  
})