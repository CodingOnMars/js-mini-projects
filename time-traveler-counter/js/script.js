// Counter
class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;

    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');

    this.yearValue = element.querySelector('.value');
    this.yearValue.textContent = value;

    // Point 'this' to Counter using bind method for functions
    // (to make 'this' work with callback functions)
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
  }
  increase() {
    this.value++;
    this.yearValue.textContent = this.value;
  }
  decrease() {
    if (this.value > 0) {
      this.value--;
    } else {
      this.value = 0;
    }
    this.yearValue.textContent = this.value;
  }
  reset() {
    this.value = 0;
    this.yearValue.textContent = this.value;
  }
}

const firstClock = new Counter(getElement('.destination-clock'), 2015);
const secondClock = new Counter(getElement('.departure-clock'), 1985);

// Display current year
let today = new Date();
let year = today.getFullYear();
getElement('.present-year').textContent = year;

// Get element helper function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Check '${selection}', such element does not exist`);
}
