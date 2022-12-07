"use strict"

const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const btn = document.querySelector(".btn");

// Preventing refresh after submit
btn.addEventListener("click", function(e) {
    e.preventDefault();
})

// Clear input field
loginBtn.value = "";
registerBtn.value = "";

function register() {
    loginBtn.style.left = "-400px";
    registerBtn.style.left = "50px";
    btn.style.left = "90px"
}

function login() {
    loginBtn.style.left = "50px";
    registerBtn.style.left = "450px";
    btn.style.left = "0"
}