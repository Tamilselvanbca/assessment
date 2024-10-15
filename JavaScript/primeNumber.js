function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let numbers = Array.from({ length: 1001 }, (_, index) => index);
for (let i = numbers.length - 1; i >= 0; i--) {
    if (!isPrime(numbers[i])) {
        numbers.splice(i, 1); 
    }
}
console.log(numbers);
