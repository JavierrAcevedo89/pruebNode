'use strict'

//Imprime en pantalla
console.log('Hola mundo desde Node.js, esto se verá en la terminal de comandos')

//Hacemos una operación básica
console.log(2*5)

//Al utilizar una instrucción de js frontend marca error en node js
console.log(window)

//Imprime en consola todo lo relacionado con el módulo local
console.log(global)

//Realizmos una función para imprimir cada segundo 'hola nodejs'
setInterval(function(){
    console.log('hola nodejs')
},1000)