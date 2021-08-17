import View from "./view.js";

class myPlacesView extends View {
  _parentElement = document.querySelector("main");
  _welcomeMessage = "Coming Soon!!";
  _defaultIcon;
  _map;

  renderMap(map) {
    this._map = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: true,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this._map);
  }

  addMarker(latlng, icon, message) {
    L.marker(latlng, { icon: icon })
      .addTo(this._map)
      .bindPopup(message)
      .openPopup();
  }

  _generateMarkup() {
    return `
    <div id="map"></div>
      `;
  }
}

export default new myPlacesView();
