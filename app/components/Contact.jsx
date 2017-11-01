import React from 'react';

import Header from './Header'

import styles from '../styles/contact.css';
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
                <article>
                    <div className={styles.contactWrapper}>
                        <h1 className={styles.title}>LET'S COLLABORATE</h1>
                        <div className={styles.contactContentWrapper}>
                            <p className={styles.description}>Interested in working together? Fill out the form below & I promise to get back to you within 48 hrs.</p>
                            <div className={styles.contactFormWrapper}>
                                <label className={styles.label}>
                                    <span>Name*</span>
                                    <input type="text" />
                                </label>
                                <label className={styles.label}>
                                    <span>Company*</span>
                                    <input type="text" />
                                </label>
                                <label className={styles.label}>
                                    <span>Email*</span>
                                    <input type="text" />
                                </label>
                                <label className={styles.label}>
                                    <span>Message*</span>
                                    <input type="text" />
                                </label>
                                <button type="button">Send</button>
                            </div>
                        </div>
                    </div>
                </article >
            </section >
        );
    }
}
