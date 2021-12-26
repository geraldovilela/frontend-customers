import React from "react";
import { Link } from "react-router-dom";
import { Container, Content } from "./style";

export function Header() {

  return (
    <Container>
      <Content>
        <h1>Cadastro de Clientes</h1>
        <Link to="/"><button type="button">Listagem</button></Link>
        <Link to="create"><button type="button">Incluir</button></Link>
      </Content>
    </Container>
  )
}