import { useSelector, useDispatch } from "react-redux";
import React from "react";
import axios from "axios";

export default class Footer extends React.Component {
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
            <div id="footer" className="footer-wrapper">
                <footer>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}

                    </a>
                </footer>
            </div>
        );
    }
}