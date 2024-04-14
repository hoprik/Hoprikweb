"use client"
import Projectcart from "@/components/projectcart";
import {useEffect, useState} from "react";

function getProjects(projects: any){
    const json = JSON.parse(JSON.stringify(projects));
    let array: any = [];
    let size: number = 3;
    let projects_array = [];
    Object.keys(json).forEach(item=>{
      const project = json[item];
      array.push(<Projectcart projectName = {project.name} projectDescription = {project.desc} projectTools = {project.tools} projectUrl={project.url} image={project.image}/>)
    })
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      projects_array[i] = array.slice(i * size, (i + 1) * size);
    }
    return projects_array;
  }
  

export default function ProjectCards() {
    const [projectcards, setProjectsCard] = useState("0")
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'User-Agent': 'insomnia/8.6.1'
            }
        };

        fetch('/api/v1/projects/getProjects', options)
            .then(response => response.json())
            .then(response => setProjectsCard(response))
            .catch(err => console.error(err));
    }, []);
    return <>
    {getProjects(projectcards).map((project, i) => (
        <div className="thirdpage_floor" key={i}>
        {
            project.map((item: JSX.Element) => {
            return item
            })
        }
        </div>
    ))}
    </>
}