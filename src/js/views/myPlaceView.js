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

  addMarker(id, icon) {
    const index = this._data.places.map((place) => place.id).indexOf(id);
    const place = this._data.places[index];
    this._data.places[index].marker = L.marker(place.latLng, { icon: icon })
      .addTo(this._map)
      .bindPopup(place.description);
  }

  goTo(id) {
    const index = this._data.places.map((place) => place.id).indexOf(id);
    const place = this._data.places[index];
    this._data.places[index].marker.openPopup();
    this._map.setView(place.latLng, 5, {
      animate: true,
      pan: { duration: 2 },
    });
  }

  _generateMarkup() {
    return `
    <div class = "my-places__container">
      <div class="sidebar"></div>
      <div id="map"></div>
    </div>
      `;
  }
}

export default new myPlacesView();
