
const ratingComponent = document.querySelector(".rating-component");

const resultComponent = document.querySelector(".result-component");

const sumbitButton = document.getElementById("submit");

const ratingButtons = document.querySelectorAll(".rating-btn")

const rating = document.getElementById("rating");

sumbitButton.addEventListener("click", () => {
    resultComponent.classList.remove("hidden");
    ratingComponent.classList.add("hidden");
});

ratingButtons.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
});