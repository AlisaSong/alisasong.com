import React from 'react';

import { constants } from '../constants';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previousLocation: props.location.pathname
        };
    }

    componentWillReceiveProps(nextProps) {
        window[constants.previousLocation] = this.state.previousLocation;

        this.setState({
            previousLocation: nextProps.location.pathname
        });
    }

    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}
