const myNumber = 3;

//El resultado esperado es 3! -> 3*2*1 = 6

const getFactorial = (number) => {
  if (number == 0) {
    return 1
  } else {
    return number * getFactorial(number - 1);
  }
}

console.log(getFactorial(myNumber));
