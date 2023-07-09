//counting number of characters in a string without any pre-defined methods 
function counting(a){
    var count=0;
  for(i=0;a[i]!=undefined;i++){
      count+=1;
     
  }
  return count;
}
console.log(counting("Sheshank"));
console.log(counting("Good Morning"));


//counting no of vowels

function countingvowels(a){
    
    count=0;
  for(i=0;i<a.length;i++){
      
    if (a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'||a[i]=='u')  {
      count++;
    }
  }
return count;
}
let noOfvowels=countingvowels("This is a program to count no of vowels in a string");
console.log("Total no of vowels in the given word are:"+noOfvowels);
//13 question
function findSecondLargest(array) {
  if (array.length < 2) {
    return null; 
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}
console.log("13)The second largest no is",findSecondLargest([20,65,76,10]));
//14 question
function duplicates(a){
  let anotherarray=[];
  for(i=0;i<a.length;i++){
    if (anotherarray.indexOf(a[i])===-1 ) {
      anotherarray.push(a[i])
    }
  }
  return anotherarray; 
  }

console.log("14)array after removing duplicates:",duplicates([1,5,1,6,5]));


  //15 question
function unique(a){
  let count={}
  for (i = 0; i < a.length; i++) {
    let num = a[i];
    count[num] = (count[num] || 0) + 1;
  }
  for(i=0;i<a.length;i++){
    let num=a[i];
    if(count[num]===1){
      return num
    }
  }
}
console.log("15)array with unique value is:",unique([1,2,1,2,4,5,3,4,5]));
//16 question
function nooftimes(char,str){
  let count=0;
  for(i=0;i<str.length;i++){
    if(str[i]==char){
      count++;
    }
  }
  return count
}
console.log("16)the no of times character appears in string is",nooftimes("h","sheshank"));
//17 question
function countingvowels(a){
  let vowels= /[aeiou]/gi;
  let b = a.match(vowels);
  return b ? b.length : 0;
}
console.log("17)the no of vowels in the given word are:",countingvowels("Sheshank"));
//18question
function reversecase(a){
  let reversestr='';
  for(i=0;i<a.length;i++){
    let ch=a[i]
    if(ch.toLowerCase()===ch){
      reversestr+=ch.toUpperCase()
    }else if (ch.toUpperCase()===ch){
        reversestr+=ch.toLowerCase()
    }else{
      reversestr+=ch;
    }
  }
    return reversestr;
  
}
console.log("18)string after converting is:",reversecase("Happy Birthday"));
//19 question
let c=5;
function multiplyby2(c){
  for(i=1;i<=c;i++){
    console.log("19)After multiplying by 2 is",(i*2));
  }
}
multiplyby2(c);
//20 question
function typeeof(a){
  return typeof(a)
}
console.log("20)type of given is",typeeof(600));
//21 question
function greatestofthree(a,b,c){
  let greatest=a>b?(a>c?a:c):(b>c?b:c);
  return greatest
}
console.log("20)the greatest of all three numbers is",greatestofthree(10,30,20));
//24 question
function printPattern(a) {
  for ( i = 1; i <= a; i++) {
    let  pattern = '';
    for (j = 1; j <= i; j++) {
      pattern += j + ' ';
    }
    console.log("24)",pattern);
  }
}
printPattern(5);


