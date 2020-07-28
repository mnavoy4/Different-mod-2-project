const loginForm = document.querySelector("#login-form");
const searchParams = new URLSearchParams(window.location.search);
const username = searchParams.get("username");
const password = searchParams.get("password");
