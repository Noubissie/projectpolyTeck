import styled from 'styled-components';
import {PRIMARY_COLOR, SECONDARY_COLOR} from "assets/colorsPallete"
export const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  overflow: auto;
  top: 0px;
  right: -275px;
  width: 0;
  opacity: 0;
  height: 100%;
  background-color: ${({ theme }) => (theme === 'light' ? PRIMARY_COLOR :SECONDARY_COLOR)};
  transition: all 350ms cubic-bezier(0.6, 0.05, 0.28, 0.91);
  @media (min-width: 960px) {
				display:none;
			}

  ${({ active }) =>
    active &&
    `
			width: 20%;
			right: 0px;
      opacity: 1;
      

			@media (max-width: 960px) {
				width: 40%;
			}

			@media (max-width: 600px) {
				width: 75%;
			}
	`}
`;
