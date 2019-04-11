
  var button = document.querySelector(".goods-best__button");
  var basket = document.querySelectorAll(".goods__link_basket");
  var adding = document.querySelector(".popup-adding");
  var overlay = document.querySelector(".popup-overlay");
  var close = document.querySelector(".popup-adding__button");



  basket[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    adding.classList.add("popup-adding_show");
    overlay.classList.add("popup-overlay_show");
});
basket[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  adding.classList.add("popup-adding_show");
  overlay.classList.add("popup-overlay_show");
});
basket[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  adding.classList.add("popup-adding_show");
  overlay.classList.add("popup-overlay_show");
});
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    adding.classList.remove("popup-adding_show");
    overlay.classList.remove("popup-overlay_show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (adding.classList.contains("popup-adding_show")) {
      adding.classList.remove("popup-adding_show");
      overlay.classList.remove("popup-overlay_show");
    }
  }
});
