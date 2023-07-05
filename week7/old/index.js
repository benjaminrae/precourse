class Attempt {
  letters;

  constructor(length) {
    this.letters = new Array(length).fill({}).map(() => ({
      character: '',
      isIncluded: false,
      isCorrect: false,
      isGuessed: false,
    }));
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

  makeAttempt(guessedWord, wordOfTheDay) {
    this.letters.forEach((letter, index) => {
      letter.character = guessedWord[index];
      letter.isGuessed = true;

      if (letter.character === wordOfTheDay[index]) {
        letter.isIncluded = true;
        letter.isCorrect = true;
      }

      if (wordOfTheDay.includes(letter.character)) {
        letter.isIncluded = true;
      }
    });
  }

  checkIsCorrect() {
    return this.letters.every((letter) => letter.isCorrect);
  }
}

const getUserGuess = (maximumLength) => {
  const userGuess = prompt('Guess your word');

  if (!userGuess) {
    alert('You must guess a word!');
    return getUserGuess(maximumLength);
  }

  if (userGuess.length !== maximumLength) {
    alert(`You must guess a word with ${maximumLength} letters!`);
    return getUserGuess(maximumLength);
  }

  if (!/^[a-zA-Z]+$/.test(userGuess)) {
    alert('Invalid word! Please enter only alphabetic characters!');
    return getUserGuess(maximumLength);
  }

  return userGuess;
};

const getWordOfTheDay = (wordsToGuess, usedWordsOfTheDay) => {
  const randomIndex = Math.floor(Math.random() * wordsToGuess.length);
  const wordOfTheDay = wordsToGuess[randomIndex];

  if (usedWordsOfTheDay.includes(wordOfTheDay)) {
    return getWordOfTheDay(wordsToGuess, usedWordsOfTheDay);
  }

  usedWordsOfTheDay.push(wordOfTheDay);

  return wordOfTheDay;
};

const printAttempts = (attempts) => {
  attempts.forEach((attempt) => {
    attempt.printAttempt();
  });
};

const playWordle = () => {
  const wordsToGuess = ['hello', 'world'];
  const usedWordsOfTheDay = [];
  const maximumAttempts = 6;
  const maximumCharacters = 5;
  let currentAttemptIndex = 0;
  let hasWon = false;

  alert(
    "Hello, welcome to Wordle! If you don't know how to play, ask your Grandmother"
  );

  const wordOfTheDay = getWordOfTheDay(wordsToGuess, usedWordsOfTheDay);

  const attempts = new Array(maximumAttempts)
    .fill(null)
    .map(() => new Attempt(maximumCharacters));

  printAttempts(attempts);

  do {
    const userGuess = getUserGuess(maximumCharacters);

    const attempt = attempts[currentAttemptIndex];
    attempt.makeAttempt(userGuess, wordOfTheDay);
    hasWon = attempt.checkIsCorrect();

    console.clear();
    printAttempts(attempts);

    currentAttemptIndex++;
  } while (!hasWon && currentAttemptIndex < 6);

  alert('Come back tomorrow for a new word!');
};

playWordle();
