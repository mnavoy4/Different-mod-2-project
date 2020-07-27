const quoteDiv= document.querySelector("#quote");
const quotesURL = "https://philosophy-quotes-api.glitch.me/quotes";

function fetchRandomQuote(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderRandomQuote)
}

function renderRandomQuote(quotes){
  const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  const wikiSearchString = randomQuote.source.replace(" ", "_")
  const quoteP = document.createElement("p");
  quoteP.innerHTML = `<p>${randomQuote.quote}</p>
  <p>Philosophy: <a href=https://en.wikipedia.org/wiki/${randomQuote.philosophy}>${randomQuote.philosophy}</a></p>
  <p>Source: <a href=https://en.wikipedia.org/wiki/${wikiSearchString}>${randomQuote.source}</a></p>`;
  quoteDiv.append(quoteP);
}

document.addEventListener("DOMContentLoaded", fetchRandomQuote());