import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../constants/colors';

const ResultsTitle = styled.h4`
  font-weight: 900;
  color: ${colors.WHITE};
  margin-right: 10px;
`;

ResultsTitle.propTypes = {
  children: PropTypes.array,
};

export default ResultsTitle;
