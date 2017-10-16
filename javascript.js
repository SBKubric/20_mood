function showRandomQuote() {
  var quotes_array = JSON.parse(document.getElementById("quotes_json").innerText);
  var randomNumber = Math.floor(Math.random() * quotes_array.length);
  document.getElementById("quoteDisplay").innerHTML = quotes_array[randomNumber]['phrase'];
  if (quotes_array[randomNumber].hasOwnProperty("signature")) {
    document.getElementById("authorDisplay").innerHTML = quotes_array[randomNumber]['signature'];
  }
}

