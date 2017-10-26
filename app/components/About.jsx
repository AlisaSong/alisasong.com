import React from 'react';

import Header from './Header'

import styles from '../styles/about.css';

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
                <div className={styles.aboutSection}>
                <h1>ABOUT ME</h1>

                <p className={styles.aboutContent}>
                    Hi there! I am a front-end developer who builds high quality, responsive websites and apps. 
                    I enjoy problem-solving with code and love learning new technologies that challenge my creativity and coding capabilities. 
                    While you're here, take a look around and feel free to reach out if you'd like to start a conversation!
                    -Alisa</p>
                </div>
            </section>
        );
    }
}
