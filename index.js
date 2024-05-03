
let cards=[] //array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""


let player={
    player:"per",
    chips:145
}

let playerel=document.getElementById("player-el")

playerel.textContent=player.name+": $"+player.chips //outputting other than html

//functions u can declare down and use up and use return value
function getrandomcard(){
    let k=Math.floor( Math.random()*13 ) + 1
    if (k===1){return 11}
    else if (k>10){return 10}
    else {return k}
}

let messageel=document.getElementById("message-el")
/*console.log(messageel) just to check we got right id*/

//let sumel=document.getElementById("sum-el")
let sumel=document.querySelector("#sum-el") //id here and class instead of id use. can also use body
let cardsel=document.getElementById("cards-el")

function renderGame(){
   sumel.textContent="sum: "+sum //what to output when clicked
   cardsel.textContent="cards: " //text in intial html will be cleared out w this js
   for (let i=0;i<cards.length;i++){
    cardsel.textContent+=cards[i]+" "
   }
   if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
messageel.textContent=message /*print when button triggered*/
//console.log(message) here is just the log
}

function startGame(){ //in start game everything should be assigned here 
    let firstCard = getrandomcard()
let secondCard = getrandomcard()
isAlive=true
cards=[firstCard,secondCard]
sum=firstCard+secondCard
    renderGame() //because on click this is what i want to do
}

function newcard(){
    if (isAlive && hasBlackJack===false){
        let card=getrandomcard() //everytime add the new value
        sum+=card
        cards.push(card)
        renderGame() //to view top condiitons
    }
    

}
//array.length
//let cards=[7,4] --> cards.push and then u can print the array
//.pop() remove last item
//for ( let count = 1;  count < 11;  count += 1 )  {
    
   // console.log(count)

//}
//for loop with arrays
//for (let i = 0; i < 5; i += 1) {
   // console.log(messages[i])}