document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var s = window.scrollY;
    var d = document.documentElement.scrollHeight;
    var c = window.innerHeight;
    var scrollPercent = (s / (d - c)) * 100;
    var position = scrollPercent.toFixed(2);

    var progressBar = document.querySelector(".progress-bar");
    if (progressBar) {
      progressBar.style.width = position + "%";
    }
  });
});
