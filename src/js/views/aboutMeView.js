import View from "./view.js";

class AboutMeView extends View {
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    return `
    <div id="welcome">
        <h1>Jacob Williams</h1>
      </div>
      `;
  }
}

export default new AboutMeView();
