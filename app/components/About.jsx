import React from 'react';

import Header from './Header';
import Home from './Home';

import globalStyles from '../styles/index.css';
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
            <div>
                <Home myClass={globalStyles.sectionFadeOut} />
                <section className={globalStyles.sectionFadeIn}>
                    <Header />
                    <article>
                        <div className={styles.aboutSection}>
                            <h1 className={styles.aboutTitle}>ABOUT ME</h1>
                            <p className={styles.aboutContent}>
                                Hi there! I am a front-end developer who builds high quality, responsive websites and apps.
                        I enjoy problem-solving with code and love learning new technologies that challenge my creativity and coding capabilities.
                        While you're here, take a look around and feel free to reach out if you'd like to start a conversation!
                        -Alisa
                    </p>
                            <h1 className={styles.aboutTitle}>SKILLS</h1>
                            <ul className={styles.skills}>
                                {this.state.skills.map((skill, index) =>
                                    <li className={styles.skill} key={index}>{skill}</li>
                                )}
                            </ul>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}
