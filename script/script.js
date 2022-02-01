let gifList=[
    'bobrossparrot.gif',
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif',
    'unicornparrot.gif',]

let moves=0;

const cardModel =
`<div class='card' onclick="flipCard(this.querySelector('.look-front'),this.querySelector('.look-back'))">

    <div class='look-front face'>
        <img src='/media/front.png' alt=''>
    </div>

    <div class='look-back face'>
        <img src='/media/gif' alt=''>
    </div>
</div>`

function cardNumber(){
    let number
    let loop=true
    let regex1Digit=/^\d{1}$/
    let regex2Digit=/^\d{2}$/


    while(loop){
        number = prompt('Enter card number');
        if(regex1Digit.test(number) || regex2Digit.test(number)){
            if((number%2)==0){
                loop = false;
            }else{
                alert("Os números devem ser pares!")
            }
        } else {
            alert("Entre somente com números!")
        }
    }
    
    let main = document.querySelector('.cards-container');
    let htmlText=''
    let auxCard=''
    let shuffledGifs=copyAndSortGifList(number)

    for (let i=0; i<number; i++){
        auxCard= cardModel.replace('gif', shuffledGifs[i] );
        htmlText+=auxCard;
        console.log(auxCard)
    }

    main.innerHTML = htmlText;
}


function flipCard(front, back){

front.classList.remove("look-front")
front.classList.add("look-back")

back.classList.remove("look-back")
back.classList.add("look-front")

setTimeout(function(){
    front.classList.remove("look-back")
    front.classList.add("look-front")
},1000)

setTimeout(function(){
    back.classList.remove("look-front")
    back.classList.add("look-back")
},1000)

moves +=1;
}

function copyAndSortGifList(itens){
    let copy =[]
    for (let i = 0; i < itens; i++) {
        copy[i] = gifList[i];
    }
    copy = copy.sort(() => Math.random() - 0.5)

    return copy;
}