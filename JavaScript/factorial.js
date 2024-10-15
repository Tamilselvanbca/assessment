function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n !== Math.floor(n)) {
        return "Factorial is only defined for non-negative integers.";
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(0)); 
console.log(factorial(-3));
console.log(factorial(4.5)); 
