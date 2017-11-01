import React from 'react';

import styles from '../styles/word-animator.css';

export default class WordAnimator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            delay: props.delay,
            letters: this.getLetters(props.word)
        };
    }

    getDelay() {
        this.state.delay += 50;
        return { 'animationDelay': this.state.delay + 'ms' };
    }

    getLetters(word) {
        let list = [];
        for (let i = 0; i < word.length; i++) {
            list.push(word[i]);
        }
        return list;
    }

    render() {
        return (
            <span>
                {this.state.letters.map((letter, index) =>
                    <span className={styles.pinkText}
                        key={index}
                        style={this.getDelay()}>
                        {letter}
                    </span>
                )}
            </span>
        );
    }
}
