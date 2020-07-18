let amountInput = document.querySelector("#amount");
let interestInput = document.querySelector("#interest");
let peroidInput = document.querySelector("#period");
let frequencySelector = document.querySelector("#frequency");

let totalPeriodsInput = document.querySelector("#total-periods");
let paymentInput = document.querySelector("#payment");
let totalInterestInput = document.querySelector("#total-interest");
let totalCostInput = document.querySelector("#total-cost");

amountInput.addEventListener("input", update);
interestInput.addEventListener("input", update);
peroidInput.addEventListener("input", update);
frequencySelector.addEventListener("change", update);

let payment, interest, periods, total;

function update() {
  calc();

  totalPeriodsInput.value = periods;
  paymentInput.value = payment;
  totalInterestInput.value = interest;
  totalCostInput.value = total;
}

function calc() {
  let principal = parseFloat(amountInput.value);
  let frequency = parseFloat(frequencySelector.value);
  let interest_rate = parseFloat(interestInput.value) / frequency / 100;
  periods = parseFloat(peroidInput.value) * frequency;

  payment =
    (principal * (interest_rate * Math.pow(1 + interest_rate, periods))) /
    (Math.pow(1 + interest_rate, periods) - 1);

  total = payment * periods;
  interest = total - principal;

  periods = periods.toFixed(1);
  payment = payment.toFixed(2);
  total = total.toFixed(2);
  interest = interest.toFixed(2);
}

update();
