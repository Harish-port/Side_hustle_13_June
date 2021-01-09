import React, { Component } from 'react'
import './Stats.css'
import * as Utils from '../../Services/ApiHelper';
import GlobalStats from './GlobalStats';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            stats: [],
            searchValue: ""
        }
    }

    componentDidMount() {
        Utils.getCountryList().then(res => {
            const info = res.data;
            this.setState({ stats: info });
            console.log(info, "statasi")
        })
            .catch(error => {
                console.log(error)
            })
    }
    handleChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }
    render() {
        const { stats, searchValue } = this.state

        return (
            <div>
                <div className="main">
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" onChange={this.handleChange} value={this.state.searchValue} placeholder="Type the country name....." />
                    </div>

                    <div className="suggestions">
                        {stats.filter((val) => {
                            if (searchValue == "") {
                                return val
                            } else if (val.Country.toLowerCase().includes(searchValue.toLowerCase())) {
                                return val
                            }
                        }).map((item, i) => {
                            if (searchValue == '') {
                                return null
                            } else
                                return (
                                    <div key={i}>
                                        <p>
                                            <i className="fa fa-map-marker" aria-hidden="true"></i><span className="search-list ml-2">
                                                {item.Country}
                                            </span>
                                        </p>
                                    </div>
                                )
                        }
                        ) }
                    </div>
                </div>
                <GlobalStats/>
            </div>
        )
    }
}
