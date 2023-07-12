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
//23 question
let f;
let d=[2,5,6,2,22,67,5,8,6]
for(i=0;i<d.length;i++){
    for(j=i+1;j<d.length;j++){
        if(d[i]>d[j]){
            f=d[i]
            d[i]=d[j]
            d[j]=f
        }
    }
}
console.log("23)sorting of array in ascending order using loops",d);
//25 question
debugger
function calculatePower(b, e) {
  let result = 1;

  if (e >= 0) {
    for (i = 0; i < e; i++) {
      result *= b;
    }
  } else {
    return "enter valid input";
  }

  return result;
}
console.log("25)the power of given numbers is",calculatePower(3,5));
