import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import ReactTooltip from 'react-tooltip';
import _ from 'lodash';
import MarkerImg from '../../images/marker.png';
import * as Styled from './styled';

const defaultProps = {
  zoom: 8,
};

function Map({
  width = '500px',
  height = '300px',
  padding = '15px',
  locations = [],
  selectedLocation = {},
  onMarkerClick,
}) {
  const [center, setCenter] = useState({});

  useEffect(() => {
    if (locations && locations.length) {
      setCenter({
        lat: locations[0].lat,
        lng: locations[0].lon,
      });
    }
  }, [locations]);

  useEffect(() => {
    if (!_.isEmpty(selectedLocation)) {
      setCenter(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <Styled.Wrapper width={width} height={height} padding={padding}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCyRiKgem3cOOlkhalo1VrJxn4mgrMgnfA' }}
        center={center}
        zoom={defaultProps.zoom}
      >
        <ReactTooltip />
        {_.map(locations, location => (
          <Styled.Marker
            data-tip={location.name}
            onClick={() => onMarkerClick(location.id)}
            key={location.id}
            lat={location.lat}
            lng={location.lon}
            src={MarkerImg}
            alt="marker"
          />
        ))}
      </GoogleMapReact>
    </Styled.Wrapper>
  );
}

export default Map;
