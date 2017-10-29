import React from 'react';

import Header from './Header';

import styles from '../styles/portfolio.css';
import projectPhoneImage from '../images/iphone8-happy-tummy-grill.png';
import projectDesktopImage from '../images/mac-happy-tummy-grill.png';


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <div className={styles.portfolioWrapper}>
                    <h1 className={styles.portfolioTitle}>PORTFOLIO</h1>
                    <div className={styles.projectSection}>
                        <div className={styles.projectContentWrapper}>
                            <h2 className={styles.projectTitle}>Happy Tummy Grill</h2>
                            <div className={styles.projectDescription}>
                                <h3 className={styles.projectDescriptionTitle}>Client Brief</h3>
                                <p className={styles.projectDescriptionText}>
                                    This client needed a website for their business to provide information about their menu and hours to their current customers
                                    and draw in potential customers from the area. I built a clean, easy-to-read website that
                                    showcases their menu items and provides answers to basic questions about their restaurant. 
                                    The website uses Google Analytics and since its launch, website traffic
                                    regularly spikes before lunch and dinner times.
                                </p>
                                <h3 className={styles.projectDescriptionTitle}>Services</h3>
                                <ul className={styles.projectDescriptionText}>
                                    <li className={styles.projectBullet}>Web Development with JavaScript, HTML5, CSS3</li>
                                    <li className={styles.projectBullet}>Telemetry with Google Analytics</li>
                                    <li className={styles.projectBullet}>Web Copywriting</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.projectMobileDisplay}>
                            <img className={styles.projectPhoneImage} src={projectPhoneImage} />
                            <div className={styles.projectButtons}>
                                <button className={styles.projectButton} type="button">Take a Look</button>
                                <button className={styles.projectButton} type="button">GitHub</button>
                            </div>
                        </div>
                        <div className={styles.projectDesktopDisplay}>
                            <img className={styles.projectDesktopImage} src={projectDesktopImage} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
