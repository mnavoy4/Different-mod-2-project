const reviewsDiv = document.querySelector("#reviews");
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
let reviewsURL = "http://localhost:3000/reviews";

function fetchReviews(){
  fetch(reviewsURL)
    .then(response => response.json())
    .then(renderReviews)
}

function renderReviews(reviews){
  reviews.forEach(review => {
    let reviewDiv = document.createElement("div");
    reviewDiv.innerHTML = `<p>Rating: ${review.rating}</p>
      <p>Review: ${review.user_review}</p>`;
      reviewsDiv.append(reviewDiv);
  });
}
console.log(username);
if (username){
  reviewsURL = `${reviewsURL}?username=${username}`
}

document.addEventListener("DOMContentLoaded", fetchReviews());
