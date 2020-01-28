let variants = ['r', 's', 'p'];
let userScore = 0;
let compScore = 0;
let tieScore = 0;
// let userChoice = prompt('Entry game letter: ')
function getRandomInteger(min, max){
    let random_integer = Math.round(Math.random() * 2 + 0);
    return random_integer;
}

function getUserChoice(e){
    let userChoice = e.key;
    document.getElementById('user-choice').innerHTML ='User choice: ' +  userChoice;

    let i = getRandomInteger(0, variants.length - 1);
    let compChoice = variants[i];
    document.getElementById('comp-choice').innerHTML ='Comp choice: '+  compChoice;


    if(userChoice !== 'r' && userChoice !== 's' && userChoice !== 'p'){
        document.getElementById('current-result').innerHTML = 'Your choice wrong letter';
        return false;
    }


    if (compChoice == userChoice){
        document.getElementById('tie-score').innerHTML ='Tie score: ' + tieScore;
        tieScore++
    } else if (compChoice == 'r' && userChoice == 'p'){
        document.getElementById('current-result').innerHTML = 'Congratulations! You win';
        userScore++;
    } else if (compChoice == 'p' && userChoice == 'r'){
        document.getElementById('current-result').innerHTML = 'Ohh Sorry comp win';
        compScore++;
    } else if (compChoice == 's' && userChoice == 'p'){
        document.getElementById('current-result').innerHTML = 'Ohh Sorry comp win';
        compScore++;
    } else if (compChoice == 'p' && userChoice == 's'){
        document.getElementById('current-result').innerHTML = 'Congratulations! You win';
        userScore++;
    } else if (compChoice == 's' && userChoice == 'r'){
        document.getElementById('current-result').innerHTML = 'Congratulations! You win';
        userScore++;
    } else if (compChoice == 'r' && userChoice == 's'){
        document.getElementById('current-result').innerHTML = 'Ohh Sorry comp win';
        compScore++;
    }
    document.getElementById('user-score').innerHTML = 'User score: '+ userScore;
    document.getElementById('comp-score').innerHTML = 'Comp score: '+ compScore;

    // alert('.::Total Score::. \nUser: ' + userScore + ';\n' + 'Comp: '+ compScore)


}
window.onkeypress = getUserChoice;