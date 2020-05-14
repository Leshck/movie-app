import styled from 'styled-components';
import { colors } from '../../constants/colors';

const SearchButton = styled.button`
  flex-grow: 0.5;
  background-color: ${colors.PINK};
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  color: ${colors.WHITE};
  padding: 15px 60px;
  text-align: center;
  font-size: 16px;
`;

export default SearchButton;
