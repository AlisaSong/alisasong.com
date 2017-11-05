import React from 'react';

import Header from './Header';
import Home from './Home';
import WordAnimator from './WordAnimator';

import { constants } from '../constants';

import globalStyles from '../styles/index.css';
import styles from '../styles/about.css';

export default class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            delay: 1000,
            frameworks: ['React'],
            isAnimating: window[constants.previousLocation] === constants.pathHome,
            languages: ['JavaScript', 'HTML', 'CSS', 'C#'],
            tools: ['Node.js', 'Git', 'GitHub', 'Visual Studio', 'Chrome DevTools']
        };
    }

    getDelay(word) {
        let delay = this.state.delay;
        this.state.delay += 50 * word.length;
        return delay;
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

    render() {
        return (
            <div>
                {this.state.isAnimating &&
                    <Home move={globalStyles.sectionMoveOutUp} />
                }
                <section className={this.getSectionClass()}>
                    <Header />
                    <article>
                        <div className={styles.aboutSection}>
                            <h1 className={styles.aboutTitle}>ABOUT ME</h1>
                            <p className={styles.aboutContent}>
                                Hi there! I'm <WordAnimator delay={this.getDelay('Alisa')} word="Alisa" />,
                                a <WordAnimator delay={this.getDelay('front-end developer')} word="front-end developer" /> based in Kirkland.
                                I love building beautiful, <WordAnimator delay={this.getDelay('high quality websites')} word="high quality websites" /> and
                                apps, and
                                am <WordAnimator delay={this.getDelay('passionate')} word="passionate" /> about <WordAnimator delay={this.getDelay('learning new technologies')} word="learning new technologies" /> to
                                grow my <WordAnimator delay={this.getDelay('coding expertise')} word="coding expertise" />.
                                In my free time, I enjoy practicing yoga, playing the flute, walking my dog and playing video games.
                                While you're here, take a look around and feel free <WordAnimator delay={this.getDelay('reach out')} link={constants.pathWorkWithMe} word="reach out" /> if
                                you'd like to start a <WordAnimator delay={this.getDelay('conversation')} word="conversation" />!
                            </p>
                            <h1 className={styles.aboutTitle}>MY SKILLSET</h1>
                            <ul className={styles.skills}>
                                {this.state.languages.map((language, index) =>
                                    <li className={styles.language} key={index}>{language}</li>
                                )}
                                {this.state.frameworks.map((framework, index) =>
                                    <li className={styles.framework} key={index}>{framework}</li>
                                )}
                                {this.state.tools.map((tool, index) =>
                                    <li className={styles.tool} key={index}>{tool}</li>
                                )}
                            </ul>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}
