import { Link, Menu } from "@material-ui/core";
import {HiArrowDown} from "react-icons/hi";
import React, { useState } from "react";
import {
  Container, Header, H1, Title, Body
} from "./styles";

function PainelControle(props) {

  return (
    <Container>
      <Header >
        <H1>
        Fazenda das Flores
        </H1>
        <HiArrowDown size={15} style={{marginLeft:"5px"}}/>

        <H1 style={{marginLeft: "550px"}}>
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
      <Body>
        <Title>
          Painel de Controle
        </Title>
      </Body>
      
    </Container>
  );
}

export default PainelControle;