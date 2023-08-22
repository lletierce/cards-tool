import React from 'react'
import styled from 'styled-components';

export default function ItemPage() {
  return (
    <ItemPageStyled>
      <div>ItemForm</div>
      <div>Renderer</div>
    </ItemPageStyled>
  )
}


const ItemPageStyled = styled.div`
border: 1px solid red;
`;