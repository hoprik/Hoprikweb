"use client"
import React, {useEffect, useState} from "react";

function random(max: number) {
    return Math.floor(Math.random() * max)
}

function Story(): React.JSX.Element {
    const [story, setStory] = useState("История")
    useEffect(() => {
        const options = {method: 'POST', headers: {'User-Agent': 'insomnia/8.6.1'}, body: JSON.stringify({random: random(100), randomElem:0})}
        // @ts-ignore
        fetch('/api/story', options)
            .then(response => response.json())
            .then((response: any) => setStory("История: "+response["answer"]))
            .catch(err => console.error(err));
    }, []);
    return <>{story}</>
}

export default Story