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
                                Hi there! I'm Alisa, a front-end developer based in Kirkland.
                                I love building beautiful, high-quality websites and apps, and am passionate about learning new technologies to grow my coding expertise.
                                In my free time, I enjoy practicing yoga, playing the flute, walking my dog and playing video games.
                                While you're here, take a look around and feel free reach out if you'd like to start a conversation!
                            </p>
                            <h1 className={styles.aboutTitle}>MY SKILLSET</h1>
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
