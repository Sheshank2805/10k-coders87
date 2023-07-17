const studentDetails={
    name:"Sheshank",
    Age:23,
    nativePlace:"warangal"
}
//object.seal() method
Object.seal(studentDetails)
studentDetails.name="sheshankvarma"
studentDetails.profession="student"
console.log(studentDetails);
//object.frezee() method
Object.freeze(studentDetails)
studentDetails.name="Sheshank"
console.log(studentDetails);
//shallow copying
const employeeDetails={
    name:"Sheshank",
    Role:"React developer",
    salary:25000,
    Age:23
}
const employeeDetails1=employeeDetails
employeeDetails1.salary=30000
console.log(employeeDetails);
//deep copying
const employeeBio={
    name:"RAM",
    Role:"React developer",
    salary:25000,
    Age:23
}
const employeeBio1=employeeBio
const deepcopy=JSON.parse(JSON.stringify(employeeBio));
employeeBio1.salary=32000
console.log(employeeBio1);
console.log(deepcopy);
//pattern questions

function printPattern(n) {
    for ( i = 1; i <= n; i++) {
      let  pattern = '';
      for (j = 1; j <= i; j++) {
        pattern += j + ' ';
      }
      console.log(pattern);
    }
  }
  printPattern(5);
 //downward triangle
 function printPattern(n) {
    for ( i = 5; i >= n; i--) {
      let  pattern = '';
      for (j = 5; j <= i; j--) {
        pattern += j + ' ';
      }
      console.log(pattern);
    }
  }
  printPattern(5); 
  //reverse printing numbers of triangle
  function printPattern(n) {
    for ( i = 5; i <= n; i--) {
      let  pattern = '';
      for (j = 5; j >= i; j--) {
        pattern += j + ' ';
      }
      console.log("24)",pattern);
    }
  }
  printPattern(5);
  
