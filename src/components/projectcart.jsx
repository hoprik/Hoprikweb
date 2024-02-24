import Icon from "./icons";
import * as icons from "devicons-react"
function ProjectCart(props) {
    const { projectName = "Project name", projectDescription = "Project description", projectTools = ["github", "python", "java"], projectUrl, image } = props;
    const tools = [];
    projectTools.forEach(tool =>{
        tools.push(<Icon nameIcon={tool}/>)
    })
    return <div className="projectcart">
        <div className="projectcart_image"></div>
        <p className="projectcart_name">{projectName}</p>
        <hr className="projectcart_separator"/>
        <p className="projectcart_description">{projectDescription}</p>
        <hr className="projectcart_separator"/>
        <div className="projectcart_devitems">
            {tools.map((tool) => (
                tool
            ))}
        </div>
        <hr className="projectcart_separator"/>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="projectcart_link">Подробнее</a>
    </div>
}

export default ProjectCart;