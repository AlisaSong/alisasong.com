import React from 'react';

import Header from './Header';
import Home from './Home';

import { ajax } from '../services/ajax';

import { constants } from '../constants';

import globalStyles from '../styles/index.css';
import styles from '../styles/contact.css';


export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: window[constants.previousLocation] === constants.pathHome,
            isSendingMail: false,
            company: '',
            email: '',
            message: '',
            name: ''
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

    onChangeCompany(event) {
        this.setState({
            company: event.target.value
        });
    }

    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    onChangeMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    onClickSendMail() {
        this.setState({
            isSendingMail: true
        });
        let body = {
            company: this.state.company,
            email: this.state.email,
            message: this.state.message,
            name: this.state.name
        };
        ajax('post', constants.urlMailMe, body, (error) => {
            if (error) {
                alert('There was a problem sending the mail');
            } else {
                alert('Message received!');
                this.setState({
                    company: '',
                    email: '',
                    message: '',
                    name: ''
                });
            }
            this.setState({
                isSendingMail: false
            });
        });
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
                                        <input type="text"
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeName(event)}
                                            value={this.state.name}
                                        />
                                    </label>
                                    <label className={styles.label}>
                                        <span>Company*</span>
                                        <input type="text"
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeCompany(event)}
                                            value={this.state.company}
                                        />
                                    </label>
                                    <label className={styles.label}>
                                        <span>Email*</span>
                                        <input type="text"
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeEmail(event)}
                                            value={this.state.email}
                                        />
                                    </label>
                                    <label className={styles.label}>
                                        <span>Message*</span>
                                        <input type="text"
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeMessage(event)}
                                            value={this.state.message}
                                        />
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
