import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';

const SubTitle = styled.h4`
  text-transform: uppercase;
  color: ${colors.WHITE};
  margin-right: 10px;
`;

SubTitle.propTypes = {
  children: PropTypes.string,
};

export default SubTitle;
