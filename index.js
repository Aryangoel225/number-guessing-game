// Number Guessing Game

const minNum = 1;
const maxNum = 100;
const answer =  Math.floor(Math.random() * (maxNum - minNum + 1)+ minNum);

let attempts = 0;


// Get values for userInput and feedback
document.getElementById('submitGuessBtn').addEventListener('click', function () {
    // values from hmtl file
    const restartBtn = document.getElementById('restartBtn');
    const userGuessInput = document.getElementById('userInput');
    const feedbackElement = document.getElementById('feedback');
    const guess = Number(userGuessInput.value);

    // checking guess validity
    if(isNaN(guess)){
        feedbackElement.textContent = "Please enter a valid number.";
        feedbackElement.style.color = "red";
    } else if ( guess < minNum || guess > maxNum) {
        feedbackElement.textContent = "Please enter a valid number.";
        feedbackElement.style.color = "red";
    } else{
        attempts++; // add attempts
        // give feedback
        if(guess < answer){
            feedbackElement.textContent = "Too low! Try again.";
            feedbackElement.style.color = "blue";
        } else if(guess > answer){
            feedbackElement.textContent = "Too high! Try again.";
            feedbackElement.style.color = "blue";
        } else{
            feedbackElement.textContent =`Correct! The answer was ${answer}. It took you ${attempts} attempts`;
            feedbackElement.style.color = "green";
            document.getElementById('submitGuessBtn').disabled = true;
            userGuessInput.disabled = true;
            restartBtn.style.display ="inline-block"
        }
    }
        userGuessInput.value = '';
});
// reload the page
restartBtn.addEventListener('click', function () {
    location.reload(); 
});



