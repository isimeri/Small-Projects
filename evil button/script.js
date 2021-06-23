const evilBtn = document.querySelector(".evil-btn");
const dangerRange = 100;

document.addEventListener("mousemove", e => {
    let btnBox = evilBtn.getBoundingClientRect();
    let btnCenterX = btnBox.x + btnBox.width/2;
    let btnCenterY = btnBox.y + btnBox.height/2;
    let moveX = (dangerRange + btnBox.width/2)/(btnCenterX - e.clientX) * 5;
    let moveY = (dangerRange + btnBox.height/2)/(btnCenterY - e.clientY) * 5;

    checkIfBtnOffScreen(btnCenterX, btnCenterY);

    if(Math.abs(e.clientX - btnCenterX) < dangerRange + btnBox.width/2 && Math.abs(e.clientY - btnCenterY) < dangerRange + btnBox.height/2){
        moveButton(moveX, moveY, btnCenterX, btnCenterY);
    }
});
evilBtn.addEventListener("click", () => {
    alert("lmao");
});

function moveButton(moveX, moveY, cenX, cenY){
    const windowBox = document.body.getBoundingClientRect();
    const btnBox = evilBtn.getBoundingClientRect();

    evilBtn.style.left = `${btnBox.x + moveX}px`;
    evilBtn.style.top = `${btnBox.y + moveY}px`;
    checkIfBtnOffScreen(cenX, cenY);

    
}
function checkIfBtnOffScreen(cenX, cenY){
    const windowBox = document.body.getBoundingClientRect();
    const btnBox = evilBtn.getBoundingClientRect();

    if(cenX < windowBox.left){
        evilBtn.style.left = `${windowBox.right - btnBox.width * 1.5}px`;
        console.log("over left");
    }
    if(cenX > windowBox.right){
        evilBtn.style.left = `${windowBox.left + btnBox.width/2}px`;
        console.log("over right");
    }
    if(cenY < windowBox.top){
        evilBtn.style.top = `${windowBox.bottom - btnBox.height * 1.5}px`;
        console.log("over top");
    }
    if(cenY > windowBox.bottom){
        evilBtn.style.top = `${windowBox.top + btnBox.height/2}px`;
        console.log("over bottom");
    }
}