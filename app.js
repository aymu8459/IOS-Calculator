/* 
1. Get elements from html
2. Create function for each operator
3. use display values as inputs to operator functions */

// Getting number buttons
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");

//Getting operator buttons
const division = document.getElementById("division");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equal = document.getElementById("equal");

//Getting special operator buttons
const clear = document.getElementById("clear");
const plusMinus = document.getElementById("plus-minus");
const percent = document.getElementById("percent");

// Getting output fields
const numberWindow = document.getElementById("number-window");
const opWindow = document.getElementById("op-window");

// Getting class for special scenarios
const numbers = document.getElementsByClassName("number");

console.log(numbers);

/* the intended use of numbers ended up not working yet but 
it is a work in-progress */

// numbers.addEventListener("click", () => {
//     clear.innerHTML = "C";
// })

zero.addEventListener("click", () => { 
    if (numberWindow.innerHTML == "0") {
        return 
        // this returns nothing if a zero is already in the number window  
    }
    else {
        numberWindow.innerHTML = numberWindow.innerHTML + "0";
    }
})
one.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "1";
        return 
        /* rather than "01" showing in the window, only 1 will show if a 0 is solely
        in the number window */
        //^ this logic is copied for all the numbers
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "1";
})
two.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "2";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "2";
})
three.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "3";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "3";
})
four.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "4";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "4";
})
five.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "5";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "5";
    clear.innerHTML = "C";
})
six.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "6";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "6";
})
seven.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "7";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "7";
    clear.innerHTML = "C";
})
eight.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "8";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "8";
})
nine.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "9";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "9";
})
decimal.addEventListener("click", () => {
    clear.innerHTML = "C";
    if (numberWindow.innerHTML == ""){
    numberWindow.innerHTML = numberWindow.innerHTML + "0.";
    return 
}
    else if (numberWindow.innerHTML.includes(".")) {
        return
//^ this statement limits the numberWindow to only have one decimal point at any time
    }
numberWindow.innerHTML = numberWindow.innerHTML + ".";
})

clear.addEventListener("click", () => { 
    numberWindow.innerHTML = "0";
    opWindow.innerHTML = "";
    clear.innerHTML = "AC";
})

plusMinus.addEventListener("click", () => {
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
        return 
    } 
    numberWindow.innerHTML = numberWindow.innerHTML * -1;
}) // multiply by -1 for conversion of negative to positive and vice versa

percent.addEventListener("click", () => {
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML * 0.01;
}) // for percent, multiply by 0.01

division.addEventListener("click", div);

/* for the operations (+, -, *, /), there are functions made; in the functions,
the number in the numberWindow is taken and then concatenated with the operator. 
The new string is placed in the opWindow and the numberWindow is cleared. */

function div () {
    if (numberWindow.innerHTML == "") {
        return
    }
    else {
        opWindow.innerHTML = numberWindow.innerHTML + " / ";
        numberWindow.innerHTML = "";
        return
    }
}

multiply.addEventListener("click", mult);

function mult () {
    if (numberWindow.innerHTML == "") {
        return
    }
    else {
        opWindow.innerHTML = numberWindow.innerHTML + " * ";
        numberWindow.innerHTML = "";
        return
    }
}

subtract.addEventListener("click", sub);

function sub () {
    if (numberWindow.innerHTML == "") {
        return
    }
    else {
        opWindow.innerHTML = numberWindow.innerHTML + " - ";
        numberWindow.innerHTML = "";
        return
    }
}

add.addEventListener("click", plus);

function plus () {
    if (numberWindow.innerHTML == "") {
        return
    }
    else {
        opWindow.innerHTML = numberWindow.innerHTML + " + ";
        numberWindow.innerHTML = "";
        return
    }
}

equal.addEventListener("click", eq);

function eq () {
    if (numberWindow.innerHTML == "") {
        return
    }

    let equation = opWindow.innerHTML + numberWindow.innerHTML;
    /* equation is the concatenation of the number and operator in the opWindow and
    the new number in the numberWindow */
    console.log(typeof(equation));
    console.log(equation);
    console.log(" opWindow is: ", opWindow.innerHTML);
    console.log(numberWindow.innerHTML);
    console.log(eval(equation));
    numberWindow.innerHTML = eval(equation);
    /*^by using eval, the equation can be solved and placed in the numberWindow */
    opWindow.innerHTML = "";
    // opWindow is cleared for future calculations
}

//Optimizations 

/* 
1.  I am currently working on a way to limit the number of numbers in the numberWindow.
If the user continues to press buttons, then the number in the numberWindow can exceed the
boundary of the calculator. I was thinking of using .toFixed() as a method but it is slightly
more complicated than that.

2.  In the IOS calculator, the AC button(clear button) turns from "AC" to "C" when a number is pressed
and shows in the numberWindow. I put a clear.innerHTML = "C" in all the number and decimall event listeners
but this seems inefficient. I tried to pull all the numbers with getElementsByClassName("number")
with variable name "numbers" and use an event listener on that variable (numbers.addEventListener) 
to change the value of AC to C when a number button is clicked but it didn't work. This is my best 
thought on optimizing this so far and it may work if I fix a few bugs or select and pull differently.
If I can find a way to work this out, I can group all similar number actions/functions in one event listener. 
*/
