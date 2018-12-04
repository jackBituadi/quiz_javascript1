//1. Variables & constants

//1a. Create a variable age and initialize it with your own age (youmay lie if you want to).
let age = 47;

//1b. Create a constant name and initialize it with your name
const name = "jack";

//1c. Create a variable isMarried and initialize it with true if you'remarried, or with false if you're not (again, you may lie if you wantto)
const isMarried = false;

//1d. It's your birthday! Increment the variable age by one.
age = age + 1;
console.log(age);

//1e. Is it possible to change the variable age after you've initializedit? Why?
// 1e. Yes it is possible because the variable age is not a constant. It can take different value.

//1f. Is it possible to change the variable name after you'veinitialized it? Why?
// 1f. No it is not possible  because it's a constant.


// Variable types
//2a. What is the type of the variable age from section 1?
console.log(typeof(age));
// 2a. The type of the variable age as we can see into the console is NUMBER

//2b. What is the type of the variable name from section 1?
console.log(typeof(name));
// 2b. The type of the variable name as we can see into the console is STRING

//2c. What is the type of the variable isMarried from section 1?
console.log(typeof(isMarried));
// 2c. The type of the variable isMarried as we can see into the console is BOOLEAN

//2d. What does the following JavaScript evaluate into ("Evaluate into"is fancy for: "What is the value"): typeof "4"
console.log(typeof("4"));
//2d. the value of typeof "4" is STRING

//2e. Write code that writes the type of "Hello" to the console
console.log(typeof("Hello"));

//2f. What does the following JavaScript evaluate into: typeof true
console.log(typeof(true)); 
// 2f. The value of typeof true is BOOLEAN

//2g. Given a string let x = "123", how can you turn this into a number?
// let x = "123"
// x = parseInt("123");
// console.log(typeof(x));
// 2g. the type of x is a number


//2h. Given a numberlet x = 123, how can you turn this into astring
// x = x.toString();
// console.log(typeof(x));
//2h. the type of x is now string


//3. Null, undefined and NaN
//3a. Explain what undefined means.
//3a.  undefined is an empty box, empty variable, without value.

//3b. What does the acronym "NaN" mean?
//3b NAN means NOT A NUMBER

//3c. What is the type of NaN
console.log(typeof(NAN));
//3c. the type of NaN is UNDEFINED

//3d. What is the type of variable x?
let	x;
let	y	=	0;
console.log(typeof(x));
// 3d. The type of x is UNDEFINED

//3e. What is the type of variable y?
console.log(typeof(y));
//3e. The type of y is a NUMBER

//3f. How do you check if some variable called z is NaN?
let z;
console.log(z===NaN);
// the result is false. In this case z is not NaN



//3g. Which is correct: x == 4 or x === 4? Why?


//3h. Which is correct: x == null or x === null? Why?



//4. Maths & strings
//4a. Write code that adds the numbers 10 and 15 and assigns the result to variable sum
function addNumber(a,b){
  let sum = a + b;
  return sum;
}
console.log(addNumber(10,15));

//4b. What is the result of the following expression: 3 + 4 * 2?
// 3 + (4*2) = 3 + 8 = 11.


//4c. Add parentheses to the expression to make it result 14
//4c.  (3+4)*2 = 7 * 2 = 14


//4d. What is the result of 20 - 8 - 2 - 4?
//4d.  (20-8)-2-4 = 12-2-4 = (12-2)-4 = 10-4 = 6


//4e. Add parentheses to the expression to make it result 10
// 4e.  20-(8-2)-4 = 20-6-4 = 10

//4f. What is the result of "Hello," + "world"?
console.log("Hello" + "World");
//4f. the result is HelloWorld a STRING concatenated.


//4g. What is the result of "Hello".length?
console.log("Hello".length);
//4g. the result is 5



// 5. Booleans
//5a. What is the type of true
console.log(typeof(true));
//5.a  the type of true is BOOLEAN


//5b. Which other boolean value exists apart from true?
// 5b. apart of true the other boolean value is false.


//5c. What is the value of 1 === 10?
console.log(1===10);
//5c. the value of 1===10 is FALSE


//5d. What is the value of 10 === 10?
console.log(10===10);
//5d  the value of 10===10 is TRUE

//5e. What is the result of true === false?
console.log(true===false);
//5e. the result is FALSE


//5f. What is the value of !b?
let	a	=	true;
let	b	=	false;
console.log(!b);
//5f the value of !b is TRUE


//5g. What is the type of !b
console.log(typeof(!b));
//5g. the type of !b is BOOLEAN


//5h. What is the value of a && b?
console.log(a && b);
//5h. the value of a && b is FALSE


//5i. What is the value of a || b?
console.log(a || b);
// 5i. the value of a || b is TRUE

//5j. What is the value of false || false || false || true?
console.log(false || false || false || true);
//5j. the result is TRUE

// 5k. What is the value of false && false && false && true
console.log(false && false && false && true);
//5k. the result is FALSE


//5l. How can you write this shorter: a === true


//5m. How can you write this shorter: a === false




//6. Arrays
//6a. Write code to create an empty array in variable arr1
let arr1a =[];
console.log(arr1a);

//6b. What is the length of the array ["Beef", "Chicken", "Vegetarian"]?
let array2b = ["Beef","Chicken","Vegeterian"];
console.log(array2b.length);
//6b. the lenght is 3

//6c. Write code to replace the number 8 with 7.
let	arr	=	[10,8,1];
arr.splice(1,1,7);
console.log(arr);

//6d. Write code to add the number 2 to the end of the array.
arr.push(2);
console.log(arr);

