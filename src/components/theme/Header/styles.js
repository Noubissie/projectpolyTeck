import styled from 'styled-components';
import {HEADER_PRIMARY_COLOR, SECONDARY_COLOR} from "assets/colorsPallete"

export const Wrapper = styled.div`
  /* background: transparent; */
  z-index:4;
  width: 100%;
  opacity:0.8;
    ${({scroll})=>
      scroll >=100 && 
      `
        position:sticky ;
        opacity:0.8;
        top:0;
        animation: fall 4s;
        @keyframes fall{
          from{top:-100px;}
          to{top:0px;}
        }
        
      `}
     
  
  
  top:0;
  background-size:contain;
  background-repeat:no-repeat;
  /* min-height:100vh; */
  
  background-color:${({theme})=>(theme === "light"? HEADER_PRIMARY_COLOR :HEADER_PRIMARY_COLOR)};
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;
  
  ${({ sidebar }) =>
    sidebar &&
    `
			display: block;
      z-index: 4;	
      
  `}
  @media (min-width:960px){
    display:none;
  }
`;
 