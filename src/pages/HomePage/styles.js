import styled from "styled-components"


export const Wrapper = styled.div`
    min-height:95vh;
    background-color:grey;
    /* border:solid red; */
    
`
export const Grid = styled.div`
    display:grid;
    grid-template-columns: ${({number,percentage})=>number && percentage? `repeat(${number},${percentage}%)`:"auto"};
    /* grid-template-rows:0; */
    margin:0px;
    padding:0px;
    /* border:solid red; */
    @media (max-width:950px){
            grid-template-columns:100%;
    }
    
    
    div{
        /* border:solid red; */
        
        
    }
   
    
`
export const Flex = styled.div`
    
`