//6 question
function joinwithspace(a){
    return "something"+"  "+ a;
}
console.log("6)something joined with space and argument is::",joinwithspace("Fishy"));
//9 question
let good='';
good=(greeting)=>"good"+greeting;
console.log("9)returns greeting with arrow function:",good("morning sheshank"));
//10 question
function phonenumber(num){
    let a=num.slice(0,3).join('');
    let b=num.slice(3,6).join('');
    let c=num.slice(6).join('');
    return `(${a}) ${b}-${c}`;

}
let num=[0,1,5,7,6,4,2,9,3,8]
console.log("11)The formatted phone number is:",phonenumber(num));
//array sorting
// var a=[2,2,65,4,65,7,8,1]
// let aa=[]
// for(i=a.length;i>0;i--){
//     if(a[i]!=a[i-1]){
//         console.log(a[i-1]);
//         aa.push();

//     }
// }
// console.log(aa);
//11 question

function sorttarr(str){
    return str.sort(function (a,b){
    return a.length-b.length; 
});
}
console.log("11)Array of strings after sorted by length in ascending order",sorttarr(["aaa","b","cd","banana","leaf"]))
//12 question
function largeno(arras){
const  largernums=[];
for(i=0;i<arras.length;i++){
    let larnumr=arras[i][0];
for(j=1;j<arras[i].length;j++){
    let prenums=arras[i][j];
if(prenums>largernums){
    larnumr=prenums;

}
}
largernums.push(larnumr);
}
return largernums
}
console.log("12)The largest numbers of three arrays is",largeno([[5,9,12],[6,15,17,21],[36,16,49]]));

//13 question
function findSecondLargest(array) {
  if (array.length < 2) {
    return null; // Return null if the array has less than 2 elements
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

