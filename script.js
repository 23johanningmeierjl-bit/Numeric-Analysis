//get the elements of the html page that we need to interact with
let submitButton = document.getElementById("submit");
let input = document.getElementById("input");
let output = document.getElementById("output");

//This is the code that runs when you click the submit button
submitButton.addEventListener("click", function() {

    //This is our starting variable, change it to define the categorization of the number that you input.
    let a = Number(input.value);
    let output = document.getElementById("output");

    //This is our code to figure out the category the number falls into and prints the category to the console
    if (a === 2) {
        output.textContent = a + " is even and prime";
    }
    else if (a % 2 === 0) {
        output.textContent = a + " is even and not prime";
    } 
    else if (a === 3 || a === 5 || a === 7) {
        output.textContent = a + " is odd and prime";
    }
    else if (a % 2 !== 0 && a % 3 === 0 || a % 5 === 0 || a % 7 === 0) {
        output.textContent = a + " is odd and not prime";
    } 
    else {
        output.textContent = a + " is odd and prime";
    }

});

//end of code