class CoinCounter {

    constructor(solution, counters, values) {
        this.solution = solution;
        this.counters = counters;
        this.values = values;
    }

    calculate() {
        this.total = 0;
        this.counters = [];
        this.values = [];
        numberInputs.forEach(input => {
            let count;
            if(input.value === '') {
                count = 0;
            }
            else {
                count = parseFloat(input.value);
            }
            this.counters[this.counters.length] = count;
            this.values[this.values.length] = parseFloat(input.id.substring(1));
            
        })
        if(this.total === undefined) {
            this.total = 0;
        }
        for(let i = 0; i < this.counters.length; i++) {
            let value = this.values[i];
            let count = this.counters[i];
            this.total = this.total + (count * value);
        }
        this.total = parseFloat(this.total.toString()).toFixed(2);
    }

    reset() {
        numberInputs.forEach(input => {
            input.value = '';
        })
        this.total = '';
    }

    updateDisplay() {
        if(this.total === undefined) {
            this.total = 0;
        }
        this.solution.innerText = '$' + this.total.toString();
    }
}

const numberInputs = document.querySelectorAll('input[type="text"]')
const numberLabels = document.querySelectorAll('label[type="text"]')
const calculate = document.querySelector('button[class="calculate"]')
const reset = document.querySelector('button[class="reset"]')
const solution = document.querySelector('[data-solution]')
let counters = []
let values = [];
const coinCounter = new CoinCounter(solution, counters, values)

calculate.addEventListener('click', () => {
    coinCounter.calculate();
    coinCounter.updateDisplay();
})

reset.addEventListener('click', () => {
    coinCounter.reset();
    coinCounter.updateDisplay();
})