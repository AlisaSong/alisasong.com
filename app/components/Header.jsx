import React from 'react';
import { browserHistory } from 'react-router';

import styles from '../styles/header.css';
import globalStyles from '../styles/index.css';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
                link: '/specialties',
                name: 'SPECIALTIES'
            }, {
                isActive: false,
                link: '/work-with-me',
                name: 'WORK WITH ME'
            }, {
                isActive: false,
                link: '/contact',
                name: 'CONTACT'
            }]
        };
    }

    render() {
        return (
            <header>
                <div className={styles.headerNameWrapper} onClick={() => { browserHistory.push('/') }}>
                    <p className={styles.headerName}>Alisa Song</p>
                    <p className={styles.headerNameShort}>AS</p>
                </div>

                <div>
                    <ul className={styles.tabs}>
                        {this.state.tabs.map((tab, index) =>
                            <li className={[styles.tab, globalStyles.hvrGrow].join(' ')}
                                key={index} 
                                onClick={() => { browserHistory.push(tab.link) }}>
                                {tab.name}
                            </li>
                        )}
                    </ul>
                </div>
            </header>
        );
    }
}
