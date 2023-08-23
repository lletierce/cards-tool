import styled from "styled-components";

export default function WondrousRender() {
  return (
    <WondrousRenderStyled>
      <div className="header">
        <span>Poche d'herbes infinies</span>
        <span className="level">Niveau 14 Rare</span>
      </div>
      <div className="description">
        Cette poche contient une petite quantité infinie de racines d'arbres, de
        feuilles et de mousses rares récoltées durant certaines phases lunaires.
      </div>
      <div className="type">
        <span className="typeName">Objet merveilleux</span>
        <span className="price">21 000 po</span>
      </div>
      <div className="property">
        <span className="propertyLabel">Propriété : </span>
        <p className="propertyText">
          A la fin de chaque repos long, des herbes rares d'une valeur de 50 pièces
          d'or apparaissent dans la poche. La poche peut contenir jusqu'à un maximum
          de 700 pièces d'or d'herbres rares. Ces herbres peuvent être utilisées pour exécuter
          des rituels nécessitant un test de nature et n'étant pas des rituels de création. Les 
          herbres rares disparaissent peu de temps après la sortie de la poche si elle ne 
          sont pas utilisée comme composants de rituels. 
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
    background-image:url('http://omnichron.net/external/op/src/bg_350.jpg');
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
    background-image:url('http://omnichron.net/external/op/src/bg_350.jpg');

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
