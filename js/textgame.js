const words = [
    "coding","computer", "laptop",
    "algorithm", "scripts", "syntax"
];

let word = words[Math.floor(Math.random() * words.length)];
let message = "\n"; 

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetter = word.length;
let maximumTries = 10;

while (remainingLetter > 0 && maximumTries > 0) {
    let guess = prompt(message + "\n" + answerArray.join(" ") + "\nGuesses left:"+ "\n" + maximumTries + "\n" + "Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        message = "Please enter a single letter.";
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetter--;
                message = "You typed " + guess.toLocaleUpperCase() + ". It's correct!\n";
                maximumTries++;
                break; 
            } else {
                message = "You said " + guess.toLocaleUpperCase() + ". It's wrong!\n";
            }
        }
    }
    maximumTries--;
}


if (remainingLetter === 0) {
    alert("Good job! The answer was " + word);
} else if (maximumTries <= 0) {
    alert("You lost!");
} else {
    alert("You canceled! Byebye!")
}