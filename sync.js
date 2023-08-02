let student1={
    name:"a",
    charging:50,
    chargeMobile:function(value,value1){
        this.charging=value+value1
    }
}

let student2={
    name:"b",
    charging:50,
}
let student3=student1.chargeMobile.bind(student2)
student3(30,40)
console.log(student2);

let arrayOfStudents=[
    {
        name:"c",
        charging:40
    },
    {
        name:"d",
        charging:50 
    },
    {
    name:"e",
        charging:60
    },
    {
        name:"f",
            charging:70
        }
    ];

    // let forStud = function (value, value1) {
    //     this.charging += value + value1; // Add the values to the current charging
    // };
    
    // arrayOfStudents.forEach(student => {
    //     forStud.call(student, 40); // Call forStud on each student with arguments 40 and 50
    // });
    
    // console.log(arrayOfStudents);

let forStud=()=>{
    student1.chargeMobile.call(arrayOfStudents,40,50)
}
arrayOfStudents.forEach(forStud)
console.log(arrayOfStudents);

console.log("line 1");
console.log("line 2");
console.log("line 3");
Sum()
console.log("line 4");
function Sum(){
let result=0
for(i=0;i<100000;i++){
    result+=i
    console.log(result);
}
}