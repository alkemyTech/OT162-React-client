import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "30%" }}
        zoom={3}
        initialCenter={{
          lat: 28.023212,
          lng: 77.123412,
        }}
      >
        {this.state.markers != null &&
          this.state.markers.map((coords) => (
            <Marker
              key={coords.place_id}
              position={coords.geometry.location}
              onClick={this.clickMarker}
              placeId={coords.place_id}
            />
          ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDExPRXE3odJ_31sK4Kc2lsEgiHEmC6RCw",
})(MapContainer);
