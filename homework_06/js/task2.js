// Exchange Rates for 2018/02/10
var EUR = 33.2324;
var USD = 27.1240;

// Obtaining and calculating currency
var valueEUR = parseFloat(prompt("Enter the amount of currency (Euros): "));
var valueUSD = parseFloat(prompt("Enter the amount of currency (Dollars): "));

var UAHEUR = EUR * valueEUR;
var UAHUSD = USD * valueUSD;
var EURUSD = EUR / USD;

// Outputting correct results in consoles
if (isNaN(valueEUR) || isNaN(valueUSD) || UAHEUR < 0 || UAHUSD < 0) {
  console.log("Incorrect data");
}
else {
  console.log(valueEUR + " euros are equal " + UAHEUR.toFixed(2) + " UAH, " + valueUSD +
  " dollars are equal " + UAHUSD.toFixed(2) + " UAH, one euro is equal " + EURUSD.toFixed(2) + " dollars.");
}
