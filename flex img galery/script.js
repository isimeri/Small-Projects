const imgs = document.querySelectorAll(".image-container");

imgs.forEach(img => {
    img.addEventListener("click", () => {
        if(!img.classList.contains("active")){
            imgs.forEach(imej => {
                imej.classList.remove("active");
            })
        }
        img.classList.toggle("active");
    })
})