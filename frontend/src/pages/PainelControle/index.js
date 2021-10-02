import { Link, Menu } from "@material-ui/core";
import React, { useState } from "react";
import {
  Container, Header, H1
} from "./styles";

function PainelControle(props) {

  return (
    <Container>
      <Header>
        <H1>
          Fazenda das Flores
        </H1>
        <H1 style={{marginLeft: "500px"}}>
          Painel de Controle
        </H1>
        <H1>
          Insumos
        </H1>
        <H1>
          Custos
        </H1>
        <H1>
          Créditos
        </H1>
        <H1>
          Perfil
        </H1>
      </Header>
    </Container>
  );
}

export default PainelControle;
