import React from 'react';
import { browserHistory } from 'react-router';

import { constants } from '../constants';

import fontAwesome from 'font-awesome/css/font-awesome.css';
import styles from '../styles/header.css';
import globalStyles from '../styles/index.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            circlesDiamonds: this.getCirclesDiamonds(300),
            sites: [{
                icon: 'github',
                link: 'https://github.com/AlisaSong'
            }, {
                icon: 'linkedin',
                link: 'https://www.linkedin.com/in/alisa-song-5545b14b/'
            }],
            tabs: [{
                isActive: true,
                link: constants.pathAbout,
                name: 'ABOUT'
            }, {
                isActive: false,
                link: constants.pathPortfolio,
                name: 'PORTFOLIO'
            }, {
                isActive: false,
                link: constants.pathWorkWithMe,
                name: 'WORK WITH ME'
            }]
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

    getFontClass(icon) {
        return [globalStyles.faLink, fontAwesome.fa, fontAwesome['fa-' + icon]].join(' ');
    }

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <header>
                <div className={styles.headerNameWrapper} onClick={() => { browserHistory.push(constants.pathHome) }}>
                    <p className={styles.headerName}>Alisa Song</p>
                    <p className={styles.headerNameShort}>AS</p>
                </div>

                <ul className={styles.tabs}>
                    {this.state.tabs.map((tab, index) =>
                        <li className={styles.tab + ' ' + globalStyles.hvrGrow}
                            key={index}
                            onClick={() => { browserHistory.push(tab.link) }}>
                            {tab.name}
                        </li>
                    )}
                    {this.state.sites.map((site, index) =>
                        <li className={styles.tab + ' ' + globalStyles.hvrGrow}
                            key={index}>
                            <i className={this.getFontClass(site.icon)}
                               onClick={() => { window.open(site.link, '_blank') }} />
                        </li>
                    )}
                </ul>

                <div className={styles.circlesDiamonds}>
                    {this.state.circlesDiamonds.map((shape, index) =>
                        <span className={shape.cycle}
                            key={index}>
                            {shape.display}
                        </span>
                    )}
                </div>
            </header>
        );
    }
}
