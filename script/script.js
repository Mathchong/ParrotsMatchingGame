let gifList = [
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

let moves = 0;
let turnedCards = 0;


const cardModel =
    `<div class='card' onclick="flipCard(this.querySelector('.look-front'),this.querySelector('.look-back'),this)">

    <div class='look-front face'>
        <img src='/media/front.png' alt=''>
    </div>

    <div class='look-back face'>
        <img src='/media/gif' alt=''>
    </div>
</div>`

function cardNumber() {
    let number
    let loop = true
    let regex1Digit = /^\d{1}$/
    let regex2Digit = /^\d{2}$/


    while (loop) {
        number = prompt('Enter card number');
        if (regex1Digit.test(number) || regex2Digit.test(number)) {
            if ((number % 2) == 0) {
                if (number <= 14 && number >= 2) {
                    loop = false;
                }
            } else {
                alert("Os números devem ser pares!")
            }
        } else {
            alert("Entre somente com números!")
        }
    }

    let main = document.querySelector('.cards-container');
    let htmlText = ''
    let auxCard = ''
    let shuffledGifs = copyAndSortGifList(number)

    for (let i = 0; i < number; i++) {
        auxCard = cardModel.replace('gif', shuffledGifs[i]);
        htmlText += auxCard;
        console.log(auxCard)
    }

    main.innerHTML = htmlText;
}


function flipCard(front, back, cardElement) {

    if (cardElement.classList.contains("selected") || cardElement.classList.contains("pair-made")) {
        return;
    }
    cardElement.classList.add("selected")
    turnedCards += 1;
    console.log(turnedCards)

    front.classList.remove("look-front")
    front.classList.add("look-back")

    back.classList.remove("look-back")
    back.classList.add("look-front")

    if (turnedCards == 2) {
        let click = document.querySelector(".click-permit")
        click.classList.toggle("click-permit")
        click.classList.toggle("click-block")

        let allSelectet = document.querySelectorAll(".selected")

        let card1 = allSelectet[0]
        let card2 = allSelectet[1]

        if (card1.innerHTML == card2.innerHTML) {
            card1.classList.add("pair-made")
            card2.classList.add("pair-made")

            turnedCards = 0

            click.classList.toggle("click-permit")
            click.classList.toggle("click-block")

            card1.classList.remove("selected")
            card2.classList.remove("selected")

            return;
        }

        turnedCards = 0

        unflipCard()
        unflipCard()

        setTimeout(function () {
            click.classList.toggle("click-permit")
            click.classList.toggle("click-block")
        }, 1000)

    }
    moves += 1;
}

function copyAndSortGifList(itens) {
    let copy = []
    for (let i = 0; i < itens; i++) {
        copy[i] = gifList[i];
    }
    copy = copy.sort(() => Math.random() - 0.5)

    return copy;
}


/*
setTimeout(function(){
    cardNumber()
},1000)
*/

function unflipCard() {
    let cardFront = document.querySelector(".selected > .look-front")
    let cardBack = document.querySelector(".selected > .look-back")
    let card = document.querySelector(".selected")
    card.classList.remove("selected")
    setTimeout(function () {
        cardFront.classList.remove("look-front")
        cardFront.classList.add("look-back")

        cardBack.classList.remove("look-back")
        cardBack.classList.add("look-front")
    }, 1000)


}

cardNumber()