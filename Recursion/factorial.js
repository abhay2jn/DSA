function factorial(number) {
    if (number === 0) {
        return 1;  // It stpos the multiplication when the value is reached to 1.
    }
    return number * factorial(number - 1);   // Inshort any number multiply by its value that is decremented by -1 again and again for example :- the number is 4 so it multiplies 4 * 3 * 2 * 1.

}
console.log(factorial(4));