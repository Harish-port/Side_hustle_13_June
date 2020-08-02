import React, { Component } from 'react';
import * as Utils from '../Services/ApiHelper';

export default class Stats extends Component {
    constructor() {
        super();
        this.state = {
            stats: ""
        }
    }

    componentDidMount() {
        Utils.getStatsAll().then(res => {
            const info = res.data;
            this.setState({ stats: info });
        })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { stats } = this.state
        return (
            <div>
                <h1>{}</h1>
            </div>
        )
    }
}
