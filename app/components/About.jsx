import React from 'react';

import Header from './Header'

import styles from '../styles/about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            circlesDiamondsLong: this.getCirclesDiamonds(300),
            circlesDiamondsShort: this.getCirclesDiamonds(50)
        };
    }

    getCirclesDiamonds(size) {
        let result = '';

        for (let i = 0; i < size; i++) {
            if (Math.floor(Math.random() * 2) == 0) {
                result += '◆ ';
            } else {
                result += '● ';
            }
        }

        return result;
    }

    render() {
        return (
            <section>
                <Header />
                <div className={styles.aboutSection}>
                    <div className={styles.headerWrapper}>
                        <div className={styles.circlesDiamondsShort}>{this.state.circlesDiamondsShort}</div>
                        <div className={styles.aboutTitle}>ABOUT ME</div>
                        <div className={styles.circlesDiamondsLong}>{this.state.circlesDiamondsLong}</div>
                    </div>

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
