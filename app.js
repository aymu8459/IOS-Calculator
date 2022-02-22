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

zero.addEventListener("click", () => { 
    if (numberWindow.innerHTML == "0") {
        return
    }
    else {
        numberWindow.innerHTML = numberWindow.innerHTML + "0";
    }
})
one.addEventListener("click", () => {
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "1";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "1";
})
two.addEventListener("click", () => {
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "2";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "2";
})
three.addEventListener("click", () => {
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "3";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "3";
})
four.addEventListener("click", () => {
    if (numberWindow.innerHTML == "0") {
        numberWindow.innerHTML = "4";
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML + "4";
})
five.addEventListener("click", () => {
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "5";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "5";
})
six.addEventListener("click", () => {
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "6";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "6";
})
seven.addEventListener("click", () => {
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "7";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "7";
})
eight.addEventListener("click", () => {
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "8";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "8";
})
nine.addEventListener("click", () => {
    if (numberWindow.innerHTML === "0") {
        numberWindow.innerHTML = "9";
        return 
}
    numberWindow.innerHTML = numberWindow.innerHTML + "9";
})
decimal.addEventListener("click", () => {
    if (numberWindow.innerHTML == ""){
    numberWindow.innerHTML = numberWindow.innerHTML + "0.";
    return
}
    else if (numberWindow.innerHTML.includes(".")) {
        return
    }
numberWindow.innerHTML = numberWindow.innerHTML + ".";
})

clear.addEventListener("click", () => { 
    numberWindow.innerHTML = "0";
    opWindow.innerHTML = "";
})

plusMinus.addEventListener("click", () => {
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
        return
    } 
    numberWindow.innerHTML = numberWindow.innerHTML * -1;
})

percent.addEventListener("click", () => {
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
        return
    }
    numberWindow.innerHTML = numberWindow.innerHTML * 0.01;
})

division.addEventListener("click", div);

function div () {
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
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
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
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
    if (numberWindow.innerHTML == ""  || numberWindow.innerHTML == "0") {
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
    // if (opWindow.innerHTML = "") {
    //     numberWindow.innerHTML = eval(numberWindow.innerHTML);
    //     return
    // }
    let equation = opWindow.innerHTML + numberWindow.innerHTML;
    console.log(typeof(equation));
    console.log(equation);
    console.log(" opWindow is: ", opWindow.innerHTML);
    console.log(numberWindow.innerHTML);
    console.log(eval(equation));
    numberWindow.innerHTML = eval(equation);
    opWindow.innerHTML = "";
}

