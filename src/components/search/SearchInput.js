import styled from 'styled-components';
import { colors } from '../../constants/colors';

const SearchInput = styled.input`
  flex-grow: 10;
  background-color: ${colors.GREY_MAIN};
  color: ${colors.WHITE};
  width: auto;
  opacity: 0.5;
  font-size: 16px;
  padding: 15px 5px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
`;

export default SearchInput;
