function imgChanger(evento){
let imagem = document.getElementById(".MainImg")
imagem.innerHTML = (evento)
}

function addProduct(){
    let buttonAdd = document.getElementById(".buttonMais")
    let quantidade = document.getElementById(".qtde")
    if(buttonAdd.onclick()){
        quantidade.innerHTML+=1
    }
}

addProduct()