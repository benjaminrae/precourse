# Parte 1 - Diseño de funciones

Es muy importante tomar tiempo para diseñar las funciones.

Deberiamos pensar en:

1. La responsibilidad de la funcion
2. El naming de la funcion (descriptivo, ingles)
   1. Debemos intentar que funciones lleven verbo + sustantivo
3. La entrada de la funcion
   1. Tambien debemos darle un buen naming los parametros
4. La salida de la funcion
   1. Que va a devolver la funcion?

La primera implementacion de la funcion debe respetar todo el diseño.

Si hemos decidido que la funcion es asi:

1. Pedir el nombre del usuario
2. getUserName
3. No recibe nada
4. Devuelve un string

Entonces tenemos que cumplir todo eso antes de pensar en gestion de errores:

```js
const getUserName = () => {
  const userName = prompt("Please tell me your name.");

  return userName;
};
```

Ahora deberiamos testear la funcion manualmente
Ahora vemos que respeta el diseño establecido y ahora podemos proceder a gestionar errores:

```js
const getUserName = () => {
  const userName = prompt("Please tell me your name.");

  if (!userName) {
    alert("You must enter a valid name");
    return getUserName(); // this return is importan -> if they ask about it tell Ss that later in the course they will see examples of what can happen if they don't return here
  }

  return userName;
};
```

Ahora volvemos a testear con la nueva funcionalidad

# Parte 2

Ahora pueden hacer el ejercicio de crear la funcion `getUserNumber` que tiene que pedir al usuario un numero para. Los que acaban antes pueden seguir con el resto del juego.

```js
const getUserGuess = () => {
  let receivedGuess = +prompt("Enter a number between 1 and 100");

  if (typeof receivedGuess !== "number" || Number.isNaN(receivedGuess)) {
    alert("Please enter a number");
    return getUserGuess();
  }

  if (receivedGuess < 0) {
    alert("Please enter a number greater than 1");
    return getUserGuess();
  }

  if (receivedGuess > 100) {
    alert("Please enter a number less than 100");
    return getUserGuess();
  }

  if (!Number.isInteger(receivedGuess)) {
    alert("Please enter a whole number");
    return getUserGuess();
  }

  return receivedGuess;
};
```

Corregir, comprobar que han hecho bien la gestion de errores
Resuelve dudas

# Part 3

El resto del demo ([Challenge](./CHALLENGE.md))

Ahora usaremos la funcion que han creado para seguir implementando.
Toma un momento para pensar en otros datos que necesita nuestro programa (array de numeros adevinados, etc.)

El archivo, `demo.js` es solo una guia. Son los alumnos que deberian pensar en el naming, las responsibilidades de funciones y solo deberias guiarles hacia las buenas practicas. No pretendemos que sepan hacer todo solos ahora mismo, y algunos se podrian asustar con el pensamiento de hacer un ejercicio asi solo, otros lo veran muy facil. Hay que medir el grupo y apuntar al ritmo y nivel del medio.

Si al final no hay tiempo para acabar, lo pueden acabar en casa y lo retomaremos la semana que viene
