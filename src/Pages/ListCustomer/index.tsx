import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import Edit from "../../icons/edit.svg"
import { api } from "../../services/api";

interface Idata {
  name: string;
  cpf: string;
  rg: string;
  id: string;
}

const ListCustomer: React.FC = () => {
  const [customers, setCustomers] = useState<Idata[]>([])
  useEffect(() => {
    api.get('customer').then(response => setCustomers(response.data))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>RG</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (<tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.cpf}</td>
              <td>{customer.rg}</td>
              <img src={Edit} alt="Editar"></img>
            </tr>)
          })} 
        </tbody>

      </table>
    </Container >
  )
}

export default ListCustomer;