// class Wordle {
//   word;
//   maxAttempts = 6;
//   currentAttempts = 0;

//   constructor(word) {
//     this.word = this.createWord(word);
//   }

//   createWord(word) {
//     this.word = word.split('').forEach((letter) => ({
//       letter,
//       isGuessed: false,
//     }));
//   }

//   getWord() {
//     return this.word;
//   }

//   guessLetter(letter) {
//     this.word = this.word.map((letter) => {
//       if (letter === letter) {
//         return { ...letter, isGuessed: true };
//       }

//       return letter;
//     });
//   }
// }

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

        return;
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

const playWordle = () => {
  const fiveLetterWords = ['hello', 'world'];
  const maximumCharacters = 5;
  const usedWordsOfTheDay = [];
  const maximumAttempts = 6;
  const currentAttempts = 0;
  const attempts = new Array(maximumAttempts)
    .fill(null)
    .map(() => new Attempt(maximumCharacters));

  alert(
    "Welcome to Wordle! If you don't know the rules then checkout Wordle online."
  );

  const wordOfTheDay = getWordOfTheDay(fiveLetterWords, usedWordsOfTheDay);

  attempts.forEach((attempt) => {
    attempt.printAttempt();
  });

  const guessedWord = prompt('Guess a word!');

  const currentAttempt = attempts[currentAttempts];

  currentAttempt.makeAttempt(guessedWord, wordOfTheDay);

  currentAttempt.printAttempt();

  alert('Thanks for playing Worldle, come back soon!');
};
