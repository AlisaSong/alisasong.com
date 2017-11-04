import React from 'react';

import Header from './Header';
import Home from './Home';

import { constants } from '../constants';

import Ajax from '../services/Ajax';

import globalStyles from '../styles/index.css';
import styles from '../styles/contact.css';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: window[constants.previousLocation] === constants.pathHome
        };
    }

    getSectionClass() {
        let sectionClass = '';

        if (this.props.move) {
            sectionClass = this.props.move;
        } else if (this.state.isAnimating) {
            sectionClass = globalStyles.sectionMoveInFromBottom;
        }

        return sectionClass;
    }

    onClickSendMail() {
        alert(constants.urlMailMe);
    }

    render() {
        return (
            <div>
                {this.state.isAnimating &&
                    <Home move={globalStyles.sectionMoveOutUp} />
                }
                <section className={this.getSectionClass()}>
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
                                    <button onClick={() => this.onClickSendMail()} type="button">Send</button>
                                </div>
                            </div>
                        </div>
                    </article >
                </section >
            </div>
        );
    }
}
