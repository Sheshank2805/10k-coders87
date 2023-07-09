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

 

