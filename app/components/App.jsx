import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            <main>
                <header>Alisa Song</header>
                {this.props.children}
            </main>
        );
    }
}
