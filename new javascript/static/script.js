// challenge 1: Your age in days 

function ageInDays() {
    var birthYear = prompt('what year were you born..... good friend');
    var ageInDayss = (2022 - birthYear) * 365;
    var h1 = document.createElement('hi');
    var textAnswer = document.createTextNode('you are ' + ageInDayss + ' ' + 'days old');
    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset () {
    document.getElementById('ageIndays').remove();
}

// challenge 2: Cat generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src ="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

// Challenge 3: Rock Paper Scissors


function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('computerChoice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    
    message = finalMessage(results);
    console.log(message);
    
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
} 

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'YOU LOST!!!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'YOU TIED!', 'color': 'yellow'};
    } else {
        return {'message': 'YOU WON!!!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,  
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var mesageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(37, 50, 233, 1);'>"
    mesageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size; 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgb(243, 50, 233, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(mesageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Chanlenge 4: Change the Color of all buttons
var all_butttons = document.getElementsByTagName('button');
console.log(all_butttons);

var copyAllButtons = [];
for (let i=0; i< all_butttons.length;i++) {
    copyAllButtons.push(all_butttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
    console.log(buttonThingy.value);
}

function buttonsRed() {
    for (let i=0; i < all_butttons.length; i++){
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_butttons.length; i++){
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i=0; i < all_butttons.length; i++) {
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choices = ['btn-success', 'btn-danger', 'btn-primary', 'btn-warning'];

    for (let i=0; i < all_butttons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        all_butttons[i].classList.remove(all_butttons[i].classList[1]);
        all_butttons[i].classList.add(choices[randomNumber]);
    }
}

// CHallenge 5: Blackjack
let blackjackGame = {
    'you': ('scorespan': '#your-blackjack-result', 'div': '#your-box', 'score': 0),
    'dealer': ('scorespan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0),    
}

const YOU = blackjackGame['you']
const dealer = blackjackGame['dealer']

const hitSound = new Audio['static/sounds/switch.mp4'];

document.querySelector("#blackjack-hit-button").addEventListener('click', blackjackHit);

function blackjackHit() {
   showcard();
}

function showcard(activePlayer) {
    let cardImage = document.createElement('img'); 
    cardImage.src = 'static/images/q.png';
    document.querySelector(YOU['div']).appendChild(cardImage);
    hitSound.play();
}