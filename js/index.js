console.log("Restaurant UI La Cucina ... ");

const nav = document.querySelector(".nav-menu");
const icon = document.querySelector(".icon-menu");

icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    icon.classList.remove("active");
    nav.classList.remove("active");
  })
);
