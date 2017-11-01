import React from 'react';

import Header from './Header'

import styels from '../styles/contact.css';
import globalStyles from '../styles/index.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <h1>LET'S COLLABORATE</h1>

            </section>
        );
    }
}