//6e. Write code to add the number 12 to the start of the array.
arr.unshift(12);
console.log(arr);

//6f. Write code that prints the first item in the array to the console.
console.log(arr[0]);

//6g. Write code that prints the items of an array arr to the console,each item should be logged separately (use a for loop!)
function printItems(){
    for(let i=0; i<= arr.length -1 ; i++){
        console.log(arr[i]);
    }
}
printItems(arr);

//6h. What does the following JavaScript evaluate into: [].length
console.log([].length);
//6h  It evaluates the lenght of the array. How many items the array has.


//6i. Given an array let ingredients = ["Banana", "Oats", "Milk"], is it possible to add an item to the array?
let ingredients = ["Banana", "Oats", "Milk"];
ingredients[3] = "Apple";
console.log(ingredients);
//6i Yes it is possible to add an item to the array as we can see above.


//6j. Given an array const ingredients = ["Banana", "Oats", "Milk"], isit possible to add an item to the array?
const ingredients2 = ["Banana", "Oats", "Milk"];
ingredients2[3]="Apple";
console.log(ingredients2);
//6j yes  although ingredients2 is const , it is possible to add an item to it as we can see to the exemple above.


let	arr1	=	[1,	2,	3];
arr1.push(4);
arr1.shift(); 
let	arr2	=	[2,	3,	4];
let	arr3	=	[];
for	(let	i	=	0;	i	<	arr2.length;	i++){
    arr3.push(1); 
}
//6k. What is the result of arr1.length?
console.log(arr1.length);
//6k. the result is 3


//6l. What is the result of arr1 === arr2?
console.log(arr1===arr2);
// 6l. the result is FALSE.


//6m. What is the result of arr1[0] === arr2[0]?
console.log(arr1);
console.log(arr1[0]===arr2[0]);
//6m. the result is TRUE

//6n. What is the value of arr3?
console.log(arr3);
// 6n. arr3 = [1,1,1]


//7. Functions
//7a. Write a function called four that returns the value 4
function four(){
    return 4;
}
console.log(5 + four());
// the result is 9.




function five()	{
    return 5;
}
function add(a,	b)	{
    return	a	+	b;
}
function run()	{
    console.log("Running...");
}
function whatIsTheTypeOf(v)	{
    console.log("The	type	of	v	is	"	+	typeof v);
}	

//7b. What is the type of five()?
console.log(typeof five());
//7b. the type of five() is NUMBER


// 7c. What is the type of five?
console.log(typeof five);
//7c. the type of five is FUNCTION


//7d. How many parameters does the function add have?
//7d. the function add have 2 parameters ( a and b)


//7e. How many parameters does the function five have?
//7e. the function five have no parameter.


//7f. What is the type of add(1, 2)?
console.log(typeof add(1,2));
//7f. the type of add(1,2) is NUMBER


//7g. What is the type of add("Hello, ", "world")?
console.log(typeof add("Hello, " , "world"));
// 7g. the type of add("Hello, " , "world") is STRING


// 7h. What is the type of run()?
console.log(run());
// 7h. The type of run() is UNDEFINED


//7i. What does this code print to the console: whatIsTheTypeOf(8)?
console.log(whatIsTheTypeOf(8));
//7i.  This code prints : The	type	of	v	is	number


//7j. What does this code print to the console:whatIsTheTypeOf(run)?
console.log(whatIsTheTypeOf(run));
//7j. This code prints : The	type	of	v	is	function



// 8. Finale
//8a. What does the following JavaScript evaluate into: typeof "4"=== typeof 4?



// 8b. Given an array arr, of which you do not know the length. Write code that prints the last element of the array to the console.
let myArray = [];
myArray = [2,9,7,5,6,7,8,9,65,765]  // an exemple of array

function printLastElement(){
console.log(myArray[myArray.length - 1]);
}    

printLastElement(myArray);    // when I run this function the result is 765 the last element.



//8c. Write a function that has one parameter called arr and it returns a number, which is the length of the array times two
function lenghtOfTheArray(arr){
    let number = arr.length * 2;
    return number;
    console.log(number);
}


//8d. Write a function that takes an argument name and prints to theconsole: "Hello, <name>, how are you doing?"
function letsPrint(name){
  console.log("Hello " + name + ", how are you doing ? ");
}
letsPrint("jack");


//8e. Can you use template strings to do the same? If you alreadyused template strings in 8d, can you write your function with the +operator?




//Given the following code:
const	ingredients3	=	["Banana",	"Oats",	"Milk"];  // I use ingredients3 because ingredients was previously used.
const	commandString	=	"ls|cd|touch|cp";

//8f. Write code that prints an ingredient list for pancakes using thevariable ingredients. The list should look like this: "For pancakes,you will need Banana and Oats and Milk.". Use the function join
function printIngredientList(){
let list = ingredients3.join(" and ");
console.log("For pancakes, you will need " + list);
}
printIngredientList(ingredients3);



//8g. Use the function split to convert the string commandString intoan array of commands.
function mysplit() {
    const	commandString	=	"ls|cd|touch|cp";
    var res = commandString.split("|", 4);
    console.log(res);
}
mysplit();



// 8h. Write a function that doubles an array. It:Has a parameter called arr, which should be an array
const arr4 =[3,7,9,5,87,98,32];
function doubleArray(arr4){
const newArray = [];
for (let i =0; i <= arr4.length - 1 ; i++){
    newArray[i] = arr4[i];
}
for(let j =0 ; j <= arr4.lenght -1; j++){
    newArray = newArray.push[arr4[j]];
}
console.log(newArray);

return newArray;
}
doubleArray(arr4);



