console.log("Restaurant UI La Cucina ... ");

const nav = document.querySelector(".nav-menu");
const icon = document.querySelector(".icon-menu");
const book = document.querySelector("#book");
const bookingDescription = document.querySelector(".booking-description");

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

// on button click open modal
book.addEventListener("click", (e) => {
  bookingDescription.style.display = "block";
  book.style.backgroundColor = "rgb(238, 111, 26)";
});
