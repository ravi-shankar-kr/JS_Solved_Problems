// 27, 28, 47,49

// Here is a collection of 100 JavaScript questions, divided into groups of 10, based on topics 1-8, with increasing complexity.

// 1. Basic Console Usage (10 Questions)
// 	1.	Log your name and favorite hobby to the console.
console.log("My name is Ravi Kashyap and my hobby is learning new Technologies");



// 	2.	Perform and log the result of 45 * 2 - 10.
console.log(45*2-10);



// 	3.	Use console.log() to display the current year.
console.log("2026");


// 	4.	Create two variables for first and last name. Concatenate and log them.
let first = "Ravi ";
let last = "Kashyap";
console.log(first + last);


// 	5.	Track the value of a variable by logging it before and after updating.
let a = 10;
console.log(a);

a++;     
console.log(a);



// 	6.	Use console.error() to simulate an error message.
console.error("error")


// 	7.	Log the square of the number 12 to the console.
let square = 12;
console.log(square * square);



// 	8.	Print the type of a variable holding the value true.
let val = 10;
console.log(typeof val);


// 	9.	Create a variable holding your age and log whether it’s greater than 18.
let age = 23;
if ( age > 18) {
    console.log(age);
    
}

// 	10.	Log the result of 100 / 0 and observe the output.
console.log(100/0);






// 2. Variables and Data Types (10 Questions)
// 	11.	Declare a variable using let and log its value.
let num = 10;
console.log(num);


// 	12.	Create a constant to store the value of PI and log it.
const PI = Math.PI;
console.log(PI);


// 	13.	Reassign a value to a variable declared with let and log the result. 
let val1 = 39;
val1 = 34;
console.log(val1);



// 	14.	Check the type of null and log it.
let nul = null
console.log(typeof nul);


// 	15.	Create a variable with a number as a string (e.g., "25") and log its type.
let num1 = "25";
console.log(typeof num1);


// 	16.	Use typeof to check the type of a boolean variable.
let tr = true;
console.log(tr);


// 	17.	Create three variables of types string, number, and boolean, and log their values.
let val2 = 12;
let val3 = "ravi";
let val4 = false;
console.log(val2, val3, val4);


// 	18.	Declare a variable without assigning a value. Log its type.
let val5;
console.log(val5);

// 	19.	Create a variable with undefined and log its type.
let val6 = undefined;
console.log(val6);

// 	20.	Use const to create an array. Try reassigning the array and observe the error.
// const arr = [2, 5, 7];
// arr = [4, 9, 8]
// console.log(arr);






// 3. Loops (10 Questions)
// 	21.	Write a for loop to print numbers from 1 to 50.
for (let  i = 0;  i <= 50;  i++) {
     console.log(i);
     
    
}


// 	22.	Use a while loop to sum the numbers from 1 to 10.
let sum = 0;
for (let  i = 0;  i <= 50;  i++) {
     sum += i;   
}
console.log(sum);


// 	23.	Create a for...of loop to log each character of the string "JavaScript".
let name = "Ravi"
for(char of name){
    console.log(char);
    
}


// 	24.	Write a for loop that skips even numbers between 1 and 20.
for (let  i = 0;  i <= 20;  i++) {
    if (i%2 == 0) {
        continue
    }
    console.log(i); 
}



// 	25.	Use a do...while loop to log numbers from 5 to 1.
let j = 5
do {
    console.log(j);
    j--;
    
} while (j >=1);


// 	26.	Create a for loop that calculates the factorial of 5.
let fact = 1;
for (let  i = 1;  i <= 5; i++ ) {
    fact = fact * i; 
}
console.log(fact);



// 	27.	Write a nested loop to print a 3x3 grid of numbers.
// let num2 = 1;
// for (let  i = 1;  i <= 3;  i++) {
//     let row = "";
//     for (let j = 1; j <= 3; j++) {
//     }
      
// }
//  console.log(row); 




// 	28.	Use a for loop to reverse an array [1, 2, 3, 4].
// let arr = [1, 2, 3, 4]
// let start = 0;
// let end = Array.length -1;
// for(start< end; start++; end --){
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     console.log(end);
    
// }
 


 


// 	29.	Write a while loop that logs numbers from 1 to 100 divisible by 5.
let num3 = 5;
while (num3 <= 100) {
    if ( num3 %5 == 0) {
        console.log(num3);
        
    }
    num3++;
}


// 	30.	Use a for...in loop to iterate over an object and log its keys.
const obj = {name:"Ravi", age:23};
for(key in obj){
    console.log(key, ":", obj[key]);
    
}


// 4. Arrays (10 Questions)
// 	31.	Create an array of your top 5 favorite movies and log it.
let arr = ["money heist", "Pirates of the Caribbean", "ravi", "abcd", "defg"];
console.log(arr);


// 	32.	Find and log the second element of an array.
console.log(arr[1]);


// 	33.	Add two new elements to the start of an array using .unshift().
arr.unshift("vishu")
console.log(arr);


// 	34.	Remove the last element of an array and log the updated array.
// 	35.	Use .slice() to extract the first three elements of an array.
// 	36.	Find the index of a specific element in an array using .indexOf().
// 	37.	Check if a value exists in an array using .includes().
// 	38.	Combine two arrays [1, 2] and [3, 4] using .concat().
// 	39.	Sort an array of numbers [5, 2, 9, 1] in ascending order.
// 	40.	Write a program that creates a copy of an array without mutating the original.

// 5. Functions (10 Questions)
// 	41.	Write a function to check if a number is even or odd.

let num4 = 10;
function  evenOdd() {
    if ( num4 %2 == 0) {
        console.log("even");
        
    }else{
        console.log("odd");
        
    }
}

