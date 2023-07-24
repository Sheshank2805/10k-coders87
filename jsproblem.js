//2 question
function StringsContainingNumbers(arr) {
  return arr.filter((str) => /\d/.test(str));
}
console.log("2)the array contaning numbers is",StringsContainingNumbers(["1a", "a", "2b", "b"]));
console.log("2)the array contaning numbers is",StringsContainingNumbers(["abc","xyz","uvw"]));
//2 question
function StringsContainingNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (containsNumber(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

function containsNumber(str) {
  return /\d/.test(str);
}
console.log("2)the array contaning numbers is",StringsContainingNumbers(["1a", "a", "2b", "b"]));
console.log("2)the array contaning numbers is",StringsContainingNumbers(["abc","xyz","uvw"]));
//3 question
function weeklySalary(hours) {
  const weekdayRate = 10;
  const weekdayOvertimeRate = 15;
  const weekendRate = 20;

  let totalSalary = 0;

  for (let i = 0; i < hours.length; i++) {
    if (i < 5) {
      if (hours[i] <= 8) {
        totalSalary += hours[i] * weekdayRate;
      } else {
        const overtimeHours = hours[i] - 8;
        totalSalary += (8 * weekdayRate) + (overtimeHours * weekdayOvertimeRate);
      }
    } else { 
      totalSalary += hours[i] * weekendRate;
    }
  }

  return totalSalary;
}
console.log("3)The Weekly Salary of an worker is",weeklySalary([8,8,8,8,8,0,0]));
console.log("3)The Weekly Salary of an worker is",weeklySalary([8,8,8,6,8,10,10]));
//4 question
function stringtoobject(encodedString) {
  const data = encodedString.split('0');
  const firstName = data[0];
  const lastName = data[1];
  const id = data[2];
  
  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
}
console.log("4)The string afterr converting into object",stringtoobject("John000Doe000123"));
console.log("4)The string afterr converting into object",stringtoobject("michael0smith004331"));
console.log("4)The string afterr converting into object",stringtoobject("Thomas00LEE0000043"));