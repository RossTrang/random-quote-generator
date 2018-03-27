/* const theQuote = document.querySelector('q');
const quoteBtn = document.getElementsByClassName('newQuoteBtn');
const tweetBtn = document.querySelector('.tweetBtn');

quoteBtn.onClick = function() {
console.log("quote button pressed")
const xhr = new XMLHttpRequest();
xhr.responseType = 'JSON';
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    //theQuote.textContent = xhr.quote
    console.log(xhr.status)
  }
};
xhr.open("GET", "http://quotes.rest/quote/random.json", false);
xhr.send();

}

tweetBtn.onClick = function () {
  // body...
  console.log("Tweet button pressed")
}
*/

function loadQuote() {
 console.log("quote button pressed")
 const xhr = new XMLHttpRequest();
 //xhr.responseType = 'json';
 xhr.onreadystatechange = function() {
   if (xhr.readyState === XMLHttpRequest.DONE) {
     theQuote.textContent = xhr.quoteText
     console.log(xhr.quoteText)
   }
 };
 xhr.open("GET", "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en");
 xhr.send();
}

function LogClick2() {
alert("Logging");
  console.log("Tweet button pressed");
}

var theQuote = document.querySelector('q');
var quoteBtn = document.getElementById('newQuoteBtn');
var tweetBtn = document.getElementById('tweetBtn');
quoteBtn.onclick = loadQuote;
tweetBtn.onclick = LogClick2;