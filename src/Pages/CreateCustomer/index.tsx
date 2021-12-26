import React from "react";
import InputForm from "../../Components/Input";
import { Container, IDContent, SocialContent } from "./styles";

const CreateCustomer: React.FC = () => {

  return (
    <Container>
      <InputForm title="Nome"></InputForm>
      <InputForm title="Data Nascimento" type="date"></InputForm>
      <InputForm title="Telefone" type="phone"></InputForm>
      <IDContent>
        <InputForm title="CPF" type="text"></InputForm>
        <InputForm title="RG" type="text"></InputForm>
      </IDContent>
      <SocialContent>
        <InputForm title="Facebook" type="link"></InputForm>
        <InputForm title="Linkedin" type="link"></InputForm>
        <InputForm title="Twitter" type="link"></InputForm>
        <InputForm title="Instragram" type="link"></InputForm>
      </SocialContent>

    </Container>
  )
}

export default CreateCustomer;