// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas).
// Se eliminan las variables arriba mencionadas para correr las pruebas en Jasmine (abrir index.html)

                                // ES5

// declara las variables ES5
// declaración de la funcion

/* function square(array) {
  return array.filter(function(item) {
    return item > 0
  })
  .map(function(item) {
    return item * item
  })
}*/
                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6
// declara variables (let-const)
// declara la funcion y ejecuta el código

const square = array => {
  return array.filter(item => item > 0)
  .map(item => item * item)
}

// ejecuta la funcion
