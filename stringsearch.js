let a="Sheshank"
console.log(a.indexOf("s"));
console.log(a.indexOf("s",1));
console.log(a.lastIndexOf("s"));
console.log(a.lastIndexOf("s",2));
console.log(a.lastIndexOf("S",2));
console.log(a.includes("han"));
console.log(a.includes("hans"));
console.log(a.includes("han",4));
console.log(a.match("s"));
console.log(a.match(/s/ig));
console.log(a.match("b"));
console.log(a.search("e"));
console.log(a.startsWith("a",5));
console.log(a.endsWith("k"));
//first task
let b=prompt("Enter Your Phone Number:");
if(b.startsWith("6") && b.length==10){
    alert("You Have Entered A valid Indian Phone Number");
}else if(b.startsWith("7") && b.length==10){
    alert("You Have Entered A valid Indian Phone Number");
}else if(b.startsWith("8") && b.length==10){
    alert("You Have Entered A valid Indian Phone Number");
}else if(b.startsWith("9") && b.length==10){
    alert("You Have Entered A valid Indian Phone Number");
}else{
    alert("You Have Entered A invalid Number")
} 
//second task
let c=prompt("Enter Your Email Id:")
if(c.endsWith("@gmail.com")){
    alert("You Have Entered A Correct Email id")
}else{
    alert("You Have Entered incorrect Email Id")
}
//Thrid task
let d="28-05-2000";
let e=prompt("Enter your Date of Birth:")
if(e<=d){
    alert("You Have Entered Correct DOB")
}else{
    alert("You Have entered Incorrect DOB")
}

