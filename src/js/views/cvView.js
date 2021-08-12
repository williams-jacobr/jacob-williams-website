import View from "./view.js";

class cvView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";

  _generateMarkup() {
    return `
      <div class="cvContainer">
        <div>
          <h1>Bio</h1>
        </div>
        <img class="cv__profile--image" src="${this._data.profilePicture}"/>
        <div>
          <h1>Education</h1>
        </div>
        <div>
          <h1>Skills</h1>
        </div>
        <div>
          <h1>Work Experience</h1>
        </div>
        <div>
          <h1>Hobbies</h1>
        </div>
      </div>
      `;
  }
}

export default new cvView();
