import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import menuView from "./views/menuView.js";
import myPlacesView from "./views/myPlaceView.js";
import myPlacesMenuView from "./views/myPlacesMenuView.js";
import blogView from "./views/blogView.js";
import blogPostView from "./views/blogPostView.js";
import aboutMeView from "./views/aboutMeView.js";
import gitHubView from "./views/gitHubView.js";
import cvView from "./views/cvView.js";

const extendedMenu = document.querySelector(".extend-menu");
const overlay = document.querySelector(".overlay");

const controlView = function () {
  console.log("CLICK");
  // Get hash from window location
  const id = window.location.hash.slice(1);

  //Temporary contact me solution
  if (id === "contactme") {
    window.location.href = "mailto:williams.jacobr@gmail.com";
    window.location.href = window.location.origin;
    return;
  }

  // Choose correct view using the view map
  const view = model.state.viewMap[
    model.state.viewMap.map((el) => el.id).indexOf(id)
  ]
    ? model.state.viewMap[model.state.viewMap.map((el) => el.id).indexOf(id)]
    : model.state.viewMap[
        model.state.viewMap.map((el) => el.id).indexOf("aboutme")
      ];

  // call the correct controller
  view.control.call();
};

const controlExtendMenu = function () {
  menuView.openCloseMenu(extendedMenu);
  menuView.openCloseMenu(overlay);
  menuView.menuExtended = !menuView.menuExtended;
};

const checkOverlay = function () {
  if (menuView.menuExtended) controlExtendMenu();
};

const controlPlacesView = function () {
  const controlExtendPlacesMenu = function (el) {
    el.parentElement.classList.toggle("sidebar--extended");
    el.classList.toggle("my-places__menu--close");
    // extendArrow.focus();
  };

  const controlPlacesMenuView = function (el) {
    const id = el.dataset.id;
    const marker =
      model.state.myplaces.places[
        model.state.myplaces.places.map((place) => place.id).indexOf(id)
      ];
    myPlacesView.goTo(marker.id);
  };

  checkOverlay();
  myPlacesView.render(model.state.myplaces);

  const map = L.map("map").setView([0, 0], 2.5);
  const myIcon = model.state.myplaces.map.icon;

  myPlacesView.renderMap(map);

  model.state.myplaces.places.forEach((place) =>
    myPlacesView.addMarker(place.id, myIcon)
  );

  myPlacesMenuView.renderMenu(model.state.myplaces.places);

  myPlacesMenuView.addHandlerClickExtend(controlExtendPlacesMenu);
  myPlacesMenuView.addHandlerClick(controlPlacesMenuView);
};

const controlBlogView = function () {
  blogView.render(model.state.blog);
  checkOverlay();
};

const controlBlogPostView = function () {
  // ADD - Need a way to collect and then pass in which blog it is! - Use data attribute
  blogPostView.render(model.state.blogs.blog_1);
};

const controlAboutMeView = function () {
  const controlScroll = function (el) {
    const pos = el.offsetTop;
    aboutMeView.scroll(pos);
  };
  aboutMeView.render();
  checkOverlay();

  aboutMeView.addHandlerToBottomClick(controlScroll);
  aboutMeView.addScrollDownAnimation();
};

const controlGitHubView = async function () {
  try {
    const controlGitHubHeader = function () {
      window.open(model.state.github.html, "");
    };

    checkOverlay();
    await model.loadGitHub();

    gitHubView.render(model.state.github);

    gitHubView.addHandlerClickHeader(controlGitHubHeader);
  } catch (err) {
    console.log(err);
  }
};

const controlCvView = function () {
  cvView.render(model.state.cv);
  checkOverlay();
};

const init = function () {
  //Populate view map to link hash to correct controller
  model.state.viewMap.push({
    id: "cv",
    control: controlCvView,
  });
  model.state.viewMap.push({
    id: "myplaces",
    control: controlPlacesView,
  });
  model.state.viewMap.push({
    id: "blog",
    control: controlBlogView,
  });
  model.state.viewMap.push({
    id: "aboutme",
    control: controlAboutMeView,
  });
  model.state.viewMap.push({
    id: "github",
    control: controlGitHubView,
  });

  //Initialising hash listener
  menuView.addHandlerRender(controlView);

  //VIEW CONTROLS
  menuView.addHandlerClickExtendMenu(controlExtendMenu);
  overlay.addEventListener("click", controlExtendMenu);
  blogPostView.addHandlerClick(controlBlogPostView);
  blogPostView.addHandlerCloseClick(controlBlogView);
};

init();
