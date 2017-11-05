import React from 'react';
import { browserHistory } from 'react-router';

import styles from '../styles/header.css';
import globalStyles from '../styles/index.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            circlesDiamonds: this.getCirclesDiamonds(300),
            tabs: [{
                isActive: true,
                link: '/about',
                name: 'ABOUT'
            }, {
                isActive: false,
                link: '/portfolio',
                name: 'PORTFOLIO'
            }, {
                isActive: false,
                link: '/work-with-me',
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

    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    render() {
        return (
            <header>
                <div className={styles.headerNameWrapper} onClick={() => { browserHistory.push('/') }}>
                    <p className={styles.headerName}>Alisa Song</p>
                    <p className={styles.headerNameShort}>AS</p>
                </div>

                <ul className={styles.tabs}>
                    {this.state.tabs.map((tab, index) =>
                        <li className={[styles.tab, globalStyles.hvrGrow].join(' ')}
                            key={index}
                            onClick={() => { browserHistory.push(tab.link) }}>
                            {tab.name}
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
