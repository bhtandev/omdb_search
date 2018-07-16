import React, { Component } from 'react';
import Button from './Button';
import InputField from './InputField';

import styled from 'styled-components';


const SearchInputBox = styled.div`
  align-items: center;
  padding: 5px 10px;
  position: relative;
  box-sizing: border-box;
  margin: 0;
`;

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleTextChange =   (e) => {
        this.setState({ text: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {doSearch} = this.props;

        if (doSearch) {
            doSearch(this.state.text);
        }
    };

    render() {
        const { status } = this.props;

        const statusTextColor = (status.type === 'error')? 'red' : 'black';

        return (
            <SearchInputBox >
                <InputField
                    id="search-box-input"
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <Button id="search-box-button" onClick={this.handleSubmit}>
                    Search
                </Button>
                <div id="search-box-status" style={{color: statusTextColor}}>
                    {status.text}
                </div>
            </SearchInputBox>
        );
    }
}

export default SearchBox;