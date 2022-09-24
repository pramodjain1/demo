import { useSelector, useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import { AppBar } from "@mui/material";

export default class Header extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {

    }

    render() {


        return (
            <div id="header" className="header-wrapper">
                <AppBar position="static">
                    Header
                </AppBar>
            </div>
        );
    }
}