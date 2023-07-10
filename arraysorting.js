let a=[20,30,70,1,3,5,7,80]
console.log(a.sort(sorting));
function sorting(a,b){
    return a-b;
}
let b=["Carrot","Kiwi","Starfruit","Apple"]
console.log(b.sort());
//second largest number in array
// let c=[1,5,4,70,72,54,36]
// let aa=[]
// for(i=c.length-1;i<0;i--){
//     if(c[i]!=c[i-1]){
//         console.log(c[i-1]);
//         aa.push(c[i-1])
//     }
// }
// console.log(a);
//Array length using map method
let c=[1,4,5,6,8,9,10,-1,-2,-3]
let d=c.map(lengthh)
    function lengthh(value,index,array){ 
let count=0;
count=index+1;
return value,count;
}
console.log("array length using map method is",d);
//Array length using for each method
let e=[1,4,5,6,8,9,10,-1,-2]
let g=e.forEach(lengthhof)
    function lengthhof(value,index,array){ 
let f=0
f=index+1;
console.log("Array length using foreach method is",f);
    }
//array length using filter method
let arr=[1,3,4,5,7,8,9,-2,-7,-70]
let h=arr.filter(lengthhat)

function lengthhat(value,index,array){
    return size=index+1
}
console.log("Array length using filter method is",h);
//array length using find method

let w=[1,3,4,5,7,8,9,-2]
let k=w.find(lengthhon)
function lengthhon(value,index,array){
    let width=index+1
    console.log("array length using find method is",width);
}
//  console.log("array length using find method is",k)

