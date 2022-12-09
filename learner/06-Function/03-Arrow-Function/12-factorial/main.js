let input = +prompt("Enter Number")

const factorial = (num) =>{
let result = 1;

for (let i = 2; i <= num; i++){
  result = result * i;  
}

return result;
};

alert(factorial(input));