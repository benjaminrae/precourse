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
