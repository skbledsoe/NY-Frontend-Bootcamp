//Control Flow Structures
//Conditional Statements

//Conditional `if`

//if statement
let age = 18;
if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("You can't vote yet :(")
}


// if..else statement
let temperature = 90;

if (temperature >= 70) {
  console.log("It's hot outside");
} else if (temperature >= 50) {
  console.log("It's very pleasant outside");
} else if (temperature >= 40) {
  console.log("It's quite chilly outside");
} else {
  console.log("It's pretty cold outside");
}


//Conditionals: Switch Statement
let day = "THURSDAY";

switch (day.toLowerCase()) {
  case "monday":
    console.log("It's the first workday of the week");
    break;
  case "tuesday":
  case "wednesday":
  case "thursday":
    console.log("It's the middle of the week");
    break;
  case "friday":
  case "saturday":
  case "sunday":
    console.log("It's the weekend");
}


