import { useContext } from "react";
import styled from "styled-components";
import { WondrousContext } from "../../../context/WondrousContext";

export default function WondrousRender() {
  // state
  const { wondrousName, wondrousLevel, wondrousDescription, wondrousPrice, wondrousProperty } =
    useContext(WondrousContext);

  return (
    <WondrousRenderStyled>
      <div className="header">
        <span>{wondrousName}</span>
        <span className="level">Niveau {wondrousLevel}</span>
      </div>
      <div className="description">{wondrousDescription}</div>
      <div className="type">
        <span className="typeName">Objet merveilleux</span>
        <span className="price">{Intl.NumberFormat('fr-FR').format(wondrousPrice)} po</span>
      </div>
      <div className="property">
        <span className="propertyLabel">Propriété : </span>
        <p className="propertyText">
          {wondrousProperty}
        </p>
      </div>
    </WondrousRenderStyled>
  );
}

const WondrousRenderStyled = styled.div`
  font-family: Arial;
  font-size: 8pt;
  line-height: 10.5pt;

  width: 350px;
  /* border: 1px solid red; */
  margin-top: 30px;

  .header {
    background: #d89f34;
    color: #ffffff;

    height: 16px;
    padding: 1px 5px 0px 5px;

    .level {
      float: right;
    }
  }

  .description {
    background-color: #ddddcc;
    background-image: url("http://omnichron.net/external/op/src/bg_350.jpg");
    font-style: italic;

    padding: 1px 0px 3px 5px;
  }

  .type {
    padding-left: 5px;

    .typeName {
      font-weight: bold;
    }

    .price {
      padding-left: 15px;
    }
  }

  .property {
    padding-left: 5px;
    background-color: #ddddcc;
    background-image: url("http://omnichron.net/external/op/src/bg_350.jpg");

    .propertyLabel {
      font-weight: bold;
    }

    .propertyText {
      padding-left: 15px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;
