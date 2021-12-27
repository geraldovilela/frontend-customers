import React from "react";
import InputForm from "../../Components/Input";
import { Container, IDContent, SocialContent } from "./styles";
import { Form } from "@unform/web";
import { api } from "../../services/api";

const CreateCustomer: React.FC = () => {
  function handleSubmit(data:object):void{
    api.post('customer', data).then((response)=>{console.log(response.data)})
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputForm name="name" title="Nome"></InputForm>
        <InputForm name="dob" title="Data Nascimento" placeholder="Data Nascimento" type="date"></InputForm>
        <InputForm name="phone" title="Telefone" type="phone"></InputForm>
        <IDContent>
          <InputForm name="CPF" title="CPF" type="text"></InputForm>
          <InputForm name="RG" title="RG" type="text"></InputForm>
        </IDContent>
        <SocialContent>
          <InputForm name="Facebook" placeholder="Facebook Link" type="link"></InputForm>
          <InputForm name="Linkedin" placeholder="Linkedin Link" type="link"></InputForm>
          <InputForm name="Twitter" placeholder="Twitter Link" type="link"></InputForm>
          <InputForm name="Instagram" placeholder="Instagram Link" type="link"></InputForm>
        </SocialContent>
      <button type="submit">Salvar</button>
      </Form>
    </Container>
  )
}

export default CreateCustomer;