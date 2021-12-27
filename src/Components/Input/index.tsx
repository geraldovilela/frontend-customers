import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { Content } from "./styles";
import { useField } from "@unform/core"


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputForm: React.FC<InputProps> = ({ name, title},...rest) => {
  const {fieldName, defaultValue, error, registerField} = useField(name);
  const inputRef= useRef(null);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref:inputRef.current,
      path:'value'
    });
  },[fieldName, registerField])

  return (
    <Content>
      <p>{title}</p>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} ></input>
    </Content>
  )
}

export default InputForm;