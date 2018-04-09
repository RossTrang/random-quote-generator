let theQuote = document.querySelector('q');
var quoteInfo = '';
const quoteBtn = document.getElementById('newQuoteBtn');
const tweetBtn = document.getElementById('tweet');

function getQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
  xhr.onload = function() {
    if (xhr.status === 200) {
      quoteInfo = JSON.parse(xhr.responseText);
      theQuote.textContent = quoteInfo;
    } else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', getQuote());

quoteBtn.onclick = function () {
  getQuote();
};

tweetBtn.onclick = function () {
  this.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quoteInfo +
      ' ~ Ron Swanson');
};

