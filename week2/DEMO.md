# Codify

1. Introducir el ejercicio

Vamos a crear una app que puede encriptar o desencriptar mensajes segun el rol del usuario.

La app pedirá por prompt el rol de usuario (encode o decode)
La app tendra un array de objetos con cada character y su codigo

2. Empezar a pensar en los datos que necesita la app

- un mensaje que recibimos del usuario
- lista los caracteres sin encriptar
- lista de los caracteres encriptados
- nombre que recibimos del usuario

3.  Empezar demo mostrando el array de objetos (characterCodes)

    1.  mostrar el forEach imprimiendo por consola cada character y su codigo

4.  Explicar que vamos a empezar por la funcion que codifica el mensaje del usuario
    1.  Cuál es la repsonsabilidad de mi función, qué tiene que hacer
    2.  el naming de la funcion
    3.  que recibe la funcion & que devuelve
    4.  tenemos un string, como lo convertimos en un array? --> split()
    5.  convertir el codigo del primero --> find()
    6.  Repetir una implementación por cada elemento del array, quiero obtener un array de la misma longitud (array codificado) --> map()
    7.  Quiero pasar ese array a un string --> join()
    8.  Refactor para encadenar metodos ??
5.  crear la funcion de getUserRole
6.  crear la funcion de getUserMessage
7.  crear la funcion principal startCodify
    1.  Pedimos y guardamos el user rol en un variable
    2.  pedimos y guardamos el mensaje de usuario en un variable
    3.  si el rol es "encode"
        1. mostrar con un alert el mensaje codificado
        2. enseñar que podemos guardar el resultado en una variable
        3. que pasa si ponemos la llamada directamente en el console.log
    4.  añadir alert de bienvenida
    5.  añadir alert de despedida
    6.  implementar la opcion para continuar
        1. añadir un confirm
        2. anadir un do while
