let homeDisplay = document.querySelector(".left-side h3");
let guestDisplay = document.querySelector(".right-side h3");
let homeButtons = [...document.querySelectorAll(".left-side button")];
let guestButtons = [...document.querySelectorAll(".right-side button")];
let reset = document.querySelector(".new-game");

let homeNumber = 0;
let guestNumber = 0;

homeButtons[0].addEventListener("click", () => {
homeNumber++;
homeDisplay.textContent = homeNumber
})
homeButtons[1].addEventListener("click", () => {
homeNumber+= 2;
homeDisplay.textContent = homeNumber
})
homeButtons[2].addEventListener("click", () => {
homeNumber+= 3;
homeDisplay.textContent = homeNumber
})
// ====================
guestButtons[0].addEventListener("click", () => {
    guestNumber++;
    guestDisplay.textContent = guestNumber
})
guestButtons[1].addEventListener("click", () => {
    guestNumber+=2;
    guestDisplay.textContent = guestNumber
})
guestButtons[2].addEventListener("click", () => {
    guestNumber+=3;
    guestDisplay.textContent = guestNumber
})

// =================
reset.addEventListener("click", () => {
    homeNumber = 0;
    guestNumber= 0;
    homeDisplay.textContent = homeNumber;
    guestDisplay.textContent = guestNumber;
})