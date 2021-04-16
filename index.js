//This is our starting variable, change it to define the categorization of the number that you input.
var a= 20;

//This is our code to figure out the category the number falls into and prints the category to the console
if (a === 2) {
    console.log("even and prime");
}
else if (a % 2 === 0) {
    console.log("even and not prime");
} 
else if (a === 3 || a === 5 || a === 7) {
    console.log("odd and prime");
}
else if (a % 2 !== 0 && a % 3 === 0 || a % 5 === 0 || a % 7 === 0) {
    console.log("odd and not prime");
} 
else {
   console.log("odd and prime"); 
}

//end of code


