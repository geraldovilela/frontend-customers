import React from "react";
import { Content } from "./styles";

interface InputProps{
  title: string;
  type?:string;
}

const InputForm: React.FC<InputProps> = ({title, type})=>{

  return (
    <Content>
      <p>{title}</p>
      <input type={type}></input>
    </Content>
  )
}

export default InputForm;