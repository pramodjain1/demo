import { useSelector, useDispatch } from "react-redux";
import React from "react";
import axios from "axios";

export default class OptionChain extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        // fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY").then(result => {
        //     console.log(result.json());
        // });

        const url = "https://gorest.co.in/public/v2/users";
        const niftyUrl = "https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY";
        const proxy = "https://cors-anywhere.herokuapp.com/https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY"
        axios.get(proxy).then(result => {
            console.log(result);
        });
    }

    render() {


        return (
            <div id="layout-content" className="layout-content-wrapper">
                Option
            </div>
        );
    }
}