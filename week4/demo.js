class Attempt {
  letters;

  constructor(length) {
    this.letters = new Array(length).fill({}).map(() => ({
      character: '',
      isIncluded: false,
      isCorrect: false,
    }));
  }

  makeAttempt(guessedWord, wordOfTheDay) {
    this.letters.forEach((letter, index) => {
      letter.character = guessedWord[index];
      letter.isGuessed = true;

      if (letter.character === wordOfTheDay[index]) {
        letter.isIncluded = true;
        letter.isCorrect = true;

        return;
      }

      if (wordOfTheDay.includes(letter.character)) {
        letter.isIncluded = true;
        letter.isCorrect = false;
      }
    });
  }

  printAttempt() {
    const printableLetters = this.letters.map((letter) => {
      if (letter.isCorrect) {
        return { letter: letter.character, color: '🟩' };
      }

      if (letter.isIncluded) {
        return { letter: letter.character, color: '🟨' };
      }

      if (letter.isGuessed) {
        return { letter: letter.character, color: '🟥' };
      }

      return { letter: letter.character, color: '⬜' };
    });

    console.table(printableLetters);
  }

  checkIfCorrect() {
    return this.letters.every((letter) => letter.isCorrect);
  }
}

const pickWordOfTheDay = (fiveLetterWords) => {
  const randomIndex = Math.floor(Math.random() * fiveLetterWords.length);

  return fiveLetterWords[randomIndex];
};

const getWordOfTheDay = (fiveLetterWords, usedWordsOfTheDay) => {
  const wordOfTheDay = pickWordOfTheDay(fiveLetterWords);

  if (usedWordsOfTheDay.includes(wordOfTheDay)) {
    return getWordOfTheDay(fiveLetterWords, usedWordsOfTheDay);
  }

  usedWordsOfTheDay.push(wordOfTheDay);

  return wordOfTheDay;
};

const createAttemptsTable = (maximumAttempts, maximumCharacters) => {
  const attempts = new Array(maximumAttempts).fill(
    () => new Attempt(maximumCharacters)
  );

  return attempts;
};

const printAttempts = (attempts) => {
  attempts.forEach((attempt) => {
    attempt.printAttempt();
  });
};

const getUserGuess = () => {
  const guessedWord = prompt('Guess a word!');

  if (!guessedWord) {
    alert('You must guess a word!');
    return getUserGuess();
  }

  if (guessedWord.length !== 5) {
    alert('You must guess a word with 5 letters!');
    return getUserGuess();
  }

  if (!/^[a-zA-Z]+$/.test(guessedWord)) {
    alert('Invalid word! Please enter only alphabetic characters.');
    return getUserGuess();
  }

  return guessedWord.toLocaleLowerCase();
};

const checkIfPlaying = (hasWon, currentAttempts, maximumAttempts) => {
  if (hasWon) {
    return false;
  }

  if (currentAttempts === maximumAttempts) {
    return false;
  }

  return confirm('Do you want to continue playing?');
};

const playWordle = () => {
  const fiveLetterWords = ['hello', 'world'];
  const maximumCharacters = 5;
  const usedWordsOfTheDay = [];
  const maximumAttempts = 6;
  let attemptCount = 0;
  let hasWon = false;
  let isPlaying = true;
  const attempts = new Array(maximumAttempts)
    .fill(null)
    .map(() => new Attempt(maximumCharacters));

  alert(
    "Welcome to Wordle! If you don't know the rules then checkout Wordle online."
  );

  const wordOfTheDay = getWordOfTheDay(fiveLetterWords, usedWordsOfTheDay);

  printAttempts(attempts);

  do {
    const guessedWord = getUserGuess();

    const currentAttempt = attempts[attemptCount];

    currentAttempt.makeAttempt(guessedWord, wordOfTheDay);

    hasWon = currentAttempt.checkIfCorrect();

    console.clear();
    printAttempts(attempts);

    attemptCount++;

    isPlaying = checkIfPlaying(hasWon, attemptCount, maximumAttempts);
  } while (isPlaying);

  if (hasWon) {
    alert(`You won in ${attemptCount} attempts!`);
  }

  alert('Thanks for playing Worldle, come back tomorrow!');
};
