import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  
  table {
    margin: 2rem 2rem;
    width:100%;
    border-spacing: 0 0.5rem;
    text-align: center;
    display:table;
    th {
      width: 100%;
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td{
      width: 100%;      
      padding: 1rem 2rem;
      justify-content:center;
      text-align: justify;
      border:0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
    }
}
`
