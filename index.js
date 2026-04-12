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
const calcButtons= document.querySelector(".calc-buttons")

for (let i = 0; i < 10; i++){
    const numButton = document.createElement("button")

    numButton.id = `button-${i}`
    numButton.textContent = i

    numButton.addEventListener("click", () => {
        let num = document.createElement("div")

        num.classList.add("display-num")
        num.id = `num-${i}`
        num.textContent = i
        calcDisplay.appendChild(num)
    })

    calcButtons.appendChild(numButton)
}

for ( const [key, value] of Object.entries({"sum": "+", "subtract": "-", "multiply": "*", "divide": "/"})) {
    const op = document.createElement("button")

    op.classList.add("op")
    op.id = key
    op.textContent = value

    op.addEventListener("click", () => {
        let opDiv = document.createElement("div")

        opDiv.classList.add("display-op")
        opDiv.id = `op-${key}`
        opDiv.textContent = value

        calcDisplay.appendChild(opDiv)
    })    

    calcButtons.appendChild(op)
}