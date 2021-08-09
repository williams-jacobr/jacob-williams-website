class MenuView {
  _parentElement = document.querySelector(".nav");
  menuExtended = false;

  /*
VIEW

CLICK HANDLER

EXTEND MENU


*/

  addHandlerClickExtendMenu(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".toggle-button");
      if (!btn) return;

      handler();
    });
  }

  openCloseMenu(div) {
    div.classList.toggle("hidden");
  }
}

export default new MenuView();
