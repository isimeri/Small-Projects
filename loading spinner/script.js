const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const spinner1 = document.querySelector(".spinner1");
const spinner2 = document.querySelector(".spinner2");
const spinner3 = document.querySelector(".spinner3");
const spinner4 = document.querySelector(".spinner4");

btn1.addEventListener("click", () => {
    spinner1.style.display = "flex";
    spinner2.style.display = "none";
    spinner3.style.display = "none";
    spinner4.style.display = "none";
});

btn2.addEventListener("click", () => {
    spinner2.style.display = "flex";
    spinner1.style.display = "none";
    spinner3.style.display = "none";
    spinner4.style.display = "none";
});

btn3.addEventListener("click", () => {
    spinner3.style.display = "flex";
    spinner2.style.display = "none";
    spinner1.style.display = "none";
    spinner4.style.display = "none";
});

btn4.addEventListener("click", () => {
    spinner1.style.display = "none";
    spinner2.style.display = "none";
    spinner3.style.display = "none";
    spinner4.style.display = "flex";
})