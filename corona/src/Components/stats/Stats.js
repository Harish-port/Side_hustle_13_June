import React, { Component } from 'react';
import * as Utils from '../../Services/ApiHelper';

export default class Stats extends Component {
    constructor() {
        super();
        this.state = {
            stats: []
        }
    }

    componentDidMount() {
        Utils.getCountryList().then(res => {
            const info = res.data;
            this.setState({ stats: info });
            console.log(info, "reposnes")
        })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { stats } = this.state
        return (
            <div>
                {stats.map((item, i) =>
                    <ul key={i}>
                        <li>
                            {item.Country}
                        </li>
                    </ul>
                )}
            </div>
        )
    }
}
