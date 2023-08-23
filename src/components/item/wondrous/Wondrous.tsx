import WondrousForm from './WondrousForm'
import WondrousRender from './WondrousRender'
import styled from 'styled-components';

export default function Wondrous() {
  return (
    <WondrousStyled>
        <WondrousForm />
        <div className='render'>
            <WondrousRender />
            <button className='cta-save'>Enregistrer</button>
        </div>
    </WondrousStyled>
  )
}

const WondrousStyled = styled.div`
  border: 1px solid purple;

  display: grid;
  grid-template-areas: "form" "renderer";
  grid-template-columns: 1fr 1fr;

  
  .render
  {
    margin: 0 auto;

    .cta-save
    {
        margin-top: 30px;
        position: relative;
        float: right;

    }
  }
`;