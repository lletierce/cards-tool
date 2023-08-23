import { useState } from "react";
import styled from 'styled-components';

export default function WondrousForm() {
  // const wondrous = {
  //   name: "name",
  //   level: 1,
  //   description: "",
  //   price: "",
  //   prop: "",
  // }

  // state
  const [wondrousName, setWondrousName] = useState("wondrous name");
  // const [wondrousLevel, setwondrousLevel] = useState<number>(1);
  const [wondrousLevel, setWondrousLevel] = useState("1");
  const [wondrousDescription, setWondrousDescription] = useState("description");
  const [wondrousPrice, setWondrousPrice] = useState("13 000");
  const [wondrousProp, setWondrousProp] = useState("prop");

  
  // comportement
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  // rendering
  return (
    <WondrousFormStyled action="submit" onSubmit={handleSubmit}>
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
          type="text"
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
          type="text"
          value={wondrousPrice}
          onChange={(e) => setWondrousPrice(e.target.value)}
        />
      </label>
      <label>
        wondrous prop:
        <textarea
          value={wondrousProp}
          onChange={(e) => setWondrousProp(e.target.value)}
        />
      </label>
      {/* <button>Submit</button> */}
    </WondrousFormStyled>
  );
}

const WondrousFormStyled = styled.form`
  background: greenyellow;

  display: flex;
  flex-direction: column;
`;