import styled from 'styled-components';

export const HEADER_HEIGHT = '50px';

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: #2F4F4F;
    height: ${HEADER_HEIGHT};
    color: #fff;
    top: 0;
    z-index: 999;
`;

export default Header;