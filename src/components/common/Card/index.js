import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
  ${({width})=>width && `
      width:${width};
  `}
 
  /* border: solid black 1px; */
`;

export const TitleWrap = styled.div`
  /* display: flex;
  flex-direction: row; 
  justify-content: space-between; */

`;
