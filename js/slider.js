const config = {
  type: "carousel",
  perView: 3,
  autoplay: 2000,
  gap: 5,
  breakpoints: {
    750: { perView: 1 },
  },
};
new Glide(".glide", config).mount();
