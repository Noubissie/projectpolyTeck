import styled from "styled-components"


export const Wrapper = styled.div`
    /* min-height:95vh; */
    margin:4%;
`
export const Grid = styled.div`
    display:grid;
    grid-template-columns: ${({number})=>number ? `repeat(${number},50%)`:"auto"};

    
    
    div{
        margin:4% 0 0 0;
        width:100%;
        input{
                margin:4% 0 4% 0;
                padding:4%;
                width:100%;
                ::placeborder{

                }
            }
    }
    button{
        margin:6% 0 0 0;
    }
    /* justify-content:space-evenly; */
    
`
export const Flex = styled.div`
    display:flex;
    /* justify-content:space-between; */
    flex-direction:column;
`