
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("learnMoreBtn");
  const info = document.getElementById("extraInfo");

  if (button && info) {
    button.addEventListener("click", function () {
      const isHidden = info.hidden;

      info.hidden = !isHidden;
      button.textContent = isHidden
        ? "Show Less"
        : "Learn About the Risks";
    });
  }
});
