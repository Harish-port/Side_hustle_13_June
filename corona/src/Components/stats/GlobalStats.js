import React, { Component } from 'react'
import * as Utils from '../../Services/ApiHelper';

export default class GlobalStats extends Component {
    constructor() {
        super();
        this.state = {
            globalData: [],
        }
    }
    componentDidMount() {
        Utils.getSummary().then(res => {
            const info = res.data.Global;
            this.setState({ globalData: info });
            console.log(info, "global")
        })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const {globalData} = this.state;
        console.log(globalData,"sdadadad")
        return (
            <div>
             <h2>CORONAVIRUS LIVE DATA AROUND THE WORLD</h2>
                <div className="container">
                    <table className="table table-striped mt-5">
                        <thead>
                            <tr>
                                <th>Total Cases </th>
                                <th>Total Deaths</th>
                                <th>Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
                <div className="refresh-button">
                    <button className="btn btn-primary mt-4">Refresh </button>
                </div>
            </div>
        )
    }
}
