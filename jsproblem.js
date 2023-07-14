//27 question
function lcm(num1,num2){
  let d=num1>num2?num1:num2;
  let l=d;
  while(true){
    if(l%num1===0 && l%num2===0){
      break;
    }
    l=+d;
  }
  return l;
}
console.log("27)the lcm of given no is",lcm(12,18));
//28 question
function AlphabetWithNumbers() {
  for ( i = 0; i < 26; i++) {
    let  letter = String.fromCharCode(65 + i);
    let number = i + 1;
    console.log(letter + ' - ' + number)
  }
}

AlphabetWithNumbers();
//29 question
function MissingNumber(n, a) {
  let sumOfNumbers = (n * (n + 1)) / 2;
  let sumOfArray = 0;

  for ( i = 0; i < a.length; i++) {
    sumOfArray += a[i];
  }

  let missingNumber = sumOfNumbers - sumOfArray;
  return missingNumber;
}
console.log("29)the missing number is:",MissingNumber(6,[1,4,5,7,3]));
//30 question
function countVowelsAndConsonants(str) {
  let vowels = [/'a', 'e', 'i', 'o', 'u'/i];
  let vowelCount = 0;
  let consonantCount = 0;

  for (i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }

  return { vowels: vowelCount, consonants: consonantCount };
}

let inputString = "Good morning";
let counts = countVowelsAndConsonants(inputString);
console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);
