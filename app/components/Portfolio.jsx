import React from 'react';

import Header from './Header';

import styles from '../styles/portfolio.css';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <span>Portfolio</span>
            </section>
        );
    }
}
