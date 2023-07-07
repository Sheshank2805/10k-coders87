let a=[0,1,2,3,4]
a.push(13);
console.log(a);
// function pushhh(abc){
//     a[a.length]=abc
//     return a;  
// }
// console.log("Array after pushing is",pushhh(33));
a.push(87,56)
console.log("Array after pushing is",a);
a.pop();
console.log("Array after pushing using push method",a);
//task on pop function without using pop method
function popoo(){
    let lastelement=a.length-1;
    a.length=lastelement;
    return a;
}
console.log("array after pop using a function is",popoo());
a.shift()
console.log("array after shifting:",a)
a.unshift(45,46,86)
console.log("Array after unshifting is:",a);
a.splice(3,0,87,88,"hello");
console.log("Array after splice without removing any element but adding in middle",a);
a.splice(0,3,87,88,"hello");
console.log("Array after splice with removing  elements adding in middle",a);
a.slice(5,9);
console.log("array after slicing is",a.slice(5,9));
let b=[[5,4,[6]],[9,8,5],[7,6,5]];
console.log("Array after flat is",b.flat());
let c=[5,8,8,9]
console.log("Array after to string",c.toString());
console.log("String joined with & is",c.join("&"));
console.log("string is converted into array using split",c.join("&").split("&"));
console.log(Array.isArray(a));
console.log(Math.PI);
console.log(Math.round(4.6));
console.log("round",Math.round(4.4));
console.log("after ceil",Math.ceil(4.1));
console.log("after floor",Math.floor(6.9));
console.log("after trunc",Math.trunc(7.7));
console.log("random",Math.random());
console.log("squareroot of 576 is",Math.sqrt(576));
console.log("3 power of 16 is",Math.pow(3,16));
console.log("absolute value",Math.abs(-634.66));
//Otp generating task
let otp=Math.floor(Math.random()*10001)
console.log("your generated otp is:",otp);
