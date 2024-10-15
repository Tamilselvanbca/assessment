function sumEvenNumbers(n) {
    if (n <= 0) {
        return 0;
    }
    if (n % 2 === 0) {
        return n + sumEvenNumbers(n - 1);
    } else {
        return sumEvenNumbers(n - 1);
    }
}
const limit = 15;
const result = sumEvenNumbers(limit);
console.log(`The sum of even numbers up to ${limit} is: ${result}`);
