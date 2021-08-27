class MenuView {
  _parentElement = document.querySelector(".nav");
  menuExtended = false;

  /*
VIEW

CLICK HANDLER

EXTEND MENU


*/
  addHandlerRender(handler) {
    console.log("HELLO");
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

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
