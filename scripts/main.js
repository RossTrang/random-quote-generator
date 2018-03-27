const theQuote = document.querySelector('q');
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