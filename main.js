function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0 ? true : false
}

function halfSquare(num) {
  return num **2/2
}

function isLong(str) {
  return str.length >= 15 ? true : false;
}

function exclaim(str) {
  if(str[str.length -2] !== '!') {
    return str.includes ('!') ? str : str + '!';
  } else {
    for (let i = 0; i < str.length -1; i ++) {
      if (str[i].includes('!')) {
        return str.slice(0, i + 1);
      }
    }
  }
}

function countWords(str) {
  let arr = str.split(' ');
  return arr.length;
}

function containsDigit(str) {
  const numbers = '54321';
  for (let i = 0; i < str.length; i ++) {
    if (numbers.includes(str[i])) {
      return true;
    }
  }
  return false;
}

function containsLowerCase(str) {
  const lowerCasePhrase = 'everyletterislowercase'
  for(let i = 0; i<str.length; i++){
    if (lowerCasePhrase.includes(str[i])){
      return true;
    }
  } return false;
}

function containsUpperCase(str) {
  const upperCaseAbcs = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'
  for(let i = 0; i<str.length; i++){
    if (upperCaseAbcs.includes(str[i])){
      return true;
    }
  } return false;
}

function containsNonAlphanumeric(str) {
  const nonNumsOrLetters = '!@#$%^&*()- '
  for(let i = 0; i< str.length; i++){
    if (nonNumsOrLetters.includes(str[i])){
      return true;
    }
} return false;
}

function containsSpace(str) {
  for (let i = 0; i < str.length; i ++) {
    if (str[i] === ' ') {
      return true;
    }
  }
  return false;
}

function digits(nums) {
  let newArr = [];
  let str = nums.toString()
  let arr = str.split('')
  for(let i = 0; i < arr.length; i ++){
    if (isNaN(arr[i]) === false)
    newArr.push(Number(arr[i]))
  }
  return newArr
}

function truncate(str) {
  if (str.length >= 15) {
    return str.slice(0, 8) + '...';
  }
  return str;
}

function isValidPassword(str) {
  if (containsNonAlphanumeric(str) === true
  && containsUpperCase(str) === true 
  && containsLowerCase(str) == true 
  && containsSpace(str) === false
  && containsDigit(str) === true ){
    return true;
  }
  return false;
}

function onlyPunchy(arr) {
  const newArr = [];
  const finalArr = [];
  for (let i = 0; i < arr.length; i ++) {
    newArr.push(exclaim(arr[i]))
    if(isLong(newArr[i]) === false) {
      finalArr.push(newArr[i])
    }
  }
  return finalArr;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}