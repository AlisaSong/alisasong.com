import React from 'react';

import Header from './Header';
import Home from './Home';

import { constants } from '../constants';

import globalStyles from '../styles/index.css';
import styles from '../styles/portfolio.css';

import projectDesktopImage from '../images/mac-happy-tummy-grill.png';
import projectPhoneImage from '../images/iphone8-happy-tummy-grill.png';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: window[constants.previousLocation] === constants.pathHome,
            buttons: [{
                displayText: 'Visit Project',
                link: '//www.happytummygrill.com'
            }, {
                displayText: 'GitHub',
                link: '//www.github.com/AlisaSong/happytummygrill.com'
            }
            ]
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

    render() {
        return (
            <div>
                {this.state.isAnimating &&
                    <Home move={globalStyles.sectionMoveOutUp} />
                }
                <section className={this.getSectionClass()}>
                    <Header />
                    <article>
                        <div className={styles.portfolioWrapper}>
                            <h1 className={styles.portfolioTitle}>PORTFOLIO</h1>
                            <div className={styles.projectContentWrapper}>
                                <div className={styles.projectContent}>
                                    <h2 className={styles.projectTitle}>Happy Tummy Grill</h2>
                                    <h3 className={styles.projectDescriptionTitle}>The Project</h3>
                                    <p className={styles.projectDescriptionText}>
                                        I built this client's first website from the ground-up, making sure the site is clean and easy-to-read while
                                    showcasing the menu items and key business information.
                                    I incorporated Google Analytics to track the success of this site, and since its launch, website traffic
                                    regularly spikes before lunch and dinner times.
                                </p>
                                    <h3 className={styles.projectDescriptionTitle}>Skills Used</h3>
                                    <ul className={styles.projectDescriptionText}>
                                        <li className={styles.projectBullet}>Web Development with JavaScript, HTML5, CSS3</li>
                                        <li className={styles.projectBullet}>Telemetry with Google Analytics</li>
                                        <li className={styles.projectBullet}>Web Copywriting</li>
                                    </ul>
                                    <div className={styles.projectButtons}>
                                        {this.state.buttons.map((button, index) =>
                                            <a className={styles.projectButtonLink}
                                                href={button.link}
                                                key={index}
                                                target="blank">
                                                {button.displayText}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectMobileDisplay}>
                                <div className={styles.projectPhoneImageWrapper}>
                                    <img className={styles.projectPhoneImage} src={projectPhoneImage} />
                                </div>
                            </div>
                            <div className={styles.projectDesktopDisplay}>
                                <div className={styles.projectDesktopImageWrapper}>
                                    <img className={styles.projectDesktopImage} src={projectDesktopImage} />
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        );
    }
}
