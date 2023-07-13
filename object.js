const studentName={
    firstName:"sheshi",
    secondName:"varma",
    Age:23,
    NativePlace:"Telangana",
    studentDetails:{
     computterscience:80,
     maths:75
    }
}
//reteriving a specific property value  from object
console.log(studentName.NativePlace);
console.log(studentName['Age']);
const{...rest}=studentName
console.log(rest);
//Update the value of a specific property in an object:
studentName.firstName="sheshank";
console.log(studentName["firstName"]);
studentName.studentDetails.computterscience=85
console.log(studentName.studentDetails['computterscience']);
//Add a new property to an existing object:
studentName.phoneNumber=9676228079
console.log(studentName);
//Delete a property from an object:
delete studentName.phoneNumber
console.log(studentName);
//Iterate over the properties of an object and perform an action for each property:
for(let key in studentName){
    console.log(key+" :" +studentName[key]);
}
//Check if a property exists in an object:
console.log(studentName.hasOwnProperty('maths'));
console.log('NativePlace' in studentName);
console.log('phoneNumber' in studentName);
//Access nested properties in an object:
console.log(studentName.studentDetails.maths);
console.log(studentName.studentDetails['computterscience']);
//object manipulation methods
//1)object.keys
const obj=Object.keys(studentName)
console.log(obj);
//2)object.values
const a=Object.values(studentName)
console.log(a);
//3)object.entries
const b=Object.entries(studentName)
console.log(b.flat().toString().split(',').join('&'));
