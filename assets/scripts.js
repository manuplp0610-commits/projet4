$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});

const btnfiltre = document.querySelectorAll(".nav-item");

btnfiltre.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnfiltre.forEach((b) => {
      b.style.background = "";
    });
    btn.style.background = "orange";
  });
});
