import styled from "styled-components";
import { theme } from "../theme/main";

export default function PowerPage() {
  return (
    <PowerPageStyled>
      PowerPage
      <div className="card">
        <div className="header">
          <span>power name</span>
          <span className="level">level</span>
        </div>
        <div className="description">{SAMPLE_DESCRIPTION}</div>
        <div className="keywords">
          <span>Rencontre</span> <span>♦</span> <span>{SAMPLE_KEYWORDS}</span>
        </div>
        <div className="action-type">
          <span>Action simple</span> <span>♦</span> <span>Distance</span>{" "}
          <span className="value">{SAMPLE_ACTION_PROPERTY}</span>
        </div>
        <div className="target">
          <span>Cible :</span> <span className="value">une créature</span>
        </div>
        <div className="attack">
          <span>Attaque :</span>{" "}
          <div className="value">
            <span>Sagesse</span> contre <span>Réflexes</span>
          </div>
        </div>
        <div className="hit">
          <span>Réussite :</span>{" "}
          <span className="value">{SAMPLE_HIT_DESCRIPTION}</span>
        </div>
        <div>Effect, Echec, Special, ...</div>
      </div>
    </PowerPageStyled>
  );
}

const PowerPageStyled = styled.div`
  color: black;
  border: 1px solid blue;

  .card {
    /* border: 1px solid green; */
    width: 700px;
    /* min-height: 350px; */

    display: flex;
    flex-direction: column;

    font-family: Arial, sans-serif;
    font-size: 21.2px;
    font-weight: 700;
    line-height: 28px;

    .header {
      background: ${theme.colors.encounter};
      color: white;

      display: grid;
      grid-template-columns: 1fr 40%;

      padding-left: 10px;
      padding-right: 10px;

      .level {
        display: flex;
        justify-content: flex-end;
      }
    }

    .description {
      background: url("/images/bg_350.jpg");
      background-size: contain;

      font-weight: 400;
      font-style: italic;

      padding: 2px 0px 6px 10px;
    }

    .keywords {
      display: flex;
      flex-direction: row;
      column-gap: 10px;

      padding-left: 10px;
    }

    .action-type {
      display: flex;
      flex-direction: row;
      column-gap: 10px;
      padding-left: 10px;
    }

    .target {
      display: flex;
      flex-direction: row;
      column-gap: 10px;
      padding-left: 10px;
    }

    .attack {
      display: flex;
      flex-direction: row;
      column-gap: 10px;
      padding-left: 10px;
    }

    .hit {
      padding-left: 10px;
      background: url("/images/bg_350.jpg");
      background-size: contain;
    }

    .value {
      font-weight: 400;
    }
  }
`;

const SAMPLE_DESCRIPTION = "Ceci est une description";
const SAMPLE_KEYWORDS = "focalisateur, forme animale, guérison, primale";
const SAMPLE_ACTION_PROPERTY = "5";
const _SAMPLE_HIT_DESCRIPTION =
  "1[W] + modificateur de Sagesse dégâts. ficateur de Sagesse ficateur de Sagesse ficateur de Sagesse ficateur de Sagesseficateur de Sagesseficateur de Sagesseficateur de Sagesseficateur de Sagesseficateur de Sagesseficateur de Sagesse";

const SAMPLE_HIT_DESCRIPTION = "1[W] + modificateur de Sagesse dégâts.";