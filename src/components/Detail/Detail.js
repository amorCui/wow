import React, { Component } from 'react';


export default class Home extends Component {

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        return (
            <div>
                <a>回到home</a>
            </div>
        )
    }
}
