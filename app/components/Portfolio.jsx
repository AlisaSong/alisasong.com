import React from 'react';

import Header from './Header';

import styles from '../styles/portfolio.css';


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
                <h1 className={styles.portfolioTitle}>PORTFOLIO</h1>
                <div className={styles.projectSection}>
                    <h2 className={styles.projectTitle}>Happy Tummy Grill</h2>
                    <div className={styles.clientBrief}>
                        <h3 className={styles.projectDescriptionTitle}>Client Brief</h3>
                        <p className={styles.projectDescriptionText}></p>
                    </div>
                </div>
            </section>
        );
    }
}
