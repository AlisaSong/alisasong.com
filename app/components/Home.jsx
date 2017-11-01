import React from 'react';
import { Link } from 'react-router';

import About from './About';
import Portfolio from './Portfolio';

import { constants } from '../constants';

import styles from '../styles/index.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previousLocation: window[constants.previousLocation],
            routes: [{
                displayText: 'About',
                link: '/about'
            }, {
                displayText: 'Portfolio',
                link: '/portfolio'
            }, {
                displayText: 'Work With Me',
                link: '/work-with-me'
            }, {
                displayText: 'Contact',
                link: '/contact'
            }]
        };
    }

    getSectionClass() {
        let sectionClass = '';

        if (this.props.move) {
            sectionClass = this.props.move;
        } else if (this.state.previousLocation && this.state.previousLocation !== constants.pathHome) {
            sectionClass = styles.sectionMoveInFromTop;
        }

        return sectionClass;
    }

    render() {
        return (
            <div>
                {this.state.previousLocation === constants.pathAbout &&
                    <About move={styles.sectionMoveOutDown} />
                }
                {this.state.previousLocation === constants.pathPortfolio &&
                    <Portfolio move={styles.sectionMoveOutDown} />
                }
                <section className={this.getSectionClass()}>
                    <div className={styles.homeWrapper}>
                        <div className={styles.backgroundImage}></div>
                        <h1 className={styles.homeTitle}>Alisa Song</h1>
                        <h2 className={[styles.textShadow, styles.homeDescription].join(' ')}>
                            <span className={styles.pinkText}>front-end developer</span>
                            <span> based in </span>
                            <span className={styles.pinkText}>Kirkland</span>
                            <span> , WA</span>
                        </h2>
                        <ul className={styles.navigation}>
                            {this.state.routes.map((route, index) =>
                                <li className={styles.textShadow}
                                    key={index}>
                                    <Link className={styles.link}
                                        to={route.link}>
                                        {route.displayText}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
