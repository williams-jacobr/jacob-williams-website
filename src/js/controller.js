import myPlacesView from "./views/myPlaceView.js";

const myPlacesButton = document.querySelector(`[href="#My__Places"]`);

const controlPlacesView = function () {
  myPlacesView.render();
};

myPlacesButton.addEventListener("click", controlPlacesView);
