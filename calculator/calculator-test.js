
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 60000,
    years: 15,
    rate: 1.2
  };
  expect(calculateMonthlyPayment(values)).toEqual('364.40');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 51000,
    years: 30,
    rate: 1.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('176.01');
});

/// etc
