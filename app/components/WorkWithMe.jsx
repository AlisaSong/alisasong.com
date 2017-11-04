import React from 'react';

import Header from './Header';
import Home from './Home';

import { constants } from '../constants';

import globalStyles from '../styles/index.css';
import styles from '../styles/portfolio.css';


export default class WorkWithMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnimating: window[constants.previousLocation] === constants.pathHome
        };
    }

    getSectionClass() {
        let sectionClass = '';

        if (this.props.move) {
            sectionClass = this.props.move;
        } else if (this.state.isAnimating) {
            sectionClass = globalStyles.sectionMoveInFromBottom;
        }

        return sectionClass;
    }


    render() {
        return (
            <div>
                {this.state.isAnimating &&
                    <Home move={globalStyles.sectionMoveOutUp} />
                }
                <section className={this.getSectionClass()}>
                    <Header />
                    <span>WORK WITH ME</span>
                </section>
            </div >
        );
    }
}
