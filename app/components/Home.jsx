import React from 'react';
import { Link } from 'react-router';

import styles from '../styles/index.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    render() {
        return (
            <section className={this.props.myClass}>
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
                                <Link className={styles.link} to={route.link}>{route.displayText}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}
