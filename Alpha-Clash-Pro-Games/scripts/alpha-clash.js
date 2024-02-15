
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

function handleKeyboardKeyUpEvent(event){
    const playerPassed = event.key;
    console.log('player pressed', playerPassed)


    // Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPassed, expectedAlphabet);

    // checked matched or not
    if(playerPassed === expectedAlphabet){
        console.log('You get a point');
    }else{
        console.log('You missed, you lost a chance');
        
    }
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
    console.log('your random alphabet:', alphabet)

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set bg color
    setBackgroundColorById(alphabet)
}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

