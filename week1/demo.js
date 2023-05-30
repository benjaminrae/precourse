/**
 * Es importante que ven el uso de clausulas de guardia
 * Tambien es importante que ven que no usamos if else y else if
 */
const getUserGuess = () => {
  let receivedGuess = +prompt('Enter a number between 1 and 100');

  /**
   * Seguramente esta condicion causa preguntas
   * Si quieren saber la diferencia entre isNaN y Number.isNaN es importante ir a MDN
   * Que lo lean ellos y comprobar que lo entienden
   */
  if (typeof receivedGuess !== 'number' || Number.isNaN(receivedGuess)) {
    alert('Please enter a number');
    return getUserGuess();
  }

  if (receivedGuess < 0) {
    alert('Please enter a number greater than 1');
    return getUserGuess();
  }

  if (receivedGuess > 100) {
    alert('Please enter a number less than 100');
    return getUserGuess();
  }

  if (!Number.isInteger(receivedGuess)) {
    alert('Please enter a whole number');
    return getUserGuess();
  }

  return receivedGuess;
};

const checkUserNumberIsCorrect = (
  userNumber,
  numberToGuess,
  guessedNumbers
) => {
  if (guessedNumbers.includes(userNumber)) {
    alert('You already guessed that number');
    return false;
  }

  if (userNumber !== numberToGuess) {
    alert('Wrong number');
    guessedNumbers.push(userNumber);
    return false;
  }

  alert('You guessed the number!');
  return true;
};

const checkContinue = () => {
  const continuePlaying = confirm('Do you want to continue playing?');

  return continuePlaying;
};

/**
 * Esta funcion podria recibir el numero a adivinar como parametro
 * O solo tenerlo declarado dentro
 * Intentemos no dejarlo fuera como variable global para que acostumbren a usar una funcion "directora de orquesta"
 */
const playNumberGuessingGame = () => {
  /**
   * es importante que saluden al usuario
   * tienen que empezar a acostumbrarse a tener el usuario en mente siempre
   * a estas alturas solo se puede hacer eso con mensajes claros y amigables
   * aqui ya se podria usar el nombre del usuario, pero no lo hacemos para ahorrar tiempo
   */
  alert('Welcome to the number guessing game!');
  const numberToGuess = 5;
  const guessedNumbers = [];
  let turns = 0;
  let isCorrect = false;

  do {
    turns++;
    const userNumber = getUserGuess();

    isCorrect = checkUserNumberIsCorrect(
      userNumber,
      numberToGuess,
      guessedNumbers
    );

    if (isCorrect) {
      alert(`It took you ${turns} turns to guess the number`);
    }
  } while (checkContinue() && !isCorrect);

  alert('Goodbye! See you next time!');
};

playNumberGuessingGame();
