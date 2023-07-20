//4 question
const students = [
  { name: "ram", notes: [3, 5, 4] },
  { name: "sunny", notes: [4, 5, 5] },
  { name: "Saketh", notes: [] }
];
function calculateAvgNotes(students) {
  return students.map((student) => {
    const avgNote = student.notes.length > 0 ? calculateAverage(student.notes) : 0;
    return {
      name: student.name,
      avgNote: avgNote
    };
  });
}


function calculateAverage(notes) {
  const sum = notes.reduce((total, Value) => total+Value, 0);
  return sum / notes.length;
}
console.log("4)the array after calculating avg no of notes is",calculateAvgNotes(students));
//12 question
function subsequencearr(subseqarr,arr){
  let subseqarrIndex=0
  for(i=0;i<arr.length;i++){
    if(arr[i]===subseqarr[subseqarrIndex]){
      subseqarrIndex++;
    }
    if(subseqarrIndex===subseqarr.length){
      return true;
    }
  }
  return false
}
const arr=[ 5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
 const subseqarr1 = [7, -1, 5, -3]
 const subseqarr2=[7, -1, 4, -3];
 const subseqarr3=[-1]
 const subseqarr4=[13, -3, 4, 1 ]
 console.log("12)Result is",subsequencearr(subseqarr1,arr));
 console.log("12)Result is",subsequencearr(subseqarr2,arr));
 console.log("12)Result is",subsequencearr(subseqarr3,arr));
 console.log("12)Result is",subsequencearr(subseqarr4,arr));
//Hard questions
//1 question
function toCamelCase(n) {
  const words = n.split(/[-_]/);
  let output = words[0];
  
  for (let i = 1; i < words.length; i++) {
    const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    output += capitalizedWord;
  }
  
  return output;
}
console.log("1)The word after removing -_ is",toCamelCase("good_morning"));
console.log("1)The word after removing -_ is",toCamelCase("good-morning"));
console.log("1)The word after removing -_ is",toCamelCase("the-stealth-warrior"));
console.log("1)The word after removing -_ is",toCamelCase("The_Stealth_Warrior"));