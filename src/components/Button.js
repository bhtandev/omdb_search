import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? ' #E9967A' : 'white'};
  color: ${props => props.primary ? 'white' : ' #E9967A'};

  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 1em;
  border: 2px solid  #E9967A;
  border-radius: 3px;
  height: 36px;
  
  &:hover {
    background-color: #E9967A; 
    color: white;
  }
`;

export default Button;