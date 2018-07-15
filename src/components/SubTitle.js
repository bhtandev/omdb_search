import styled from 'styled-components';

const SubTitle = styled.h3`
  padding: 12px;
  color: ${props => props.color? props.color: 'black'},
`;

export default SubTitle;