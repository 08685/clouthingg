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