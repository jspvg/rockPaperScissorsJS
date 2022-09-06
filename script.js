const rockCard = document.getElementById('rockCard');
const paperCard = document.getElementById('paperCard');
const scissorsCard = document.getElementById('scissorsCard');
const computerImage = document.querySelector('#computersChoice img');
const computerOptionTitle = document.querySelector('#computersChoice .card-title');
const winnerHeading = document.getElementById('winner');
const scoreHeading = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

const options = [
    {
        name: 'Rock',
        image: './images/rock.png'
    },
    {
        name: 'Scissors',
        image: './images/scissors.png'
    },
    {
        name: 'Paper',
        image: './images/paper.png'
    }
];

let score = 0;

rockCard.onclick = () => startGame('rock');
paperCard.onclick = () => startGame('paper');
scissorsCard.onclick = () => startGame('scissors');

function getRandomOption() {
    var randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function showComputerOption(computerOption) {
    computerImage.setAttribute('src', computerOption.image);
    computerOptionTitle.innerText = computerOption.name;
}

function calculateScore(userOption, computerOption) {
    let isUserWinner = false;
    userOption = userOption.toLowerCase();
    computerOption = computerOption.toLowerCase();

    if (userOption === computerOption) {
        winnerHeading.innerText = 'No one wins';
        winnerHeading.style.color = 'black';
        return;
    }

    if (userOption === 'rock' && computerOption === 'scissors') {
        isUserWinner = true;
    }
    else if (userOption === 'scissors' && computerOption === 'paper') {
        isUserWinner = true;
    }
    else if (userOption === 'paper' && computerOption === 'rock') {
        isUserWinner = true;
    }

    if (isUserWinner) {
        winnerHeading.innerText = 'User wins';
        winnerHeading.style.color = 'green';
        score++;
    } else {
        winnerHeading.innerText = 'Computer wins';
        winnerHeading.style.color = 'red';
        score--;
    }

    scoreHeading.innerText = `Score ${score}`;

}

function startGame(option) {
    const computerOption = getRandomOption();
    showComputerOption(computerOption);
    calculateScore(option, computerOption.name);
}

restartBtn.onclick = function() {
    score = 0;
    scoreHeading.innerText = `Score ${score}`;
    winnerHeading.innerText = ''
    computerOptionTitle.innerText = '';
    computerImage.setAttribute('src', './images/default.png');
}
