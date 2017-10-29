import React from 'react';

import Header from './Header'

import styles from '../styles/index.css';

export default class WorkWithMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <span>WORK WITH ME</span>
            </section>
        );
    }
}
