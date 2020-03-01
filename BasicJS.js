/* LESSON 1 */
// I like all of my boogers
/* You should eat yours
  as well  */

/* Lesson 2 */
// Example
var myName;

/* Lesson 3 */
// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

/* Lesson 4 */
// Example
var ourVar = 19;

// Only change code below this line
var a = 9;

/* Lesson 5 */
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

/* Understanding case sensitivity in variables */
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* Add Two Numbers with JavaScript */
var sum = 10 + 10;

/* Subtract One Number from Another */
var difference = 45 - 33;

/* Multiply Two Numbers */
var product = 8 * 10;

/* Divide One Number by Another */
var quotient = 66 / 33;

/* Increment a Number */
var myVar = 87;

// Only change code below this line
myVar++;
// So, using ++ is the same as myVar = myVar + 1;

/*Decrement a Number*/
var myVar = 11;

// Only change code below this line
myVar = myVar - 1;
// Or:
myVar--;

/* Create Decimal Numbers */
var ourDecimal = 5.7;

// Only change code below this line
var myDecimal = 5.7;

/* Multiply Two Decimals */
var product = 2.0 * 2.5;

/* Divide One Decimal by Another */
var quotient = 4.4 / 2.0; //Fix this line

/* Finding a Remainder */
//Only change code below this line

var remainder = 11 % 3;

/* Compound Assignment With Augmented Addition */
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a = a + 12;
b = 9 + b;
c = c + 7;

// Is the same as....
a += 12;
b += 9;
c += 7;

/* Compound Assignment With Augmented Subtraction */

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;

// Is the same as...

a -= 6;
b -= 15;
c -= 1;

/* Compound Assignment With Augmented Multiplication */
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;

// Is the same as...
a *= 5;
b *= 3;
c *= 10;

/* Compound Assignment With Augmented Division */
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line
a = a / 12;
b = b / 4;
c = c / 11;

// Is the same as...
a /= 12;
b /= 4;
c /= 11;

/* Declare String Variables */
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line
var myFirstName = "Jon";
var myLastName = "Downs";

/* Escaping literal Quotes in Strings */
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; //Change this line
console.log(myStr);

/* Quoting Strings with Single Quotes */
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

/* Escape Sequences in Strings */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr)

/* Concatenating Strings with Plus Operator */
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line
var myStr = "This is the start. " + "This is the end.";

/* Concatenating STrings with the Plus Equals Operator */
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/* Constructing Strings with Variables */
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Jon ";
var myStr = "My name is " + myName + "and I am well!";

/* Appending Variables to Strings */
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "silly";
var myStr = "Learning to code is ";
myStr += someAdjective

/* Find the Length of a String */
//example
var firstNAmeLength = 0;
var firstName = "Ada";

var firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.
var lastNameLength = lastName.length;

/* Use Bracket Notation to Find the First Character in a String */
// example
var firstLetterOfFirstName = "";
var firstName = "Ada";

var firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
var firstLetterofLastName = lastName[0];

/* Understand String Immutability */
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";

/* Use Bracket Notation to Find the Nth Character in a String */
// example
var firstName = "Ada";
var lastName = "Lovelace";

var secondLetterOfFirstName = firstName[1];
// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

/* Use Bracket Notation to Find the Last Character in a String */
var lastLetterOfFirstName = firstName[firstName.length - 1];
// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

/* Use Bracket Notation to Find the Nth-to-Last Character in a String */
// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

/* Word Blanks */
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var sp = " "
var wordBlanks = "The " + myAdjective + sp + myNoun + sp +
 myVerb + sp + myAdverb; // Only change this line;

/* Store Multiple Values in one Variable using arrays */
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Teal", 69];

/* Nest one Array within Another Array */
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["Hi", 69], ["there", "Ada"]];
console.log(myArray)

/* Access Array Data with Indexes */
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.
var myData = myArray[0];

/* Modify Array Data With Indexes */
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.
myArray[0] = 45

/* Access Multi-Dimensional Arrays with Indexes */
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

/* Manipulate arrays with push() */
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3])

/* Manipulate Arrays With pop() */
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

/* Manipulate Arrays With shift() */
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

/* Manipulate Arrays With unshift() */
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35])

/* Shopping List */
var myList = [["Chocolate", 15],
 ["Boogers", 20],
 ["Apples", 50],
 ["Drugz", 8],
 ["Girlz", 1]];

/* Write Reusable JavaScript with Functions */
// example
function ourReusableFunction() {
  console.log("Heyaa, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction(){
  console.log("Hi World")
}
reusableFunction();

/* Passing Values to Functions with Arguments */
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(lul, brosef){
  console.log(lul + brosef)
}
functionWithArgs(0, 1)

/* Global Scope and Functions */
// Declare your variable here


function fun1() {
  // Assign 5 to oopsGlobal Here
  var oopsGlobal = 5;
}
var myGlobal = 10;
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

/* Local Scope and Functions */
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 3;

  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test

/* Global vs. Local Scope in Functions */
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

/* Return a VAlue from a Function with Return */
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(booger){
  return booger*5;
}
console.log(timesFive(4));
console.log(minusSeven(10));

/* Understanding Undefined Value returned from a Function */
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}
// Only change code above this line
addThree();
addFive();

/* Assignment with a Returned Value */
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed);

/* Stand in Line */

/* Stand in Line */
function nextInLine(arr, item) {
  // Your code here
  var out = arr.push(item);
  var hi = arr.shift();

  return hi;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

/* Understanding Boolean Values */
function welcomeToBooleans() {
  // Only change code below this line.
  return true; // Change this Line
  // Only change code above this line.
}

/* Use Conditional Logic with If Statements */
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";



  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

/* Comparison with the Equality Operator */
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

/*Just adding a comment to test branch merging.*/
