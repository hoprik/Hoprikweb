"use client"
import {useState} from "react";

export default function ProjectCards(){
    const [projects, setProjects] = useState()

    const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.1'}};

    fetch('http://localhost:3000/api/v1/getAllProjects', options)
        .then(response => response.json())
        .then(response => setProjects(response))
        .catch(err => console.error(err));

    return <><p>{}</p></>
}