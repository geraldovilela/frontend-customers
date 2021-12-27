import styled from "styled-components";

export const Container = styled.div`
  margin: 4rem;  
  
    button{
    margin-top: 2rem;
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }

`

export const SocialContent = styled.div`
  width: 100%;
`

export const IDContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem; 
`
