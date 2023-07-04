let a="Apple,Banana"
//slice method
console.log(a.slice(0,5));
console.log(a);
console.log(a.slice(-12,-6));
console.log(a.slice(4));
console.log(a.slice(-12,4));
//substring method
console.log(a.substring(0,5));
console.log(a.substring(6,12));
console.log(a.substring(8));
console.log(a.substring(-7,-4));
console.log(a.substring(-12,5));
//substr method
console.log(a.substr(0,5));
console.log(a.substr(5,5));
console.log(a.substr(-6));
console.log(a.substr(-3));
//replace method
console.log(a.replace("p","b"));
console.log(a.replace("a","b"));
console.log(a.replace(/a/i,"b"));
console.log(a.replace(/a/ig,"b"));
console.log(a);
let b="Apple,  Banana"
console.log("string after removing spaces in middle:",a.replace(/\s+/g,""));
//trim()method
let c=" orange,grapes  "
console.log(c.trim ());
console.log(c.trimStart());
console.log(c.trimEnd());
//touppercase
console.log(c.toUpperCase());
//to lowercase
console.log(c.toLowerCase());
// concat method
console.log(c+b);
console.log(`${a} ${c.trimStart()}`);
console.log("string after concatination using concat method:",a.concat(b));
//charAt() method
console.log("returing character using charAt method:",a.charAt(6));
//charCodeAt() method
console.log("returing the asci value of a character using charCodeAt method:",c.charCodeAt(7));
//padstart padend methods
let n=6;
let text=n.toString();
console.log(text.padEnd(4,"0"));
console.log(text.padStart(4,"0"));
//split method()
console.log(c.split(","));
let d="sheshi$varma"
console.log("string after converting into array using split method:",d.split("$"));
let x="  Ameri  ca  desi  confused   it reflects "
console.log("string before removing spaces is:",x);
console.log("string after removing empty spaces at start and end using trim method:",x.trim());
console.log("string after removing spaces in between:",x.replace(/\s+/g,""));