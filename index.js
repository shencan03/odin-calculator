const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    return num1 / num2
}

const operate = (num1, num2, operator) => {
    switch (operator) {
        case "+": add(num1, num2)
        break
        case "-": subtract(num1, num2)
        break
        case "*": multiply(num1, num2)
        break
        case "/": divide(num1, num2)
        break
    }
}