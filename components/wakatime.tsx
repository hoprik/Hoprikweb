"use client"
import {useEffect, useState} from "react";

export default function Wakatime() {
    const [wakaTime, setWakaTime] = useState("800")
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'User-Agent': 'insomnia/8.6.1'
            }
        };

        fetch('/api/v1/timecodding', options)
            .then(response => response.json())
            .then(response => setWakaTime(response["time"]))
            .catch(err => console.error(err));
    }, []);
    return <>{wakaTime}</>
}