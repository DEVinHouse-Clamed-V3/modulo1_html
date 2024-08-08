function isRange(number, lowerLimit, upperLimit) {
    if (number >= lowerLimit && number <= upperLimit) {
        return true
    }
    return false
}

console.log(isRange(5, 0, 10))
console.log(isRange(25, 0, 10))