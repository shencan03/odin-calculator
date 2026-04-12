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

const calcDisplay = document.querySelector(".calc-display")

const calcContainer = document.querySelector(".calc-buttons")
for (let i = 0; i < 10; i++){
    const num = document.createElement("button")
    num.id = `num-${i}`
    num.textContent = i

    num.addEventListener("click", () => {
        let num = document.createElement("div")    
        num.textContent = i
        calcDisplay.appendChild(num)
    })

    calcContainer.appendChild(num)
}