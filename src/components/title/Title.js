import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';

const Title = styled.h1`
  text-transform: uppercase;
  color: ${colors.WHITE};
`;

Title.propTypes = {
  children: PropTypes.string,
};

export default Title;
