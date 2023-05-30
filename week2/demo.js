// const getCharacterCode = (character) => character.charCodeAt(0);
// const encodedText = "104-101-108-108-111-32-104-111-119-32-97-114-101-32-121-111-117-63";

// const characters = "abcdefghijklmnopqrstuvwxyz ,.-?!";

// const characterCodes = characters.split("").map((letter) => {
//   return {
//     letter,
//     code: getCharacterCode(letter),
//   };
// });

const characterCodes = [
  {
    letter: 'a',
    code: 97,
  },
  {
    letter: 'b',
    code: 98,
  },
  {
    letter: 'c',
    code: 99,
  },
  {
    letter: 'd',
    code: 100,
  },
  {
    letter: 'e',
    code: 101,
  },
  {
    letter: 'f',
    code: 102,
  },
  {
    letter: 'g',
    code: 103,
  },
  {
    letter: 'h',
    code: 104,
  },
  {
    letter: 'i',
    code: 105,
  },
  {
    letter: 'j',
    code: 106,
  },
  {
    letter: 'k',
    code: 107,
  },
  {
    letter: 'l',
    code: 108,
  },
  {
    letter: 'm',
    code: 109,
  },
  {
    letter: 'n',
    code: 110,
  },
  {
    letter: 'o',
    code: 111,
  },
  {
    letter: 'p',
    code: 112,
  },
  {
    letter: 'q',
    code: 113,
  },
  {
    letter: 'r',
    code: 114,
  },
  {
    letter: 's',
    code: 115,
  },
  {
    letter: 't',
    code: 116,
  },
  {
    letter: 'u',
    code: 117,
  },
  {
    letter: 'v',
    code: 118,
  },
  {
    letter: 'w',
    code: 119,
  },
  {
    letter: 'x',
    code: 120,
  },
  {
    letter: 'y',
    code: 121,
  },
  {
    letter: 'z',
    code: 122,
  },
  {
    letter: ' ',
    code: 32,
  },
  {
    letter: ',',
    code: 44,
  },
  {
    letter: '.',
    code: 46,
  },
  {
    letter: '-',
    code: 45,
  },
  {
    letter: '?',
    code: 63,
  },
  {
    letter: '!',
    code: 33,
  },
];

// array listo - enseñar forEach
characterCodes.forEach((characterCode) => {
  console.log(
    `The code for the letter ${characterCode.letter} is ${characterCode.code}`
  );
});

// 0- Cuál es la repsonsabilidad de mi función, qué tiene que hacer
// 1 - el naming de la funcion
// 2 - que recibe la funcion & que devuelve
// 3 - tenemos un string, como lo convertimos en un array? --> split()
// 4 - convertir el codigo del primero --> find()
// 5- Repetir una implementación por cada elemento del array, quiero obtener un array de la misma longitud (array codificado) --> map()
/// 6- Quiero pasar ese array a un string --> join()
// 7 - Refactor para encadenar metodos ??
const encodeText = (textToEncode) => {
  const listOfCharacters = textToEncode.split('');

  const listOfCodes = listOfCharacters.map((letter) => {
    const characterCode = characterCodes.find((code) => code.letter === letter);
    return characterCode.code;
  });

  return listOfCodes.join('-');
};

// bola extra en casa
// tarea: Sacar función decodeText haciendo "ingeniería inversa"
const decodeText = (encodedText) =>
  encodedText
    .split('-')
    .map((encodedLetter) => {
      const characterCode = characterCodes.find(
        (code) => code.code === +encodedLetter
      );

      return characterCode.letter;
    })
    .join('');

// quitar
const getUserName = () => {
  const userName = prompt("Hello, what's your name?");

  if (!userName) {
    alert('Please enter a valid username');
    getUserName();
  }

  return userName;
};

const getUserRole = () => {
  const userRole = prompt('Do you want to encode or decode a message?');
  // convertir a lower case

  if (!userRole) {
    alert("Please enter 'encode' or 'decode'");
    getUserRole();
  }

  if (
    userRole.toLowerCase() !== 'decode' &&
    userRole.toLowerCase() !== 'encode'
  ) {
    alert("Please enter 'encode' or 'decode'");
    getUserRole();
  }

  return userRole.toLowerCase();
};

const getUserMessage = (userRole) => {
  const userMessage = prompt(`What would you like to ${userRole}?`);

  if (!userMessage) {
    alert('Please enter a valid message');
    getUserMessage();
  }

  return userMessage;
};

const checkCodifyAgain = () => confirm('Would you like to codify again?');

const startCodify = () => {
  const userName = getUserName();
  let isCodifying = true;

  alert('Welcome to Codify ' + userName);

  do {
    const userRole = getUserRole();

    const userMessage = getUserMessage(userRole);
    /// hacer console.log de llamadas a funciones
    if (userRole === 'encode') {
      // enseñar que podemos guardar el resultado en una variable
      // que pasa si ponemos la llamada directamente en el console.log
      alert(`Your encoded message is: ${encodeText(userMessage)}`);
    }

    if (userRole === 'decode') {
      // aqui haremos un alert con algo como "Esta parte la harás tu en casa"
      alert(`Your decoded message is: ${decodeText(userMessage)}`);
    }

    // poner confirm("Would you like to codify again?") en vez que una funcion
    isCodifying = checkCodifyAgain();
  } while (isCodifying);

  alert(`Goodbye ${userName}, come back soon!`);
};

startCodify();

/* Traeremos preparado: 

- Array de objetos
- getUserRole
- getUserMessage

Orden:
0) Estructuracion del código, qué funciones tendré y con qué responsabilidades
1) forEach con el array (imprimir cada letra con su código)
2) encode()
3) console.log de las funciones, valor retornado
4) getUserRole
5) startCodify, en el que se llaman a las funciones construidas previamente
6) Continuación del "juego". do while + confirm al final de startGame 
*/
