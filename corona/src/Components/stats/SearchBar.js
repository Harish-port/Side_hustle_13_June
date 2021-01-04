import React, { Component } from 'react'
import './Stats.css'
export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <h1>CORONA STATS AROUND THE WORLDD</h1>
                <div className="main">

                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Type the country name....." />
                    </div>
                </div>
            </div>
        )
    }
}
