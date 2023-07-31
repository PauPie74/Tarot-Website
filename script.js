window.onload = function(){

//Load previous deck choice if any
function load() {
    var deckNum = JSON.parse(localStorage.getItem("lastDeck"));
    return deckNum;
};

var deckNum = load();

if (deckNum == null) {
    var deckNum = 0;
};

console.log(deckNum)

  
//Current cards array
let CurrentCards = [];

//Random card
function random(obj) {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

//Save deck choice

function save() {
    localStorage.setItem("lastDeck", deckNum);	
};

//Decks

var decks = ['td', 'rw', 'ls'];
var deck = decks[deckNum];

console.log(deck);

function NextDeck() { 
    var deckNumber = decks.length;
    if (deckNum < deckNumber - 1) {
        deckNum = deckNum + 1;
    } else {
        deckNum = 0;
    };
    deck = decks[deckNum]; 
    save();
    document.getElementById("card").innerHTML = "";

    let i = 0;
    while (i < CurrentCards.length) {
        NewCard(CurrentCards[i], deck);
        i++;
    };
};

//New card

let currentCard = random(cards);
NewCard(currentCard, deck);
CurrentCards.push(currentCard);

function NewCard(currentCard, deck) {
    let p = document.createElement("p");
    var cC = String(currentCard);
    var d = String(deck);
    let innerContent = "<img src=" + cards[currentCard][deck] +"></br><div class=\"meaning-text\">" + cards[currentCard].meaning + "</div>";
    p.innerHTML = innerContent;
    card.appendChild(p); 
};

//Add card

function AddCard(){
    let currentCard = random(cards);
    while (CurrentCards.includes(currentCard)) {
        currentCard = random(cards);
    };
    CurrentCards.push(currentCard);
    NewCard(currentCard, deck);
};

//Remove card

function RemoveCard(){
    document.getElementById('card').removeChild(document.getElementById('card').lastChild); 
    CurrentCards.splice(-1);
};

// Reset
function Reset(){
    const displayedcards = document.getElementById('card');
    displayedcards.innerHTML = '';
    CurrentCards = [];
    AddCard();
};

//Buttons
document.getElementById('deck').addEventListener('click', NextDeck);
document.getElementById('add').addEventListener('click', AddCard);
document.getElementById('remove').addEventListener('click', RemoveCard);
document.getElementById('reset').addEventListener('click', Reset);

};