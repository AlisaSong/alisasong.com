import React from 'react';

import Header from './Header'

import styles from '../styles/index.css';

export default class Specialties extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <span>Specialties</span>
            </section>
        );
    }
}
