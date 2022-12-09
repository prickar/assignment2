const words = [
    "coding","computer", "laptop",
    "algorithm", "scripts", "syntax",
    "javascript", "argument", "arrays",
    "functions", "loops", "statement",
    "variable"
];

let word = words[Math.floor(Math.random() * words.length)];
let message = "\n"; 
let remainingLetter = word.length;
let maximumTries = 10;
let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

while (remainingLetter > 0 && maximumTries > 0) {
    let guess = prompt(message + "Team for this Hangman is: Programming." + 
    "\n" + answerArray.join(" ") +
     "\nGuesses left:"+ "\n" + maximumTries + "\n" + 
     "Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        message = "Please enter a single letter. \n";
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetter--;
                message = "You typed " + guess.toLocaleUpperCase() + ". It's correct!\n";
                maximumTries++;
            } else {
                message = "You said " + guess.toLocaleUpperCase() + ". It's wrong!\n";
            }
        }
    }
    maximumTries--;
}

if (remainingLetter === 0) {
    alert("You won!\nThe answer was " + word);
} else if (maximumTries <= 0) {
    alert("You lost this time around, try again and beat the hangman!");
} else {
    alert("You canceled the game, hope to see you come back!\n Have a nice day!")
}