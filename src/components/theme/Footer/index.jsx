import React,{useContext} from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details,Grid,FooterContainer } from './styles';
import social from './social.json';
import {ThemeContext} from "providers/ThemeProvider"

export const Footer = () => {
  const {theme} = useContext(ThemeContext)
  return(
  <Wrapper theme={theme}>
    <FooterContainer as={Container}>
      {/* <Grid>
        <Details>
            <h2>GBHS MUTENGENE </h2>
          </Details>
        <Flex >
          <Links>
            <h4>Project</h4>
            <h4>Project</h4>
            <h4>Project</h4>
            <h4>Project</h4>
          </Links>
          <Links>
            <h4>Blog</h4>
            <h4>Blog</h4>
            <h4>Blog</h4>
            <h4>Blog</h4>
          </Links>
          <Links>
            <h4>Scheme</h4>
            <h4>Scheme</h4>
            <h4>Scheme</h4>
            <h4>Scheme</h4>
          </Links>
          <Links>
            <h4>Time</h4>
            <h4>Time</h4>
            <h4>Time</h4>
            <h4>Time</h4>
          </Links>
        </Flex>
      </Grid> */}
      <Flex number={2}>
        <Links>
            &copy;copyright NOUBISSIE LANDRY
        </Links>
        <Links>
              {social.map(({ id, name, link, icon }) => (
                <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                  <img width="24" src={require(`${icon}`)} alt={name} />
                </a>
              ))}
        </Links>
      </Flex>
    </FooterContainer>
  </Wrapper>
)};