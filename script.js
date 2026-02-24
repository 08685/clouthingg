const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const links = nav.querySelectorAll("a");

bar.addEventListener("click", () => {
    nav.classList.toggle("active");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
const mainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src;
}
