class Attempt {
  letters;
  element;
  isMade = false;

  constructor(element = document.createElement('ul')) {
    this.letters = new Array(element.children.length).fill({}).map(() => ({
      character: '',
      isIncluded: false,
      isCorrect: false,
      isFilled: false,
      isGuessed: false,
    }));
    this.element = element;
  }

  fillAttempt(guessedWord) {
    this.element.children.forEach((child, index) => {
      child.textContent = guessedWord[index];
    });
  }

  addNextLetter(letter) {
    const nextEmptyLetter = this.letters.find((letter) => !letter.character);

    if (nextEmptyLetter === undefined) {
      return;
    }

    nextEmptyLetter.character = letter;
    nextEmptyLetter.isFilled = true;

    this.render();
  }

  deleteLastLetter() {
    const lastLetterIndex = this.letters.findIndex(
      (letter) => !letter.character
    );

    if (lastLetterIndex === 0) {
      return;
    }

    if (lastLetterIndex === -1) {
      this.letters[this.letters.length - 1].character = '';
      this.render();
      return;
    }

    this.letters[lastLetterIndex - 1].character = '';
    this.letters[lastLetterIndex - 1].isFilled = false;

    this.render();
  }

  render() {
    this.letters.forEach((letter, index) => {
      this.element.children[index].textContent = letter.character;

      if (letter.isCorrect) {
        this.element.children[index].classList.add('correct');
        return;
      }

      if (letter.isIncluded) {
        this.element.children[index].classList.add('included');
        return;
      }

      if (letter.isGuessed) {
        this.element.children[index].classList.add('incorrect');
        return;
      }

      if (letter.isFilled) {
        this.element.children[index].classList.add('filled');
        return;
      }
    });
  }

  makeAttempt(wordOfTheDay) {
    if (this.letters.some((letter) => !letter.character)) {
      return;
    }

    this.isMade = true;
    this.letters.forEach((letter, index) => {
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

    this.render();
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

  checkIfIsMade() {
    return this.isMade;
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

const registerKeyboardEvents = (attempts, wordOfTheDay) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const eventListener = keyboardClickHandler(attempts, wordOfTheDay);

    key.addEventListener('click', eventListener);
  });
};

const keyboardClickHandler = (attempts, wordOfTheDay) => {
  return (event) => {
    const key = event.target.textContent;

    if (attempts.some((attempt) => attempt.checkIfCorrect())) {
      return;
    }

    const attempt = attempts.find((attempt) => !attempt.checkIfIsMade());

    if (key === 'enter') {
      attempt.makeAttempt(wordOfTheDay);

      if (attempt.checkIfCorrect()) {
        removeKeyboardEvents(attempts, wordOfTheDay);
      }

      if (attempts.every((attempt) => attempt.checkIfIsMade())) {
        removeKeyboardEvents(attempts, wordOfTheDay);
      }

      return;
    }

    if (key === 'del') {
      attempt.deleteLastLetter();
      printAttempts(attempts);
      return;
    }

    attempt.addNextLetter(key);
  };
};

const removeKeyboardEvents = (attempts, wordOfTheDay) => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => {
    const eventListener = keyboardClickHandler(attempts, wordOfTheDay);

    key.removeEventListener('click', eventListener);
  });
};

const playWordle = () => {
  const fiveLetterWords = ['hello', 'world'];
  const usedWordsOfTheDay = [];

  const attempts = Array.from(document.querySelectorAll('.attempt')).map(
    (attempt) => {
      return new Attempt(attempt);
    }
  );

  const wordOfTheDay = getWordOfTheDay(fiveLetterWords, usedWordsOfTheDay);

  registerKeyboardEvents(attempts, wordOfTheDay);
};

playWordle();
