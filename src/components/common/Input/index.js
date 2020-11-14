import styled from 'styled-components';

export const Input = styled.input`
  width:${(width)=> width ? `${width}` :"100%"} ;
  box-sizing: border-box;
  border: 2px;
  padding: 0.8rem 1rem;
  border-radius: 7px;
  margin-bottom: 0.5rem;
  transition: 0.3s;
  ${({theme})=> theme === "light" && `
    border:solid grey 2px;
  ` }
  ${({ error }) =>
    error &&
    `
        border-color: #ff4136;
        color:red;
	`}

  &::placeholder {
    color: blue;
    
  }
`;
