import React from 'react';
import { Link } from 'react-router'

import styles from '../styles/index.css';

import backgroundImage from '../images/home-background.png';

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
                displayText: 'Contact',
                link: '/contact'
            }]
        };
    }

    render() {
        return (
            <section>
                <div className={styles.homeWrapper}>
                <div className={styles.backgroundImage}>
                    {/*<img className={styles.backgroundImage} src={backgroundImage} />*/}
                </div>
                <h1>Alisa Song</h1>
                <h2 className={styles.textShadow}><span className={styles.pinkText}>front-end developer</span> based in <span className={styles.pinkText}>Kirkland</span>, WA</h2>
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
