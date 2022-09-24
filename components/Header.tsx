import { useSelector, useDispatch } from "react-redux";
import React from "react";
import axios from "axios";
import { AppBar, Typography } from "@mui/material";



export default class Header extends React.Component<{}, { appName: string }> {


    constructor(props: any) {
        super(props);
        this.state = { appName: process.env.NEXT_PUBLIC_APP_NAME || "default" };

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
                    <div className="wrapper">
                        <h1>{this.state.appName}</h1>
                    </div>

                </AppBar>
            </div>
        );
    }
}