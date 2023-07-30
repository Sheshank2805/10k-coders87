



// VAR : EVERY DECLARATION PUSHES TO TOP OF JS FILE 



// let a=4;
// let b=3;


// let c=5;
// let d=10;


// let s=4;
// let k=20;




//function with default parameters
let result=addOfTwoNumbers(2,4)

function addOfTwoNumbers(z=1,y=2){

    // console.log(z,y)
    return z+y
}



// console.log(result)

// Function expression 

let userDefinedFunc=function(a,b){

    console.log("anonymous function usage")

    return a+b
}

// console.log(a,b)

// console.log(userDefinedFunc(2,3))


// self invoke(calling) functions

// (
//     function(){
//     console.log("self invoke")
// }
// )()


// (function(){
//     console.log("self invoke")
// })()

// (function() {
//     const message = "Hello, I am inside an IIFE!";
//     console.log(message)
//   })();



// REGULAR FUNCTION : 1990
// ES---> ECMA STANDARD

// Arrow functions   //ES-6 FEATURES  //AFTER 2015

//no function keyword //mandatory 
// no implicit return keyword  //optional



//REGULAR FUNCTION 
function addOfTwoNumbers(z,t){
    return z+t
}
console.log(addOfTwoNumbers(2))


function regularFunc(){
 
    console.log(arguments)
}

regularFunc(1,2,3)



//ARROW FUNCTION

let ArrowFunction = (a,b) => a+b
console.log(ArrowFunction(2,3))

let arrFunc=(...values)=>{
 
    console.log(values)
}
arrFunc(1,2,3)




// let mapArr=a=>a*a

let results=["sai","ram","kiran"].map(a=>{

    for(var i=0;i<=3;i++){

        console.log(a)
    }
    // return "sai"
})


console.log(results)













// ES-13


// ES-1,ES-2,ES-3




  



// annonymous function : with out name

// 1. events
// 2. Function expression 




















