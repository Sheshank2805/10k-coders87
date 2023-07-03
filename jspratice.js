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
debugger
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
