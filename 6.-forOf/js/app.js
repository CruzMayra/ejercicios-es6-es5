                            // ES5

// declara la variable
// escribe tu funcion

/*function averageArray(array){
  var totalSum = 0;
  for(var i = 0; i < array.length; i++){
    totalSum += array[i]
  }
  var average = totalSum / array.length
  return 'El promedio de este arreglo es: ' + average
}*/

                              //ES6
// Comenta todo lo anterior y escribelo en ES6
// declara la variable
// escribe tu funcion

const averageArray = array => {
  let totalSum = 0;
  for(let value of array){
    totalSum += value;
  }
  return `El promedio de este arreglo es: ${totalSum / array.length}`
}
