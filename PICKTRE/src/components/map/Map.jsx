import Header from "../common/Header";
import Footer from "../common/Footer";
import { useGeoLocation } from "./GeoLocation";
import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import styled from "styled-components";
import myPosition from "../../assets/myPosition.png";
import { GOOGLE_API_KEY } from "../../constants/OAuth";

const Wrapper = styled.div`
  .map-container {
    width: 390px;
    height: 668.5px;
  }
`;

const MapWithMarker = ({ location }) => {
  const center = { lat: location.latitude , lng: location.longitude};

  return (
    <GoogleMap zoom={18} center={center} mapContainerClassName="map-container">
      <MarkerF
        position={center}
        icon={{
          url: myPosition,
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
    </GoogleMap>
  );
};

const Map = () => {
  const { location } = useGeoLocation();

  return (
    <div>
      <Header />
      <Wrapper>
        <LoadScriptNext
          googleMapsApiKey={GOOGLE_API_KEY}
          libraries={["places"]}
        >
          {location && <MapWithMarker location={location} />}
        </LoadScriptNext>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Map;
