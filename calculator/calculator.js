window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const values  = {
    amount: 600000,
    years: 15,
    rate: 0.5 };
  const amountBorrowed = document.getElementById("loan-amount");
  amountBorrowed.value = values.amount;
  const yearsRequested = document.getElementById("loan-years");
  yearsRequested.value = values.years;
  const rateRequest = document.getElementById("loan-rate");
  rateRequest.value = values.rate;
  update();
}

function update() {
  const newValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(newValues));
}

function calculateMonthlyPayment(values) {
  let monthyPayment = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthyPayment * values.amount) /
    (1 - Math.pow((1 + monthyPayment), -n))
  ).toFixed(2);
}

function updateMonthly(monthly) {
  const payment = document.getElementById("monthly-payment");
  payment.innerText = "$" + monthly;
}
