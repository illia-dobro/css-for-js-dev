import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <Showrapper key={shoe.slug}>
          <ShoeCard  {...shoe} />
        </Showrapper>
      ))}
    </Wrapper>
  );
};

const Showrapper= styled.div`
 flex:1;
  min-width: 344px;
  
`;

const Wrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export default ShoeGrid;
