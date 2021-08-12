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
const myPlacesButton = document.querySelector(`[href="#myplaces"]`);
const blogButton = document.querySelector(`[href="#blog"]`);
const aboutMeButton = document.querySelector(`[href="#aboutme"]`);
const gitHubButton = document.querySelector(`[href="#github"]`);
const cvButton = document.querySelector(`[href="#cv"]`);

const checkOverlay = function () {
  if (menuView.menuExtended) controlExtendMenu();
};

const controlExtendMenu = function () {
  menuView.openCloseMenu(extendedMenu);
  menuView.openCloseMenu(overlay);
  menuView.menuExtended = !menuView.menuExtended;
};

const controlPlacesView = function () {
  myPlacesView.render();
};

const controlBlogView = function () {
  blogView.render(model.state.blogs);
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
  // MENU BUTTON CONTROL
  myPlacesButton.addEventListener("click", controlPlacesView);
  blogButton.addEventListener("click", controlBlogView);
  aboutMeButton.addEventListener("click", controlAboutMeView);
  gitHubButton.addEventListener("click", controlGitHubView);
  cvButton.addEventListener("click", controlCvView);

  //VIEW CONTROLS
  menuView.addHandlerClickExtendMenu(controlExtendMenu);
  overlay.addEventListener("click", controlExtendMenu);
  blogPostView.addHandlerClick(controlBlogPostView);
  blogPostView.addHandlerCloseClick(controlBlogView);
};

init();
aboutMeView.render();
