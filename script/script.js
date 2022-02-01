let gifList=[
['bobrossparrot.gif', 2],
['explodyparrot.gif', 2],
['fiestaparrot.gif', 2],
['metalparrot.gif', 2],
['revertitparrot.gif', 2],
['tripletsparrot.gif', 2],
['unicornparrot.gif', 2]]

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
    let number = prompt('Enter card number');
    let main = document.querySelector('.all-cards');
    let htmlText=''
    let auxCard=''
    for (let i=0; i<number; i++){
        auxCard= cardModel.replace('gif', gifList[i][0] );
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
}
