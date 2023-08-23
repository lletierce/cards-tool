import React, { useState } from "react";
import styled from "styled-components";
import WondrousForm from "../components/item/wondrous/WondrousForm";

export default function ItemPage() {
  // state
  // const [inputs, setInputs] = useState({});
  // const [wondrousName, setWondrousName] = useState("wondrous name");
  // const [wondrousLevel, setwondrousLevel] = useState<number>(1);
  // const [wondrousLevel, setWondrousLevel] = useState("1");
  // const [wondrousDescription, setWondrousDescription] = useState("description");
  // const [wondrousPrice, setWondrousPrice] = useState("13 000");
  // const [wondrousProp, setWondrousProp] = useState("prop");


  // comportement
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  // const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setInputs(values => ({...values, [name]: value}))
  // }


  // rendering
  return (
    <ItemPageStyled>
      <div className="form">
        <WondrousForm/>
        {/* <form action="submit" onSubmit={handleSubmit}>
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
              // type="number"
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
              // type="number"
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
          <button>Submit</button>
        </form> */}
      </div>

      <div className="renderer">
        {/* <ul>
          <li>{wondrousName}</li>
          <li>{wondrousLevel}</li>
          <li>{wondrousDescription}</li>
          <li>{wondrousPrice} po</li>
          <li>{wondrousProp}</li>
          <li>{"wondrous"}</li>
        </ul> */}
      </div>
    </ItemPageStyled>
  );
}

const ItemPageStyled = styled.div`
  border: 1px solid purple;

  display: grid;
  grid-template-areas: "form" "renderer";
  grid-template-columns: 1fr 1fr;

  .form {
    background: rgba(100,149,237, 0.5);
  }

  .renderer {
    background: rgba(122, 122, 122, 0.5);
  }
`;