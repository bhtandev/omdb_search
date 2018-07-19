import styled from 'styled-components';
import { device } from './device';
import { HEADER_HEIGHT } from './Header';
// margin: auto;

const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column; 
  /* background: gray; */
  width: 100%;
  text-align: center;
  margin-top: ${props => props.marginTop? props.marginTop: HEADER_HEIGHT}
  
  
    @media ${device.laptop} {
        max-width: 800px;   
    }
    
    @media ${device.desktop} {
        max-width: 1400px;
    }

`;



export default ResponsiveContainer;
