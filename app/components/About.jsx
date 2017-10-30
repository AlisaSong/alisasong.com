import React from 'react';

import Header from './Header';

import styles from '../styles/about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'C#']
        };
    }

    render() {
        return (
            <section>
                <Header />
                <div className={styles.aboutSection}>
                    <div className={styles.aboutTitleWrapper}>
                        <div className={styles.aboutTitle}>ABOUT ME</div>
                    </div>
                    <p className={styles.aboutContent}>
                        Hi there! I am a front-end developer who builds high quality, responsive websites and apps.
                        I enjoy problem-solving with code and love learning new technologies that challenge my creativity and coding capabilities.
                        While you're here, take a look around and feel free to reach out if you'd like to start a conversation!
                        -Alisa
                    </p>
                    <div className={styles.aboutTitleWrapper}>
                        <div className={styles.aboutTitle}>SKILLS</div>
                    </div>
                    <ul className={styles.skills}>
                        {this.state.skills.map((skill, index) =>
                            <li className={styles.skill} key={index}>{skill}</li>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}
