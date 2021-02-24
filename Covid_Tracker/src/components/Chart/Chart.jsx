import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
export default function Chart() {
    const [dailyData,setDailyData] =useState({});
    useEffect(()=>{
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    })
    return (
        <div>
        </div>
    )
}
