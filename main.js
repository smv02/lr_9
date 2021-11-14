const nameUser = prompt('What is your name?');
let block = document.querySelector('.block');
let block2 = document.querySelector('.block2');
let generate = document.querySelector('.generate');
let start = document.querySelector('.start');
let sumScoreUser = 0;
let sumScoreComputer = 0;
let attempt = 0;

start.querySelector('.attempt').innerHTML = attempt;
block.querySelector('.user').innerHTML = nameUser;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
function reset() {
    attempt = 0;
    sumScoreUser = 0;
    sumScoreComputer = 0;
    start.querySelector('.attempt').innerHTML = attempt;
    block.querySelector('.sumScoreUser').innerHTML = sumScoreUser;
    block2.querySelector('.sumScoreComputer').innerHTML = sumScoreComputer;
}

generate.onclick = function(){
    let numberUser, numberComputer;
    do {
        numberUser = getRandomInt(2, 11);
        numberComputer = getRandomInt(2, 11);   
    } while (numberUser == numberComputer || numberUser == 5 || numberComputer == 5);
    sumScoreUser += numberUser;
    sumScoreComputer += numberComputer;
    block.querySelector('.sumScoreUser').innerHTML = sumScoreUser;
    block2.querySelector('.sumScoreComputer').innerHTML = sumScoreComputer;


    document.querySelector('.scoreUser').setAttribute('src',`img/${numberUser}.png`);
    document.querySelector('.scoreComputer').setAttribute('src',`img/red/${numberComputer}.png`);

    attempt++;
    start.querySelector('.attempt').innerHTML = attempt;

    if (attempt == 3) {
        if (sumScoreUser > sumScoreComputer) {
            alert(`Win ${nameUser}!`);
            window.setTimeout(reset, 1500);
        } else if (sumScoreComputer > sumScoreUser) {
            alert('Win computer!');
            window.setTimeout(reset, 1500);
        } else {
            alert('Draw!!!');
            window.setTimeout(reset, 1500);
        }
    }
};