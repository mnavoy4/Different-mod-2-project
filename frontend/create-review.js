const quoteDiv= document.querySelector("#quote");
const quotesURL = "http://localhost:3000/quotes";
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const password = searchParams.get("password");
const hiddenUsername = document.querySelector("#hiddenUsername");
const hiddenQuoteId = document.querySelector("#hiddenQuoteId");
hiddenUsername.value = username

function fetchRandomQuote(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderRandomQuote)
}

function renderRandomQuote(quotes){
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  const wikiSearchString = randomQuote.source.replace(" ", "_")
  const quoteP = document.createElement("p");
  hiddenQuoteId.value = randomQuote.id;
  console.log(randomQuote);
  quoteP.innerHTML = `<p>${randomQuote.quote}</p>
  <p>Philosophy: <a href=https://en.wikipedia.org/wiki/${randomQuote.philosophy}>${randomQuote.philosophy}</a></p>
  <p>Source: <a href=https://en.wikipedia.org/wiki/${wikiSearchString}>${randomQuote.source}</a></p>`;
  quoteDiv.append(quoteP);
}


document.addEventListener("DOMContentLoaded", fetchRandomQuote());


