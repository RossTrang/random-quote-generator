let theQuote = document.querySelector("q");
const quoteBtn = document.getElementById("newQuoteBtn");

quoteBtn.onclick = function() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    xhr.onload = function() {
        if (xhr.status === 200) {
            let quoteInfo = JSON.parse(xhr.responseText);
            theQuote.textContent = quoteInfo;
        } else {
            alert("Request failed.  Returned status of " + xhr.status);
        }
    };
    xhr.send();
};

