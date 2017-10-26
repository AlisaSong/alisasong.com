import React from 'react';

import styles from '../styles/header.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <header>
                <p className={styles.headerName}>Alisa</p>
                <p className={styles.headerName}>Song</p>
            </header>
        );
    }
}
