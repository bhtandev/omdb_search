import styled from 'styled-components';
import React from 'react';

const Well = styled.div`
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #fafafa;
    border: 1px solid #e8e8e8;
    border-radius: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
`;

const Block = styled.div`
    vertical-align: top;
    max-width: 200px;
    text-align: center;
`;

const image = (Poster) => {
    if (!Poster || Poster != 'N/A') {
        return <img style={{ width: '170px', height: '250px' }} src={ Poster } className="img-fluid" alt="" />
    } else {
        return <div style={{ width: '100%', height: '250px',
            verticalAlign: 'middle', lineHeight: '250px' }} >No image!</div>;
    }
};

const MoveListItem = (props) => {
    const { Title, Poster, Year, imdbID } = props;

    return (
        <div style={{padding: '10px'}}>
        <Well>
            <div >
                {image(Poster)}
                <Block>{Title}</Block>
                <div>{Year}</div>
            </div>
        </Well>
        </div>
    );
};

export default MoveListItem;
