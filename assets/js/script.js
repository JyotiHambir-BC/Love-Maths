
document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert ("You clicked Submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert (`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * the main game "loop", called when the script is first loaded
 * and after the user answers has been processed
 */
function runGame() {
    //create two random numbers between 0 to 25
    let num1 = math.floor(Math.random()*25) +1;
    let num2 = math.floor(Math.random()*25) +1;

}

function checkAnswer() {


}

function calculateCorrectAnswer() {


}

function incrementScore() {


}

function incrementWrongAnswer() {


}

function displayAdditionQuestion() {


}

function displaySubtractQuestion() {


}

function displayMultiplyQuestion() {


}

function displayDivisionQuestion() {


}