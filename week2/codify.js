const characterCodes = [
  {
    character: 'a',
    code: 97,
  },
  {
    character: 'b',
    code: 98,
  },
  {
    character: 'c',
    code: 99,
  },
  {
    character: 'd',
    code: 100,
  },
  {
    character: 'e',
    code: 101,
  },
  {
    character: 'f',
    code: 102,
  },
  {
    character: 'g',
    code: 103,
  },
  {
    character: 'h',
    code: 104,
  },
  {
    character: 'i',
    code: 105,
  },
  {
    character: 'j',
    code: 106,
  },
  {
    character: 'k',
    code: 107,
  },
  {
    character: 'l',
    code: 108,
  },
  {
    character: 'm',
    code: 109,
  },
  {
    character: 'n',
    code: 110,
  },
  {
    character: 'o',
    code: 111,
  },
  {
    character: 'p',
    code: 112,
  },
  {
    character: 'q',
    code: 113,
  },
  {
    character: 'r',
    code: 114,
  },
  {
    character: 's',
    code: 115,
  },
  {
    character: 't',
    code: 116,
  },
  {
    character: 'u',
    code: 117,
  },
  {
    character: 'v',
    code: 118,
  },
  {
    character: 'w',
    code: 119,
  },
  {
    character: 'x',
    code: 120,
  },
  {
    character: 'y',
    code: 121,
  },
  {
    character: 'z',
    code: 122,
  },
  {
    character: ' ',
    code: 32,
  },
  {
    character: ',',
    code: 44,
  },
  {
    character: '.',
    code: 46,
  },
  {
    character: '-',
    code: 45,
  },
  {
    character: '?',
    code: 63,
  },
  {
    character: '!',
    code: 33,
  },
];

const codifyMessage = (message) => {
  const characters = message.split('');

  const messageCodes = characters.map((character) => {
    const foundCharacterCode = characterCodes.find((characterCode) => {
      return character === characterCode.character;
    });

    return foundCharacterCode.code;
  });

  return messageCodes.join('-');
};

const getUserRole = () => {
  const userRole = prompt(
    'Do you want to encode or decode? Write encode or decode'
  );

  if (!userRole) {
    alert("Please enter 'encode' or 'decode'");
    return getUserRole();
  }

  const lowerCaseUserRole = userRole.toLowerCase();

  if (lowerCaseUserRole !== 'encode' && lowerCaseUserRole !== 'decode') {
    alert("Please enter 'encode' or 'decode'");
    return getUserRole();
  }

  return lowerCaseUserRole;
};

const getUserMessage = () => {
  const userMessage = prompt('What is your message?');

  if (!userMessage) {
    alert('Please enter a valid message');
    return getUserMessage();
  }

  return userMessage;
};

const startCodify = () => {
  alert('Hello, welcome to Codify');

  do {
    const userRole = getUserRole();

    const userMessage = getUserMessage();

    if (userRole === 'encode') {
      alert(`Your secret message is: ${codifyMessage(userMessage)}`);
    }
  } while (confirm('Do you want to perform another action?'));

  alert('Goodbye, see you soon');
};

startCodify();
