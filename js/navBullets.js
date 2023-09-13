const sections = Array.from(document.querySelectorAll(".section"));
let sectionsOffsets = {};

sections.forEach((section) => {
  sectionsOffsets[section.id] = section.offsetTop;
});

window.addEventListener("scroll", function () {
  const scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  const activeElements = Array.from(document.querySelectorAll(".active"));

  for (const cur of sections) {
    if (sectionsOffsets[cur.id] <= scrollPosition + 50) {
      activeElements.forEach((e) => e.classList.remove("active"));
      Array.from(document.querySelectorAll(`a[href*='#${cur.id}']`)).forEach(
        (e) => e.classList.add("active")
      );
    }
  }
});
