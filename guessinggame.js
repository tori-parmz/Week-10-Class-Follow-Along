

//get the users input
let element = document.getElementById("guess");

let userGuess = NaN;

element.addEventListener("blur", function(){ 
console.log(element.value)
userGuess = parseInt(element.value);
isGuessCorrect();
    
});

//get a random number

function randNumber() {
    return Math.floor(Math.random() * (100)) + 1
}

let number = randNumber();
console.log(number);

let hintContainer = document.getElementById('hint');

//alert the user if they are too high or too low

function isGuessCorrect() {
    
    if(number === userGuess)
    {
        //user wins
        //change the background color if the user wins


        document.body.style.backgroundColor = 'green'
        createPara(`Correct!`)


    }
    else if(number > userGuess)
    {
        //userguess is too low
        createPara(`Your guess of ${userGuess} is too low.`)

    }
    else
    {
        //userguess is too high
        createPara(`Your guess of ${userGuess} is too high.`)

    }

}



function createPara(text)
{
    const newPara = document.createElement('p');
    const newContent = document.createTextNode(text);

    newPara.appendChild(newContent);
    hintContainer.appendChild(newPara);
}
