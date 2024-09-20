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
let matchedCards = 0;
let cardsInGame = -1;
let clickBarrier = document.querySelector(".clickBarrier")

const cardModel =
`<div class='card' data-identifier="card" onclick="gameMove(this)">
    <div class='look-front face' data-identifier="back-face">
        <img src="./media/front.png" alt=''>
    </div>
    <div class='look-back face' data-identifier="front-face">
        <img src="./media/gif" alt=''>
    </div>
</div>`

function gameStart() {
    moves = 0;
    turnedCards = 0;
    matchedCards = 0;
    let number = "";
    let loop = true;
    let onlyDigit = /^\d{1,}$/;

    while (loop) {
        number = prompt('How many cards would you like to play with? (4-14)');
        if (onlyDigit.test(number)) {
            if ((number % 2) == 0) {
                if ( number >= 4 && number <= 14) {
                    cardsInGame = number;
                    loop = false;
                } else alert("Numbers must be between 4 and 14!")
            } else alert("Numbers must be even!")
        } else  alert("Please enter only with numbers!")
    }

    let cardContainer = document.querySelector('.cards-container');
    cardContainer.innerHTML="";

    let shuffledGifs = copyAndSortGifList(cardsInGame);

    for (let i = 0; i < cardsInGame; i++) {
        cardContainer.innerHTML += cardModel.replace('gif', shuffledGifs[i]);
    }
}

function gameMove(clickedCard) {

    if (clickedCard.classList.contains("selected") || clickedCard.classList.contains("pair-made")) return;
    moves += 1;
    turnedCards += 1;
    clickedCard.classList.add("selected")
    flipCard(clickedCard)
    
    if (turnedCards !== 2) return;
    clickBarrierToggle()
    let allSelected = document.querySelectorAll(".selected")
    let card1 = allSelected[0]
    let card2 = allSelected[1]

    if (card1.innerHTML == card2.innerHTML) {
        turnedCards = 0
        matchedCards += 2;

        card1.classList.add("pair-made")
        card2.classList.add("pair-made")
        card1.classList.remove("selected")
        card2.classList.remove("selected")
        verifyVictory();
        clickBarrierToggle()
        return;
    }
    turnedCards = 0

    card1.classList.remove("selected")
    card2.classList.remove("selected")
    setTimeout( function(){
    flipCard(card1)
    flipCard(card2)
    clickBarrierToggle()
    },1000)
}

function copyAndSortGifList(itens) {
    let copy = []
    for (let i = 0; i < itens; i++) {
        copy[i] = gifList[i];
    }
    copy = copy.sort(() => Math.random() - 0.5)
    return copy;
}

function verifyVictory() {
    if (matchedCards != cardsInGame) return;

    setTimeout( function() {
        alert(`Well Done! You have won the game in ${moves} moves`)
        let answer = prompt(`Would you like to play again? Tipe 'y' if so.`)
        if (answer == 'y' || answer == 'Y') {
            gameStart()
        }
    }, 300)
}

function flipCard(card){
    let front = card.querySelector(".look-front")
    let back = card.querySelector(".look-back")

    front.classList.remove("look-front")
    front.classList.add("look-back")
    back.classList.remove("look-back")
    back.classList.add("look-front")
}

function clickBarrierToggle(){
    clickBarrier.classList.toggle("click-permit")
    clickBarrier.classList.toggle("click-block")
}

gameStart()