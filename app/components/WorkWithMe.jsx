import React from 'react';

import Header from './Header';
import Home from './Home';

import { ajax } from '../services/ajax';

import { constants } from '../constants';

import globalStyles from '../styles/index.css';
import styles from '../styles/work-with-me.css';


export default class WorkWithMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasCompanyRefocused: false,
            hasEmailRefocused: false,
            hasMessageRefocused: false,
            hasNameRefocused: false,
            hasSentMail: false,
            isAnimating: window[constants.previousLocation] === constants.pathHome,
            isAttemptingToSendMail: false,
            isSendingMail: false,
            company: '',
            email: '',
            message: '',
            name: ''
        };
    }

    getFormClass(defaultClass, value, hasRefocused) {
        let formClass = defaultClass;

        if (this.state.isAttemptingToSendMail && value.length === 0 && !hasRefocused) {
            formClass += ' ' + styles.emptyContent;
        }

        return formClass;
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

    hasValidFormContent() {
        this.setState({
            hasCompanyRefocused: false,
            hasEmailRefocused: false,
            hasMessageRefocused: false,
            hasNameRefocused: false,
            isAttemptingToSendMail: true
        });

        return this.state.company.length > 0 && this.state.email.length > 0 && this.state.message.length > 0 && this.state.name.length > 0;
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
        if (this.hasValidFormContent()) {
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
                    isAttemptingToSendMail: false,
                    isSendingMail: false,
                    hasSentMail: true
                });
            });
        }
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
                            <h1 className={styles.title}>
                                <span>LET'S COLLABORATE</span>
                            </h1>
                            <div className={styles.contactContentWrapper}>
                                <p className={styles.description}>
                                    Interested in working together? Fill out the form and I'll get back to you within 48 hours.
                                </p>
                                <p className={styles.description}>
                                    Recruiters - I'm currently looking for a full-time position as a front-end developer, feel free to reach out with any opportunities.
                                </p>
                                <div className={styles.contactFormWrapper}>
                                    <label className={styles.label}>
                                        <span className={styles.inputType}>Name</span>
                                        <input type="text"
                                            className={this.getFormClass(styles.contactFormSlot, this.state.name, this.state.hasNameRefocused)}
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeName(event)}
                                            onFocus={() => { this.setState({ hasNameRefocused: true }) }}
                                            value={this.state.name}
                                        />
                                    </label>
                                    <label className={styles.label}>
                                        <span className={styles.inputType}>Company</span>
                                        <input type="text"
                                            className={this.getFormClass(styles.contactFormSlot, this.state.company, this.state.hasCompanyRefocused)}
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeCompany(event)}
                                            onFocus={() => { this.setState({ hasCompanyRefocused: true }) }}
                                            value={this.state.company}
                                        />
                                    </label>
                                    <label className={styles.label}>
                                        <span className={styles.inputType}>Email</span>
                                        <input type="text"
                                            className={this.getFormClass(styles.contactFormSlot, this.state.email, this.state.hasEmailRefocused)}
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeEmail(event)}
                                            onFocus={() => { this.setState({ hasEmailRefocused: true }) }}
                                            value={this.state.email}
                                        />
                                    </label>
                                    <label className={styles.label}>
                                        <span className={styles.inputType}>Message</span>
                                        <textarea
                                            className={this.getFormClass(styles.contactFormSlotBig, this.state.message, this.state.hasMessageRefocused)}
                                            disabled={this.state.isSendingMail}
                                            onChange={(event) => this.onChangeMessage(event)}
                                            onFocus={() => { this.setState({ hasMessageRefocused: true }) }}
                                            value={this.state.message}
                                        />
                                    </label>
                                    <p>
                                        <button className={styles.sendMailButton}
                                            disabled={this.state.hasSentMail || this.state.isSendingMail}
                                            onClick={() => this.onClickSendMail()} type="button">
                                            SEND
                                    </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article >
                </section >
            </div>
        );
    }
}
