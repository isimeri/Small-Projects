const btn = document.querySelector(".btn");
const body = document.querySelector("body");
let deg = parseInt(getComputedStyle(document.body).getPropertyValue("--angle"));
btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    deg+=180;
    document.body.style.setProperty("--angle", deg);
});

