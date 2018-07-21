import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? ' #2F4F4F' : 'white'};
  color: ${props => props.primary ? 'white' : ' #2F4F4F'};

  font-size: 1em;
  margin: 0.3em;
  padding: 0.25em 1em;
  border: 2px solid  #2F4F4F;
  border-radius: 3px;
  height: 36px;
  outline: none;
  &:hover {
    background-color: #2F4F4F; 
    color: white;
  }
`;

export default Button;