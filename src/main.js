const Alpaca = require("@alpacahq/alpaca-trade-api");

const options = {
    keyId: "PKPMHU0S9Q4DPB8ORZJ4",
    secretKey: "ED7AZiuYEI5gBx5WkN3IAHlEeIoe0Ui4pqdTKbw0",
    paper: true,
  };
  const alpaca = new Alpaca(options);

  alpaca.getAccount().then((account) => {
  });

 

// Get account information and print it
alpaca.getAccount().then((account) => {
  var equity = account.equity
  var netProfit = equity - 100;
  var profitLoss = (equity - 100) / 100 * 100;

  var netProfitRounded = netProfit.toFixed(2);
  var profitLossRounded = profitLoss.toFixed(2);

  document.getElementById("netProfit").innerHTML = (netProfitRounded + '$');
  document.getElementById("profitLoss").innerHTML = (profitLossRounded + '%');
});

