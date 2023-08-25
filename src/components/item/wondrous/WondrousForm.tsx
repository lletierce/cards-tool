import { useContext, useState } from "react";
import styled from 'styled-components';
import WondrousExample from "./WondrousExample";
import { WondrousContext } from "../../../context/WondrousContext";

export default function WondrousForm() {

  // state
  // const [wondrousName, setWondrousName] = useState("wondrous name");
  // const [wondrousLevel, setWondrousLevel] = useState("1");
  // const [wondrousDescription, setWondrousDescription] = useState("description");
  // const [wondrousPrice, setWondrousPrice] = useState(13 000);
  // const [wondrousProperty, setWondrousProperty] = useState("prop");

  const {wondrousName, 
    setWondrousName,
    wondrousLevel,
    setWondrousLevel,
    wondrousDescription,
    setWondrousDescription,
    wondrousPrice,
    setWondrousPrice,
    wondrousProperty,
    setWondrousProperty,
  } = useContext(WondrousContext);



  // comportement
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  // rendering
  return (
    <WondrousFormStyled>
      <form action="submit" onSubmit={handleSubmit} className="wondrous-form">
        <label>
          wondrous name:
          <input
            type="text"
            value={wondrousName}
            onChange={(e) => setWondrousName(e.target.value)}
          />
        </label>
        <label>
          wondrous level:
          <input
            type="string"
            value={wondrousLevel}
            onChange={(e) => setWondrousLevel(e.target.value)}
          />
        </label>
        <label>
          wondrous description:
          <textarea
            value={wondrousDescription}
            onChange={(e) => setWondrousDescription(e.target.value)}
          />
        </label>
        <label>
          wondrous price:
          <input
            type="number"
            value={wondrousPrice}
            onChange={(e) => setWondrousPrice(e.target.valueAsNumber)}
          />
        </label>
        <label>
          wondrous prop:
          <textarea
            value={wondrousProperty}
            onChange={(e) => setWondrousProperty(e.target.value)}
          />
        </label>
        {/* <button>Submit</button> */}
      </form>
      <WondrousExample classname="example"/>
    </WondrousFormStyled>
  );
}

const WondrousFormStyled = styled.div`
  background: greenyellow;

  display: flex;
  flex-direction: column;

  .wondrous-form
  {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .example{
    margin-top: 25px;
    border: 1px solid blue;
  }
`;