import React from 'react';

import styles from '../index.css';

import backgroundImage from '../images/home-background.png';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routes: [{
                displayText: 'Home',
                link: 'home'
            }, {
                displayText: 'About',
                link: 'about'
            }, {
                displayText: 'Portfolio',
                link: 'portfolio'
            }, {
                displayText: 'Contact',
                link: 'contact'
            }]
        };
    }

    render() {
        return (
            <section>
                <div className={styles.backgroundImageWrapper}>
                    <img className={styles.backgroundImage} src={backgroundImage} />
                </div>
                <h1>Alisa Song</h1>
                <h2>front-end developer based in Kirkland, WA</h2>
                <ul className={styles.navigation}>
                    {this.state.routes.map((route, index) =>
                        <li key={index}>{route.displayText}</li>
                    )}
                </ul>
            </section>
        );
    }
}
