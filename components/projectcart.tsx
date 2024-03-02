import Icon from "./icons";
function ProjectCart(props: any) {
    const { projectName = "Project name", projectDescription = "Project description", projectTools = ["google"], projectUrl, image=null } = props;
    const tools:any = [];
    projectTools.forEach((tool:string) =>{
        tools.push(<Icon nameIcon={tool}/>)
    })
    return <div className="projectcart">
        <div className="projectcart_image"><img className="projectcart_image_img" src={image}/></div>
        <p className="projectcart_name">{projectName}</p>
        <hr className="projectcart_separator"/>
        <p className="projectcart_description">{projectDescription}</p>
        <hr className="projectcart_separator"/>
        <div className="projectcart_devitems">
            {tools.map((tool: JSX.Element) => (
                tool
            ))}
        </div>
        <hr className="projectcart_separator"/>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="projectcart_link">Подробнее</a>
    </div>
}

export default ProjectCart;