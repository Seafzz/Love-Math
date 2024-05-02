// Wait for the DOM to finnish loading before running this game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")==="submit") {
                alert("You clicked Submit!");
            }else{
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
                
            }
        })
    }   
})

/**
 * The main game "loop", called the script first loaded
 * and after the users answer has been procesed
 */
function runGame(){
    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;

}

function checkAwnser(){


}
function calculateCorrectAnswer(){


}
function incrementScore(){


}
function incrementWrongAnswer(){


}
function displayAdditionQuestion(){


}
function displaySubstractQuestion(){


}
function displayMultiplyQuestion(){

}