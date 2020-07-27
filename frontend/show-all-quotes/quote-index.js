const quotesUl = document.querySelector(".list-of-quotes");
const quotesURL = `https://philosophy-quotes-api.glitch.me/quotes`;



function fetchQuotes(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderQuotes)
}

function fetchRandomQuote(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderRandomQuote)
}

function renderRandomQuote(quotes){
  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  let quoteLi = document.createElement("li");
  quoteLi.innerHTML = `<span>${randomQuote.source} : ${randomQuote.quote}</span>`;
  quotesUl.append(quoteLi);
}

function renderQuotes(quotes){
  quotes.forEach(quote => {
    let quoteLi = document.createElement("li");
    quoteLi.innerHTML = `<span>${quote.source} : ${quote.quote}</span>`;
    quotesUl.append(quoteLi);
  })
}

document.addEventListener("DOMContentLoaded", fetchRandomQuote());