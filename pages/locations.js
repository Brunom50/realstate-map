
/**
 * Module dependencies.
 */

import { Card } from '@nextui-org/react';
import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  margin-left: 20px;
  height: 100%;
`;

const LocationWrapper = styled(Card)`
  border: 1px solid;
  display: grid;
  grid-row-gap: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const Price = styled.div`
  color: #343342;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  width: 100%;
`;

/**
 * Locations component.
 */

const Locations = (props) => {
  return (
      <Wrapper>
      {props.locations.map(location => (
       <LocationWrapper key={location.name} id={location.name}>
        <StyledImage src={location.image} alt="Girl in a jacket" width="200" height="200"></StyledImage>
        
        <Price>{location.price}</Price>
        
        <div>{location.address}</div>
       </LocationWrapper>
      ))}
    </Wrapper>
  )
};

export default Locations;