
// function play(){
//     // Step 1: hide the home screen, to hide the screen add the hidden to home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // console.log(homeSection.classList);


//     // Show the playground
//     const  playgroundSection = document.getElementById('play-ground ');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);

// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed)

    // Stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('Right key pressed');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();


        /*
        // Update Score:
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);


        // 2. increase the score by 1
        const newScore = currentScore + 1;
        // 3. show the updated score
        currentScoreElement.innerText = newScore;


        // Start new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

        */
    } else {
        console.log('Wrong pressed');
        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementValueById('current-life', updateLife);

        if(updateLife === 0){
            gameOver();
        }






        /*
        // step 1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)
        // step 2: reduce life count
        const newLife = currentLife - 1;

        // step 3: display updated life count
        currentLifeElement.innerText = newLife;
        */
    }


    // // Get the expected to press
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // const currentAlphabet = currentAlphabetElement.innerText;
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPassed, expectedAlphabet);

    // // checked matched or not
    // if(playerPassed === expectedAlphabet){
    //     console.log('You get a point');
    // }else{
    //     console.log('You missed, you lost a chance');

    // }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);





// function handleKeyboardButtonPress() {
//     console.log('Button Pressed')
// }

// // Capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet:', alphabet)

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set bg color
    setBackgroundColorById(alphabet)
}


function play() {
    // Hide everything, show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score & life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score',0)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // Update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);


}


