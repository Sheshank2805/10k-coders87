//31 question
function addelement(d){
  d.splice(5,0,6)
  return d
}
console.log("Array after adding element at 5 index",addelement([1,2,3,4,5,7,8,9]));
//32 question
function reversednum(num){
  let reversenum=0
  while(num!=0){
    let digit=num%10;
    reversenum=(reversenum*10)+digit;
    num=(num-digit)/10
  }
  return reversenum
}
console.log("32)number after reversing is",reversednum(12345));
//33 question
let count=0
function noofoccurences(arr,n){
  for(i=0;i<arr.length;i++){
   if(arr[i]===n){
    count++
   }
  }
  return count
}
console.log("33)no of ocurences is",noofoccurences([1,2,3,4,5,6,7,7,8,9],7));

//medium level question
//1 question
function objectToArray(obj) {
  return Object.entries(obj);
}
const myObject = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log("1)Object after converting into array is",objectToArray(myObject));
//2 question
function multiplies(num,length){
  let result=[];
  for(i=1;i<=length;i++){
    result.push(num*i)
  }
  return result;
}
console.log("2)multiplies of given number are",multiplies(8,6));
//7 question
function LongestString(str) {
  let longestString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longestString.length) {
      longestString = str[i];
    }
  }
  return longestString;
}
console.log("7)the longest string in given array of strings is",LongestString(["Banana","Mango","starfruit","Grapes"]));
//6 question
function countnoofOccurrences(nums) {
  const occurrences = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (occurrences[num]) {
      occurrences[num]++;
    } else {
      occurrences[num] = 1;
    }
  }
  return occurrences;
}
console.log("6)No of occurences of each number is",countnoofOccurrences([1,2,3,2,1,4,6,4,2,6,5,3,4,7,6]));
