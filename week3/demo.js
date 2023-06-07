// RULETA DE LA SUERTE:
// - Crear un juego al que:
// 	    - Le pasaremos una palabra
//      - Nos irá dando letras aleatorias sin repetir
// 	    - Chequeará si dichas letras están incluidas en la palabra
// 	    - Una vez que todas las letras de la palabra hayan salido, el jugador gana.
// 	    - Se verán cuantos turnos hemos tardado en acabar.

// charactersToGuess = [{ letter: "a", isGuessed: false }, { letter: "b", isGuessed: false }, { letter: "a", isGuessed: false }]

const generateCharactersToGuess = (charactersToGuess, wordToGuess) => {
  for (let wordIndex = 0; wordIndex < wordToGuess.length; wordIndex++) {
    charactersToGuess.push({
      letter: wordToGuess[wordIndex],
      isGuessed: false,
    });
  }
};

const getRandomLetter = (usedNumbers) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const randomNumber = Math.floor(Math.random() * alphabet.length);

  if (usedNumbers.includes(randomNumber)) {
    return getRandomLetter(usedNumbers);
  }

  usedNumbers.push(randomNumber);
  return alphabet.charAt(randomNumber);
};

const startNextTurn = (charactersToGuess, usedNumbers) => {
  const randomLetter = getRandomLetter(usedNumbers);
  alert(`Your letter is... ${randomLetter.toUpperCase()}!`);

  charactersToGuess.forEach((character) => {
    if (character.letter === randomLetter) {
      character.isGuessed = true;
    }
  });
};

const checkIfWon = (charactersToGuess) => {
  return charactersToGuess.every((word) => word.isGuessed);
};

const playWheelOfChance = () => {
  const wordToGuess = 'almacenaje';
  const charactersToGuess = [];
  const usedNumbers = [];
  let rounds = 0;
  let hasWon = false;
  let isPlaying = true;

  alert('Hello! Welcome to THE GAME');

  generateCharactersToGuess(charactersToGuess, wordToGuess);

  do {
    isPlaying = confirm('Do you want a letter? 8-)');

    if (isPlaying) {
      startNextTurn(charactersToGuess, usedNumbers);
      rounds++;
      hasWon = checkIfWon(charactersToGuess);

      console.table(charactersToGuess);
    }
  } while (!hasWon && isPlaying);

  if (hasWon) {
    alert(`Congratulations! You won in ${rounds} rounds.`);
  }

  alert('Goodbye 👋');
};

playWheelOfChance();
