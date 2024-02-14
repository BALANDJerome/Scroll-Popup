window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }
  if (window.scrollY > 150) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "translateX(0)";
  }
  if (window.scrollY > 1190) {
    popup.style.opacity = "1";
    popup.style.transform = "translateX(0)";
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});
