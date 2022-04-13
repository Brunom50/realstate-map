import GoogleMapReact from './map';
import styled from 'styled-components';
import React from 'react';
import Locations from './locations';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  margin: 20px;
  height: 800px;
`;

const initialLocations = [{
  name: 'teste1',
  price: '$249,000',
  image: '/house1.jpeg',
  address: '400 W Scott Avenue, Rahway, NJ 07065',
  lat: 41.5426527,
  lng: -8.407468
},
{
  name: 'teste2',
  price: '$589,000',
  image: '/house2.jpeg',
  address: '400 W Scott Avenue, Rahway, NJ 07065',
  lat: 41.5426527,
  lng: -7.407468
},
{
  name: 'teste3',
  price: '$149,000',
  image: '/house3.jpeg',
  address: '400 W Scott Avenue, Rahway, NJ 07065',
  lat: 42.5426527,
  lng: -8.407468
},
{
  name: 'teste4',
  price: '$549,000',
  image: '/house4.jpeg',
  address: '400 W Scott Avenue, Rahway, NJ 07065',
  lat: 41.5426527,
  lng: -9.407468
}];

export default function Home() {
  const [locationsInfo, setLocationsInfo] = React.useState([]);

  return (
    <Wrapper>

      <GoogleMapReact locations={initialLocations}/>

      <Locations locations={initialLocations} />
    </Wrapper>
  )
}
