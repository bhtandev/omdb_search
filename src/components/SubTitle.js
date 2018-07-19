import styled from 'styled-components';

const SubTitle = styled.p`
  padding: 12px;
  font-size: 24px;
  color: ${props => props.color? props.color: 'grey'},
`;

export default SubTitle;
