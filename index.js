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
        case "+": return add(num1, num2)
        case "-": return subtract(num1, num2)
        case "*": return multiply(num1, num2)
        case "/": return divide(num1, num2)
    }
}

const calcDisplay = document.querySelector(".calc-display")
const calcButtons= document.querySelector(".calc-buttons")

let displayNums = []
let displayOp = []

const ops = {"add": "+", "subtract": "-", "multiply": "*", "divide": "/", "equals": "="}

for (let i = 0; i < 10; i++){
    const numButton = document.createElement("button")

    numButton.id = `button-${i}`
    numButton.textContent = i

    numButton.addEventListener("click", () => {
        const num = document.createElement("div")

        num.classList.add("display-num")
        num.textContent = i
        displayNums.push(num.textContent)
        calcDisplay.appendChild(num)
    })

    calcButtons.appendChild(numButton)
}

for ( const [key, value] of Object.entries(ops)) {
    const op = document.createElement("button")

    op.classList.add("op")
    op.id = key
    op.textContent = value

    op.addEventListener("click", () => {
        if(displayOp.length === 0 && displayNums.length !== 0 && key !== "equals"){
            displayOp.push(value)
            const displayNum = parseInt(displayNums.join(""))
            displayNums = []
            displayNums.push(displayNum)

            const numDiv = document.createElement("div")
            numDiv.classList.add("display-num")
            numDiv.textContent = displayNum

            const opDiv = document.createElement("div")
            opDiv.classList.add("display-op")
            opDiv.textContent = value

            calcDisplay.replaceChildren(numDiv, opDiv)
        } else if(displayOp.length === 1 && displayNums.length > 1) {
            const op = displayOp.pop()
            if(op === "=") {
                displayOp.push(op)
                const displayNum = parseInt(displayNums.slice(1).join(""))
                const result = operate(parseInt(displayNums[0]), displayNum, op)
                displayNums = []
                displayNums.push(result)

                const displayResult = document.createElement("div")
                displayResult.classList.add("display-num")
                displayResult.textContent = result

                calcDisplay.replaceChildren(displayResult)
            } else {
                displayOp.push(value)
                const displayNum = parseInt(displayNums.slice(1).join(""))
                const result = operate(parseInt(displayNums[0]), displayNum, op)
                displayNums = []
                displayNums.push(result)
                
                const displayResult = document.createElement("div")
                displayResult.classList.add("display-num")
                displayResult.textContent = result

                const displayCurrentOp = document.createElement("div")
                displayCurrentOp.classList.add("display-op")
                displayCurrentOp.textContent = value

                calcDisplay.replaceChildren(displayResult, displayCurrentOp)
            }
        
        }
        console.log(displayNums)
        console.log(displayOp)
    })    
    

    calcButtons.appendChild(op)
}