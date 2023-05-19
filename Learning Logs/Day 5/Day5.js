// This is an example of an in-line comment

/* This is an example of
a multi-line comment */

/* Data types:
undefined = not previously defined, 
null = nothing, 
boolean = T or F, 
string = text, 
symbol = permutable unique , 
number = numeric values, 
object = key values pairs
*/

var myName = "Brad";
myName = "Thien An";
console.log(myName);

const myAccount = "BradCodeCraft"; //  const variables cannot be changed
/* Changing a const variable create errors */

console.log(myAccount);

var a; // a : null
var b = 2;
// Good ethics: end a line of code with a semicolon

var a = 9; // initializing variable a

// Case Sensitivity in Variables
var A;
var a;
/* This two variables are different */

// Doing Math with Numbers
var sum = 10 + 25;
var substract = 10 - 25;
var times = 10 * 2.5;
var divides = 10 / 2.5;
console.log(sum);
console.log(substract);
console.log(times);
console.log(divides);

// Increment and Decriment
  // Increment
  var myNum = 10;
  myNum++;
  console.log(myNum);
  //Decriment
  var myNum = 10;
  myNum--;
  console.log(myNum);

// Float
  var myFloat = 5.5;
  console.log(myFloat);

// Doing Math with Floats
  var sum = 5.5 + 4.5;
  var substract = 5.5 - 4.5;
  var times = 5.5 * 4.5;
  var divides = 5 / 2.5;
  console.log(sum);
  console.log(substract);
  console.log(times);
  console.log(divides);

// Remainder
  var remainder = 10 % 3;
  console.log(remainder);

// Augmented Math Operations
  // Addition
  var a = 3;
  var b = 10;
  var c = 13;
    // Augmenting
    a += 12;
    b += 4;
    c += 10;
    // Output
    console.log(a);
    console.log(b);
    console.log(c);
  // Substraction
  var a = 3;
  var b = 10;
  var c = 13;
    // Augmenting
    a -= 12;
    b -= 4;
    c -= 10;
    // Output
    console.log(a);
    console.log(b);
    console.log(c);

  // Multiplication
  var a = 3;
  var b = 10;
  var c = 13;
    // Augmenting
    a *= 12;
    b *= 4;
    c *= 10;
    // Output
    console.log(a);
    console.log(b);
    console.log(c);
  // Division
  var a = 3;
  var b = 10;
  var c = 13;
    // Augmenting
    a /= 12;
    b /= 4;
    c /= 10;
    // Output
    console.log(a);
    console.log(b);
    console.log(c);

// String
  var firstName = "Brad";
  var lastName = "Nguyen";

// Escaping Literal Quotes
  var myStr = "I am a \"string inside\" a string";
  console.log(myStr);

// Quoting With a Single Quote
  var myStr = 'I am a "string inside" a string';
  console.log(myStr);

// Escaping Sequences
  /*
  CODE OUTPUT
  \'   single quote
  \"   double quote
  \\   backslash
  \n   newline
  \r   carriage return
  \t   tab
  \b   backspace
  \f  form feed
  */
  console.log("First Line\n\tSecondLine\nThirdLine");

// Concatenating Strings with Plus Operator
  var firstName = "Brad";
  var lastName = "Nguyen";
  console.log(firstName + " " + lastName);

// Concatenating Strings with Plus Equal Operator
  var Name = "Brad";
  Name += " Nguyen";
  console.log(Name);

// Constructing Strings with Variables
  var ourName = "Salt Company";
  var ourStr = "Hello, we are the " + ourName + ", a college ministry that aims to spread the Good News.";
  console.log(ourStr);

// Appending Variables to Strings
  