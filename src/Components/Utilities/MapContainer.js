import { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import axios from "axios";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      markers: [],
    };

    this.mapClicked = this.mapClicked.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) =>
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  }

  mapClicked(e, coord) {
    console.log(e);
    const { latLng } = coord;
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.setState((previousState) => {
      return {
        markers: [
          ...previousState.markers,
          {
            title: "",
            name: "",
            position: { lat, lng },
          },
        ],
      };
    });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "30%" }}
        zoom={13}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}
        center={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}
        onClick={this.mapClicked}
      >
        <Marker
          title={"Geolocation"}
          position={{
            lat: this.state.lat,
            lng: this.state.lng,
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDExPRXE3odJ_31sK4Kc2lsEgiHEmC6RCw",
})(MapContainer);
