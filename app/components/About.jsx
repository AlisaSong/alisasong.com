import React from 'react';

import Header from './Header';

import styles from '../styles/about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            circlesDiamondsLong: this.getCirclesDiamonds(300),
            circlesDiamondsShort: this.getCirclesDiamonds(50),
            skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'C#']
        };
    }

    getCirclesDiamonds(size) {
        let result = [];

        for (let i = 0; i < size; i++) {
            if (this.getRandom(0, 1) === 0) {
                result.push({
                    cycle: styles['circlesDiamonds' + this.getRandom(1, 3)],
                    display: '◆ '
                });
            } else {
                result.push({
                    cycle: styles['circlesDiamonds' + this.getRandom(1, 3)],
                    display: '● '
                });
            }
        }

        return result;
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <section>
                <Header />
                <div className={styles.aboutSection}>
                    <div className={styles.aboutTitleWrapper}>
                        <div className={styles.circlesDiamondsShort}>
                            {this.state.circlesDiamondsShort.map((shape, index) =>
                                <span className={shape.cycle}
                                    key={index}>
                                    {shape.display}
                                </span>
                            )}
                        </div>
                        <div className={styles.aboutTitle}>ABOUT ME</div>
                        <div className={styles.circlesDiamondsLong}>
                            {this.state.circlesDiamondsLong.map((shape, index) =>
                                <span className={shape.cycle}
                                    key={index}>
                                    {shape.display}
                                </span>
                            )}
                        </div>
                    </div>
                    <p className={styles.aboutContent}>
                        Hi there! I am a front-end developer who builds high quality, responsive websites and apps.
                        I enjoy problem-solving with code and love learning new technologies that challenge my creativity and coding capabilities.
                        While you're here, take a look around and feel free to reach out if you'd like to start a conversation!
                        -Alisa
                    </p>
                    <div className={styles.aboutTitleWrapper}>
                        <div className={styles.circlesDiamondsShort}>
                            {this.state.circlesDiamondsShort.map((shape, index) =>
                                <span className={shape.cycle}
                                    key={index}>
                                    {shape.display}
                                </span>
                            )}
                        </div>
                        <div className={styles.aboutTitle}>SKILLS</div>
                        <div className={styles.circlesDiamondsLong}>
                            {this.state.circlesDiamondsLong.map((shape, index) =>
                                <span className={shape.cycle}
                                    key={index}>
                                    {shape.display}
                                </span>
                            )}
                        </div>
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
