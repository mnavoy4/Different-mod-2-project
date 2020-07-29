const quoteDiv= document.querySelector("#quote");
const quotesURL = "http://localhost:3000/quotes";
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const hiddenUsername = document.querySelector("#hiddenUsername");
const hiddenQuoteId = document.querySelector("#hiddenQuoteId");
const hiddenUsername2 = document.querySelector("#hiddenUsername2");
const hiddenUsername3 = document.querySelector("#hiddenUsername3");
hiddenUsername.value = username;
hiddenUsername2.value = username;
hiddenUsername3.value = username;
const link = document.querySelector("#link-to-reviews");
let pictureURL = "";


function fetchRandomQuote(){
  fetch(quotesURL)
    .then(response => response.json())
    .then(renderRandomQuote)
}

function renderRandomQuote(quotes){
  randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  const wikiSearchString = randomQuote.source.replace(" ", "_")
  const quoteP = document.createElement("p");
  hiddenQuoteId.value = randomQuote.id;
  assignPictureURL();
  quoteP.innerHTML = `<p>${randomQuote.quote}</p>
    <img class="m-5 rounded float-right img-thumbnail col-md-4" src=${pictureURL}>
    <p>Philosophy: <a href=https://en.wikipedia.org/wiki/${randomQuote.philosophy}>${randomQuote.philosophy}</a></p>
    <p>Source: <a href=https://en.wikipedia.org/wiki/${wikiSearchString}>${randomQuote.source}</a></p>`;
  quoteDiv.append(quoteP);
}

document.addEventListener("DOMContentLoaded", fetchRandomQuote());

function assignPictureURL(){
  if (randomQuote.source == "Alan Watts"){
    pictureURL = "https://upload.wikimedia.org/wikipedia/en/9/97/Alan_Watts.png";
  } else if (randomQuote.source == "Rumi"){
    pictureURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEvNE9NV0IKXS0HqAPPhNRvM_6u5u1tOISwA&usqp=CAU";
  } else if (randomQuote.source == "Fyodor Dostoyevsky"){
    pictureURL = "https://www.thoughtco.com/thmb/r3-w8qf_ZvUvXHas-fqOLmmlYVQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-961442608-68a9f6aaa0ef455890f2a95b4357941c.jpg";
  } else if (randomQuote.source == "Carl G. Jung"){
    pictureURL = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MjY4NjkzMDAz/carl-jung-9359134-1-402.jpg";
  } else if (randomQuote.source == "Jean-Paul Sartre"){
    pictureURL = "https://images.gr-assets.com/authors/1475567078p5/1466.jpg";
  } else if (randomQuote.source == "Friedrich Nietzsche"){
    pictureURL = "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE5NTU2MzE2MzMwMTAwMjM1/friedrich-nietzsche-9423452-1-402.jpg";
  } else if (randomQuote.source == "Epictetus"){
    pictureURL = "https://fourteenlinesblog.files.wordpress.com/2018/09/epiciteus.jpg?w=660";
  } else if (randomQuote.source == "Marcus Aurelius"){
    pictureURL = "https://i.guim.co.uk/img/media/c5a3cb22f4ae7b4a4c7462ef4d2d0c71cacb3c65/0_232_2789_1673/master/2789.jpg?width=1300&quality=85&auto=format&fit=max&s=5baa9ca326a324c85d53c06df85d8c66";
  } else if (randomQuote.source == "Seneca"){
    pictureURL = "https://373819-1169963-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/07/seneca.jpg";
  }
}