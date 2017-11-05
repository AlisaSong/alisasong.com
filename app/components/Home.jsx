import React from 'react';
import { Link } from 'react-router';

import About from './About';
import Portfolio from './Portfolio';
import WorkWithMe from './WorkWithMe';

import { constants } from '../constants';

import fontAwesome from 'font-awesome/css/font-awesome.css';
import styles from '../styles/index.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previousLocation: window[constants.previousLocation],
            routes: [{
                displayText: 'About',
                link: constants.pathAbout
            }, {
                displayText: 'Portfolio',
                link: constants.pathPortfolio
            }, {
                displayText: 'Work With Me',
                link: constants.pathWorkWithMe
            }],
            sites: [{
                icon: 'github',
                link: 'https://github.com/AlisaSong'
            }, {
                icon: 'linkedin',
                link: 'https://www.linkedin.com/in/alisa-song-5545b14b/'
            }]
        };
    }

    getFontClass(icon) {
        return [styles.faLink, fontAwesome.fa, fontAwesome['fa-' + icon]].join(' ');
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
                {this.state.previousLocation === constants.pathWorkWithMe &&
                    <WorkWithMe move={styles.sectionMoveOutDown} />
                }
                <section className={this.getSectionClass()}>
                    <div className={styles.homeWrapper}>
                        <div className={styles.backgroundImage}></div>
                        <h1 className={styles.homeTitle}>Alisa Song</h1>
                        <h2 className={[styles.textShadow, styles.homeDescription].join(' ')}>
                            <span className={styles.pinkText}>front-end developer</span>
                            <span> based in </span>
                            <span className={styles.pinkText}>Kirkland</span>
                            <span>, WA</span>
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
                        <ul className={styles.navigation}>
                            {this.state.sites.map((site, index) =>
                                <li key={index}>
                                    <i className={this.getFontClass(site.icon)}
                                       onClick={() => { window.open(site.link, '_blank') }} />
                                </li>
                            )}
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
