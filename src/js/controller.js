import * as model from "./model.js";
import menuView from "./views/menuView.js";
import myPlacesView from "./views/myPlaceView.js";
import blogView from "./views/blogView.js";
import blogPostView from "./views/blogPostView.js";
import aboutMeView from "./views/aboutMeView.js";
import gitHubView from "./views/gitHubView.js";
import cvView from "./views/cvView.js";

const extendedMenu = document.querySelector(".extend-menu");
const overlay = document.querySelector(".overlay");

const controlView = function () {
  // Get hash from window location
  const id = window.location.hash.slice(1);

  // Choose correct view using the view map
  const view =
    model.state.viewMap[model.state.viewMap.map((el) => el.id).indexOf(id)];

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
  myPlacesView.render();
  checkOverlay();
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
  aboutMeView.render();
  checkOverlay();
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
