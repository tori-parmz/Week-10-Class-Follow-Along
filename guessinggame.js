

//get the users input
let element = document.getElementById("guess");

let userGuess = NaN;

element.addEventListener("blur", function(){ 
console.log(element.value)
userGuess = element.value
    
});

//get a random number

function randNumber() {
    return Math.floor(Math.random() * (100)) + 1
}

let number = randNumber();
console.log(number);

//alert the user if they are too high or too low



//change the background color if the user wins