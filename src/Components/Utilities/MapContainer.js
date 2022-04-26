import { Component, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, Listing } from "google-maps-react";
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

  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      this.props.setInitialValues({
        ...this.props.initialValues,
        direction: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  }

  mapClicked(mapP, map) {
    const lat = map.data.map.center.lat();
    const lng = map.data.map.center.lng();

    this.setState({
      lat: lat,
      lng: lng,
    });
    this.props.setInitialValues({
      ...this.props.initialValues,
      direction: {
        lat: lat,
        lng: lng,
      },
    });
  }

  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: "60%",
          height: "30%",
        }}
        zoom={13}
        initialCenter={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}
        center={{
          lat: this.state.lat,
          lng: this.state.lng,
        }}
        onClick={(mapP, map) => this.mapClicked(mapP, map)}
        onReady={this.fetchPlaces}
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
