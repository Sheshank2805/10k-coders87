//1 ques
function sum(a,b){
    return a+b;
  }
  console.log("1)the sum of two numbers is",sum(43,65));
  //2 ques
  function seconds(min){
    return min*60;
  }
  console.log("2)No of seconds in given minutes is",seconds(60));
  //3question
  function increment(n){
    return n+1;
  }
  console.log("3)the given value incremented by 1 is",increment(560));
  //4 question
  function days(years){
    return years*365;
  }
  console.log("4)Age in days is:",days(23));
  //5 question
  function power(v,i){
    return v*i;
  }
  console.log("5)power in watts is ",power(9,0.9));
  //7 question
  function check(a,b){
    return a==10||b==10||a+b==10
  }
  console.log("7)the result of given values is",check(10,7));
  //8 question
  function charactercheck(a,b){
    return(a.length-1==b.length-1)
  }
  console.log("8)the result after checking is",charactercheck("Sheshank","ramnayak"));
  
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
  var a=[2,2,65,4,65,7,8,1]
  let aa=[]
  for(i=a.length;i>0;i--){
      if(a[i]!=a[i-1]){
          console.log(a[i-1]);
  aa.push();
  
       }
   }
   console.log(aa);
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
      if (anotherarray.indexOf(a[i]) === -1) {
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
  
  //whether a number is prime or not 26 ques
  function checkprime(n){
    if(n<2){
      return null;
    }
    if(n==2){
      return "the given no is prime"
    }
    if(n%2!=0){
      return  "26)the given no is prime"+ " " + n ;
    }else{
    return "26)the given no is not prime"+" "+n;
    }
  }
  console.log(checkprime(12));
  //factorial of a num 22 ques
  
  function fact(a){
    if(a==0||a==1){
      return 1;
    }
    let result=1;
    for(i=2;i<=a;i++){
      result*=i
    }
    return result;
  }