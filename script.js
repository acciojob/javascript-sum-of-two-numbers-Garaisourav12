let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

// Write your code here and print the output using alert function
let n1 = Number(input1);
let n2 = Number(input2);

if(n1 === NaN || n2 === NaN)
	alert("Invalid input. Please enter a valid number.")
else alert(`The sum of ${n1} and ${n2} is ${n1+n2}.`)