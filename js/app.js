document.addEventListener("DOMContentLoaded", () => {
  let icon = document.querySelector(".fa-solid");
  let header = document.querySelector("h1");
  icon.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    icon.classList.toggle("fa-smile");
    icon.classList.toggle("fa-star");
    icon.classList.toggle("spin");
    document.body.classList.toggle("turn");
    header.classList.toggle("smack");
    if (header.textContent.includes("Smile!")) {
      header.textContent = "You matter!";
    } else {
      header.textContent = "Smile!";
    }
  });
});
