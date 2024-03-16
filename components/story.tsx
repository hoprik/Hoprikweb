"use client"
import React, {useEffect, useState} from "react";
import storyJson from "../public/story.json"

function random(max: number) {
    return Math.floor(Math.random() * max)
}

function Story(): React.JSX.Element {
    const [story, setStory] = useState("История")
    useEffect(() => {
        const json = JSON.parse(JSON.stringify(storyJson))
        const randomStoryType = random(100)
        console.log(randomStoryType)
        if (randomStoryType < 60) {
            setStory(json["normal"][random(json["normal"].length)])
        }
        else if (randomStoryType > 60 && randomStoryType < 90){
            setStory(json["funny"][random(json["funny"].length)])
        }
        else{
            setStory(json["pizec"][random(json["pizec"].length)])
        }
    }, []);
    return <>{story}</>
}

export default Story