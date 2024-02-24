import Navbar from "../components/navbar";
import Page from "../components/page";
import About from "../components/about";
import Projectcart from "../components/projectcart";
import Socialbutton from "../components/socialbutton";
import Mobilenavbar from "../components/mobilenavbar";
import projects from '../assets/projects.json'

function getExactAge(date) {
    const dob = new Date(date);
    const today = new Date(); 
    const ageInMillis = today - dob; 
    const ageInSeconds = ageInMillis / 1000; 
    const ageInYears = ageInSeconds / (24 * 3600 * 365.25); 
    return ageInYears.toFixed(3) 
}

function Main(){
    const year = getExactAge("2008.10.10")
    const json = JSON.parse(JSON.stringify(projects));
    const projects_array = []
    Object.keys(json).forEach(item=>{
        const project = json[item];
        projects_array.push(<Projectcart projectName = {project.name} projectDescription = {project.desc} projectTools = {project.tools} projectUrl={project.url} image={project.image}/>)
    })
    console.log(projects_array);
    
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                <div className="firstpage">
                    <div className="firstpage_logo">
                        <h1 className="firstpage_logo_h1">Hoprik.ru</h1>
                        <a href="#info" className="firstpage_logo_button">Иследовать</a>
                    </div>
                    <div className="firstpage_image">
                        <div className="firstpage_image_image"></div>
                    </div>
                </div>
            </Page>
            <Page anchor="info">
                <div className="secondpage">
                    <About>
                        Привет, меня зовут Хоприк. Мне {year} лет и увлекаюсь программированием. Я занимаюсь этим уже {"800 часов"} и владею такими языками и технологиями, как python, java, c#, frontend, js, react, express и другие. Кроме того, я интересуюсь другими IT-направлениями: 3D-моделированием, видеомонтажом, фотошопом.

                    </About>
                    <About right={false}>
                        В реальной жизни меня зовут Валера. Я живу в Ярославле и учусь в 8 классе школы №9. Мне нравятся пельмени. Я отношусь нейтрально к фурри, политике и ЛГБТ-движению. Я не очень хороший собеседник: мои шутки кринжовые и про туалет. Сейчас я учусь в Коде Будущего, 3D-моделированию и программированию.
                    </About>
                </div>
            </Page>
            <Page anchor="projects">
                <div className="thirdpage">
                    <div className="thirdpage_floor">
                    {projects_array.map((project) => (
                        project 
                    ))}
                    </div>
                </div>
            </Page>
            <Page anchor="social">
                <div className="fourthpage">
                    <div className="fourthpage_floor">
                        <Socialbutton network="youtube" href="https://www.youtube.com/@hoprik0059" text="Youtube" color="#FF0000"/>
                        <Socialbutton network="email" href="mailto:42morozov42@gmail.com" text="Почта" color="#FF8A00"/>
                    </div>
                    <div className="fourthpage_floor">
                        <Socialbutton network="github" href="https://www.github.com/hoprik" text="GitHub" color="#5E5E5E"/>
                        <Socialbutton network="vk" href="https://vk.com/valeramorozov2016" text="Вконтакте" color="#00A3FF"/>
                    </div>
                    <div className="fourthpage_floor">
                        <Socialbutton network="telegram" href="https://t.me/hoprik" text="Telegram" color="#0071F5"/>
                        <Socialbutton href="https://mynickname.com/id1782903" text="My nickname" color="#B14000"/>
                    </div>
                </div>
            </Page>
        </main>
    </>
}

export default Main