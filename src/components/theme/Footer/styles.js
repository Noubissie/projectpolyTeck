import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 2rem 0 4rem 0;
    background-color:${({theme})=> theme === "light"?"#071339":theme};
    color:#fff;
    background-size:cover;
    background-position:top;
    background-repeat:no-repeat;
    min-height:30vw;
    border-top:solid blue;
    border-bottom:solid blue;
    
    

    @media (max-width:1960px){
        padding:4rem 0 4rem;
    };
`
export const Grid = styled.div`

    display:grid;
    grid-template-columns:25% 75%;
    padding:4rem;
    @media(max-width:950px){
        grid-template-columns:auto;
    }
`
export const Flex = styled.div`
    display:grid;
    align-items:flex-start;
    justify-content:space-evenly;
    grid-template-columns:${(number)=>number===2 ? `repeat(${number},auto)`: "repeat(4,auto)"}  ;
    
    @media (max-width:900px){
        grid-template-columns: auto auto;
        text-align:center;
        align-items:center;
    } 
    /* @media (max-width:600px){
        flex-direction: auto auto;
        text-align:center;
        align-items:center;
    }  */
`
export const Links = styled.div`
    /* display:flex; */
    align-items:center;

    a  {
            margin:0 0.5rem;
            img{
                margin:0;
            }
            &:first-child, 
            &:last-child{
                margin:0;
            }
    }
    
`

export const Details = styled.div`
        /* h2,a,span{
            color:#212121
        } */
        
        @media (max-width: 680px){
            margin-bottom: 2rem;
    }
`;
export const FooterContainer = styled.div`

`