//3 question
const people = [
  { name: "ram", budget: 20000 },
  { name: "shyam", budget: 30000 },
  { name: "kiran", budget: 15000 },
  { name: "vamshi", budget: 25000 }
];
function sumBudgets(people) {
  const totalBudget = people.reduce((acc, person) => acc + person.budget, 0);
  return totalBudget;
}

console.log("3)total budget",sumBudgets(people));
//9 question
let e;
let q=[2,5,6,2,22,67,5,8,6,22]
for(i=0;i<q.length;i++){
    for(j=i+1;j<q.length;j++){
        if(q[i]<q[j]){
            e=q[i]
            q[i]=q[j]
            q[j]=e
        }
    }
}
console.log("array after sorting in descending order is",q);
for(k=0;k<q.length-1;k++){
  if(q[k]!=q[k+1]){
    console.log("9)array after sorting and removing duplicates is",q[k]);
  }
}
//11 question
let k
let t=[2,5,6,2,22,5,8,6,22]
for(i=0;i<t.length;i++){
    for(j=i+1;j<t.length;j++){
        if(t[i]>t[j]){
            k=t[i]
            t[i]=t[j]
            t[j]=k
        }
    }
}
console.log("array after sorting in ascending order is",t);
for(k=0;k<t.length-1;k++){
  if(t[k]!=t[k-1]){
    console.log("11)array after sorting and removing duplicates is",t[k]);
  }
}
//13 question
function sumOfUniqueNumbers(arr) {
  let uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (uniqueNumbers.indexOf(currentNum) === -1) {
      uniqueNumbers.push(currentNum);
    }
  }

  let sum = 0;
  for (let i = 0; i < uniqueNumbers.length; i++) {
    sum += uniqueNumbers[i];
  }

  return sum;
}

console.log("13)the sum of unique numbers is",sumOfUniqueNumbers([1,2,4,2,1,5,4,6,4,7,5]));  
//10 question
function removeBrackets(expression) {
  let newExpression = '';

  for (let char of expression) {
    if (char === '(' || char === ')') {
      continue;
    }
    newExpression += char;
  }

  return newExpression;
}
let expression = '2 * (3 + 5) - (4 / 2)';
let result = removeBrackets(expression);
console.log("10)The expression after removing brackets is",result);
//5 question
function captofront(word){
let capitalLetters='';
let lowercaseLetters='';

for (let i = 0; i < word.length; i++) {
  let currentChar = word[i];
  if (currentChar >= 'A' && currentChar <= 'Z') {
    capitalLetters += currentChar;
  } else {
    lowercaseLetters += currentChar;
  }
}

return capitalLetters + lowercaseLetters;
}
console.log("5)The word after moving all capital letters to front is",captofront("shOrtCAKE"));
//8 question
function MostCommonTwoCharacters(str) {
  let combinations = {};
  let mostCommon = '';
  let maxCount = 0;

  for (let i = 0; i < str.length - 1; i++) {
    let pair = str[i] + str[i + 1];
    combinations[pair] = (combinations[pair] || 0) + 1;
    
    if (combinations[pair] > maxCount) {
      mostCommon = pair;
      maxCount = combinations[pair];
    }
  }

  return mostCommon;
}
console.log("8)Most common characters in given string are",MostCommonTwoCharacters("goodmorning"));


