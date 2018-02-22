                // ES5

// Escribe tu código aquí....
/*function findSum(array, number){
  for(var i = 0; i < array.length; i++){
    for(var j = i; j < array.length; j++){
      if(array[j] + array[i] === number ){
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
      if(item + value === number){
        return [value, item]
      }
    }
  }
}
