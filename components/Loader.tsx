import { useSelector, useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import styled from "@emotion/styled";

const LoaderContainer = styled.div`

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default class Loader extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

    }

    render() {


        return (
            <div id="layout-content" className="layout-content-wrapper">
                <LoaderContainer>
                    <div className="loader"></div>
                </LoaderContainer>
            </div>
        );
    }
}