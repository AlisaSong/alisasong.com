import React from 'react';

import Header from './Header'

import styles from '../index.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <span>About</span>
            </section>
        );
    }
}
