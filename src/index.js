let originalContents = {};

document.addEventListener("DOMContentLoaded", function () {
  let paragraphs = document.querySelectorAll(".paragraph");
  paragraphs.forEach((paragraph) => {
    originalContents[paragraph.id] = paragraph.innerHTML;
  });
});

function showMenu(event) {
  event.preventDefault();
  let body = document.querySelector("body");
  body.classList.toggle("bg-with-image");
  body.classList.toggle("bg-with-color");

  let main = document.querySelector(".main");
  let menuDiv = document.querySelector(".menu");
  let frames = document.querySelector(".frames");
  let paragraphs = document.querySelectorAll(".paragraph");

  frames.classList.toggle("full-width");

  if (body.classList.contains("bg-with-color")) {
    paragraphs.forEach((paragraph) => {
      paragraph.innerHTML = "";
    });
    menuDiv.innerHTML =
      '<ul><li><a href="../index.html">Start</a></li><li><a href="../varfor.html">Varför</a></li><li><a href="../vadada.html">Vadådå</a></li><li><a href="../vibah.html">Vi Bah’</a></li><li><a href="../dura.html">Men Du´ra</a></li></ul>';
    main.style.backgroundColor = "rgba(0, 0, 0, 0)";
  } else {
    paragraphs.forEach((paragraph) => {
      paragraph.innerHTML = originalContents[paragraph.id];
    });
    menuDiv.innerHTML = "";
    main.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  }
}

let togglerIcon = document.querySelector("#navbar-toggler");
togglerIcon.addEventListener("click", showMenu);

togglerIcon.removeAttribute("data-bs-toggle");
togglerIcon.removeAttribute("data-bs-target");
