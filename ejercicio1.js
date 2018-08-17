const myArray = [5, 2, 3, 50, 5, 15, 7, 2, 9, 70, 11, 2, 13, 50, 15, 23];

function arrayChecker(arr, num) {
  const arrLength = arr.length;
  const arrMax = Math.max(...arr);
  const arrMin = Math.min(...arr);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const arrMedia = arr.reduce(reducer) / myArray.length;
  const numberToCheck = 2;
  const occurrences = (arr, value) => {
    return arr.filter(v => (v === value)).length;
  }
  console.log(`La longitud del array es ${arrLength}`);
  console.log(`El numero mas grande del array es ${arrMax}`);
  console.log(`El numero mas pequenyo del array es ${arrMin}`);
  console.log(`La media de la suma del array es ${arrMedia}`);


  const numberOfOccurrences = occurrences(myArray, numberToCheck);
  if (numberOfOccurrences === 0) {
    console.log(`El numero ${numberToCheck} no aparece en el array`);
  } else if (numberOfOccurrences === 1) {
    console.log(`El numero ${numberToCheck} aparece ${numberOfOccurrences} vez en el array.`)
  } else {
    console.log(`El numero ${numberToCheck} aparece ${occurrences(myArray, numberToCheck)} veces en el array`);
  }
}

arrayChecker(myArray);