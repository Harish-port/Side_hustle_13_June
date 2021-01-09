import React, { Component } from 'react'
import * as Utils from '../../Services/ApiHelper';

export default class GlobalStats extends Component {
    constructor() {
        super();
        this.state = {
            globalData: [],
        }
    }
    getSummary() {
        Utils.getSummary().then(res => {
            const info = res.data;
            this.setState({ globalData: info });
        })
            .catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.getSummary();
    }
    render() {
        const { Global } = this.state.globalData;
        return (
            <div>
                <div>

                </div>
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
                                <td>{Global?.TotalConfirmed}</td>
                                <td>{Global?.TotalDeaths}</td>
                                <td>{Global?.TotalRecovered}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="refresh-button">
                    <button onClick={() => window.location.reload(false)}className="btn btn-primary mt-4">Refresh </button>
                </div>
            </div>
        )
    }
}
