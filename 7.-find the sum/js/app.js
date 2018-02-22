                // ES5

// Escribe tu código aquí....
/*function findSum(array, number){
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[j] === number - array[i]){
        return [array[i], array[j]]
      }
    }
  }
}*/

                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6
const findSum = (array, number) => {
  for(let value of array){
    for(let item of array){
      if(item === number - value){
        return [value, item]
      }
    }
  }
}
