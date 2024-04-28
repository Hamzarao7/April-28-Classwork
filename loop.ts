console.log("Name");
console.log("Name");
console.log("Name");
console.log("Name");

//loop
//do while (condition) //phly 1 dfa run hota phr condition check krta
//while (Condition) {} phly condition (if true than continue) // false
// for

// for(expression1 ; exp2 ; exp3) {}
// exp1 : starting condition (let variable = 0)
// exp2 : ending condition (variable < 5)
// exp3 : starting condition (increment) (i++ ; i--)

for (let x = 5; x < 10; x += 2) {
  console.log("Loop", x);
}

// step 1 : cpmdition check
// step 2 : true -> bode execute ho jay ga
// step 3 : increment (exp3)

// x = 0 (true) ; loop 0 ; x=1
// x=1 (true) ; loop 1 ; x++ (x=2)
// x=2 (true) ; loop 2 ; x++ (x=3)
// x=3 (true) ; loop 3 ; x++ (x=4)
// x=4 (true) ; loop 4 ; x++ (x=5)

const array = ["a", "b", "c", "d", "e"];

for (let x = 0; x < array.length; x++) {
  console.log("This is For Loop");
  console.log(array[x]);
}

function printTable(input: number) {
  for (let x = 1; x <= 10; x++) console.log(` ${input} * ${x} = ${input * x}`);
}

printTable(2);
printTable(4);
printTable(7);
printTable(9);

// Q1: Write a script to log"Hello World" to the console
let greetings = "Hello World";
console.log(greetings);

// Q2:

let temp = 5;

if (temp < 20) {
  console.log("its Cold");
}

// Q3:

let a = 10;
let b = 3;
let c = a - b;
console.log(`Have 10 Apples and Gave 3 Now left :`, c);

// Q4:

let firstname = "Hamza";
let lastname = "Rao";
let fullname = firstname + lastname;
console.log("FullName:", fullname);

// Q5:

let n = 5;