evenOdd();



// 	42.	Create a function to calculate the area of a circle with a given radius.
function  areaOfCircle(r) {

    let pi = Math.PI
    console.log("area of circle is ", pi*r*r);
    
}

areaOfCircle(2);



// 	43.	Write a function that accepts an array and returns the sum of its elements.
function  arrays(arr = [...rest]) {
     let sumar = 0;
    for (let  i = 0;  i < arr.length;  i++) { 
       sumar += arr[i];    
    }
    
    console.log(arr);
    console.log(sumar);
}

arrays([3, 6, 9]);


 
// 	44.	Create a function that checks if a string starts with a specific character.
function  str(name) {
    let ch = "r";
    
      if (name[0] == ch) {
        console.log("start");
        
      }else{
        console.log("not start");
        
      }
}

str("ravi")



// let namer = "ravi"
// for(key in namer ){
//     console.log(key, namer[key]);
    
// }


// 	45.	Write a function to find the maximum of two numbers.
function  max(a, b) {
    if (a > b) {
        console.log(a);
        
    }else{
        console.log(b);
        
    }
    
}

max(53,9)



// 	46.	Create a function that takes a number and returns its factorial.
function  facto(num) {
    let fact = 1;
    if ( num == 0) {
        console.log(1);
    }else if ( num == 1) {
        console.log(1);
    }else {
        for (let  i = 1;  i <= num;  i++) {
         fact *= i;   
        }
    }
    
    console.log(fact);
}

facto(5)


// 	47.	Write a function that accepts a string and returns its reverse.
// function  String(name) {
//     console.log(name.());   
// }
// String("ravi")


// 	48.	Create a function to find the largest number in an array.
function findLargest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
     console.log(max);
     ;
}
const numbers = [20, 10, 20, 4, 100, 340];
findLargest(numbers);

// 	49.	Write a function that converts a string to kebab-case (e.g., "Hello World" → "hello-world").


// 	50.	Create a function that logs "Hello, World!" every time it is called.
// setInterval(() => {
//     console.log("Hello, world!");
    
// },  2000);



// 6. Conditionals (10 Questions)
// 	51.	Write a p;rogram to check if a number is positive, negative, or zero.
// 	52.	Create a program to check if a year is a leap year.
// 	53.	Write an if...else statement to determine if a person can vote based on their age.
// 	54.	Use a switch statement to log the name of the day based on its number (1 = Monday).
// 	55.	Write a program to check if a number is divisible by 3 and 5.
// 	56.	Create a program to check the grade of a student based on marks.
// 	57.	Write an if condition to compare two strings and log if they are equal.
// 	58.	Use a ternary operator to check if a number is even or odd.
// 	59.	Write a program to find the largest of three numbers using if...else.
// 	60.	Create a program to calculate the discount based on the price of an item.

// 7. Object Basics (10 Questions)
// 	61.	Create an object with properties name, age, and city. Log the object.
// 	62.	Add a new property isStudent to the object above and set it to true.
// 	63.	Access and log the value of the city property using bracket notation.
// 	64.	Delete the age property from an object and log the updated object.
// 	65.	Write a function that accepts an object and logs all its keys.
// 	66.	Create an array of objects representing books with title and author properties.
// 	67.	Access and log the author of the second book in the array.
// 	68.	Write a program to check if a specific key exists in an object.
// 	69.	Create a function to count the number of keys in an object.
// 	70.	Use Object.assign() to merge two objects.

// 8. String Manipulation (10 Questions)
// 	71.	Create a string and log its length.
// 	72.	Extract the last 4 characters of a string.
// 	73.	Convert a string to lowercase and log it.
// 	74.	Split a sentence into words using .split() and log the result.
// 	75.	Find the position of the first occurrence of "a" in a string.
// 	76.	Replace "JavaScript" with "JS" in the string "I love JavaScript".
// 	77.	Repeat a string 3 times using .repeat().
// 	78.	Create a function that checks if a string contains a specific word.
// 	79.	Write a program to remove whitespace from both ends of a string.
// 	80.	Create a function to count the number of vowels in a string.

// Mixed Practice (20 Questions)
// 	81.	Write a function that accepts an array of numbers and returns only the even numbers.
// 	82.	Create a program to count the occurrences of a specific value in an array.
// 	83.	Write a function that accepts a string and returns whether it’s a palindrome.
// 	84.	Create a program to log a pattern:

// *
// **
// ***
// ****

// 	85.	Write a function that returns the square of each number in an array.
// 	86.	Use a for loop to sum all odd numbers between 1 and 50.
// 	87.	Create an object representing a person and log their full name.
// 	88.	Write a program to convert the string "10" to a number and add 5 to it.
// 	89.	Write a program to reverse an array without using .reverse().
// 	90.	Create a program to check if an array is empty.
// 	91.	Write a program to fetch the current date and format it as DD/MM/YYYY.
// 	92.	Write a program to find the smallest number in an array.
// 	93.	Create a function to return the Fibonacci sequence up to n terms.
// 	94.	Use a try...catch block to handle division by zero.
// 	95.	Write a program to find the index of the first vowel in a string.
// 	96.	Create a function that accepts an array and returns only unique values.
// 	97.	Write a program to merge two sorted arrays into one sorted array.
// 	98.	Create a function to count the number of words in a string.
// 	99.	Write a program to toggle a button’s background color when clicked.
// 	100.	Write a function to check if all elements in an array are greater than a specific value.

// These questions cover a wide range of fundamental JavaScript concepts. Let me know if you’d like further clarification or solutions for any of these!