import { useState } from "react";
import WondrousForm from './WondrousForm'
import WondrousRender from './WondrousRender'
import styled from 'styled-components';
import { WondrousContext } from "../../../context/WondrousContext";

export default function Wondrous() {

  // state
  const [wondrousName, setWondrousName] = useState("name");
  const [wondrousLevel, setWondrousLevel] = useState("2+");
  const [wondrousDescription, setWondrousDescription] = useState("description");
  const [wondrousPrice, setWondrousPrice] = useState(200);
  const [wondrousProperty, setWondrousProperty] = useState("property");

  // comportements
  const wondrousContextValue = {
    wondrousName,
    setWondrousName,
    wondrousLevel,
    setWondrousLevel,
    wondrousDescription,
    setWondrousDescription,
    wondrousPrice,
    setWondrousPrice,
    wondrousProperty,
    setWondrousProperty
  }

  return (
    <WondrousContext.Provider value={wondrousContextValue}>
    <WondrousStyled>
        <WondrousForm />
        <div className='render'>
            <WondrousRender />
        </div>
    </WondrousStyled>
    </WondrousContext.Provider>
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