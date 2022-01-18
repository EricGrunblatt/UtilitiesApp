class Calculator {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.substring(0, this.currentOperand.length-1);
    }

    appendNumber(number) {
        if(this.currentOperand === undefined) {
            this.currentOperand = number;
        }
        else {
            this.currentOperand = this.currentOperand + number;
        }
        
    }

    chooseOperation(operation) {
        this.previousOperand = this.currentOperand + ' ' + operation;
        this.operation = operation;
        this.currentOperand = '';
    }

    compute() {
        let current = parseFloat(this.currentOperand);
        let previous = parseFloat(this.previousOperand);
        console.log(current);
        console.log(previous);
        let ans;
        if(this.operation === '÷') {
            ans = previous / current;
        }
        else if(this.operation === '*') {
            ans = current * previous;
        }
        else if(this.operation === '-') {
            ans = previous - current;
            console.log(current);
            console.log()
        }
        else {
            ans = current + previous;
        }
        this.previousOperand = this.previousOperand + ' ' + this.currentOperand;
        this.currentOperand = ans.toString();
        this.operation = '';
    }

    updateDisplay() {
        if(this.previousOperand === undefined) {
            this.previousOperand = '';
        }
        this.currentOperandText.innerText = this.currentOperand;
        this.previousOperandText.innerText = this.previousOperand;
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandText = document.querySelector('[data-previous-operand]')
const currentOperandText = document.querySelector('[data-current-operand]')
const calculator = new Calculator(previousOperandText, currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})

