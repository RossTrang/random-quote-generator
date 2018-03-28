let theQuote = document.querySelector("q");
const quoteBtn = document.getElementById("newQuoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

quoteBtn.onclick = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "http://quotes.rest/qod.json");
    xhr.onload = function() {
        if (xhr.status === 200) {
            var quoteInfo = JSON.parse(xhr.responseText);
            theQuote.textContent = quoteInfo.contents.quotes[0].quote;
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
};

tweetBtn.onclick = function () {
    // body...
    console.log("Tweet button pressed");
};

