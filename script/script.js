function rotaciona(elemento){
let card=document.querySelector(".card .front-face")
card.classList.remove("front-face")
card.classList.add("back-face")
setTimeout(function(){
    card.classList.remove("back-face")
    card.classList.add("front-face")
},1000);



}

