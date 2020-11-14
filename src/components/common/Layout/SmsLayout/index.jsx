
import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
// import { Footer,Header } from 'components/theme';
import {Wrapper} from "./styles"
import { Global } from '../styles';
import '../fonts.css';

export const SmsLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Global theme={theme} />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
};
