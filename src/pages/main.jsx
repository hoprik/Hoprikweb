import Navbar from "../components/navbar";
import Page from "../components/page";
import About from "../components/about";
import Projectcart from "../components/projectcart";
import Socialbutton from "../components/socialbutton";
import Mobilenavbar from "../components/mobilenavbar";
import End from "../components/end";
import projects from '../assets/projects.json'
import mainImg from "../assets/main.png"
import terraia from "../assets/terraia.png"
import hoprikNormal from "../assets/hoprik_normal.png"
import hoprikPizedec from "../assets/hoprik_pizdec.png"

function getExactAge(date) {
    const dob = new Date(date);
    const today = new Date(); 
    const ageInMillis = today - dob; 
    const ageInSeconds = ageInMillis / 1000; 
    const ageInYears = ageInSeconds / (24 * 3600 * 365.25); 
    return ageInYears.toFixed(3).toString().replace(".", ",")
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



function Main(){
    const random = getRandomInt(100)
    console.log(random)
    const year = getExactAge("2008.10.10")
    const json = JSON.parse(JSON.stringify(projects));
    let array = [];
    let size = 3;
    let projects_array = [];
    Object.keys(json).forEach(item=>{
        const project = json[item];
        array.push(<Projectcart projectName = {project.name} projectDescription = {project.desc} projectTools = {project.tools} projectUrl={project.url} image={project.image}/>)
    })
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
        projects_array[i] = array.slice(i * size, (i + 1) * size);
    }
    console.log(projects_array)
    
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                <div className="firstpage">
                    <div className="firstpage_logo">
                        <h1 className="firstpage_logo_h1">Hoprik</h1>
                        <a href="#info" className="firstpage_logo_button">Исследовать</a>
                    </div>
                    <div className="firstpage_image">
                        <img className="firstpage_image_image" style={{backgroundImage: `url(${mainImg})`}}/>
                    </div>
                </div>
            </Page>
            <Page anchor="info">
                <div className="secondpage">
                    <About url={terraia}>
                        Привет, меня зовут Хоприк. Мне {year} лет и увлекаюсь программированием. Я занимаюсь этим уже {"800 часов"} и владею такими языками и технологиями, как python, java, c#, frontend, js, react, express и другие. Кроме того, я интересуюсь другими IT-направлениями: 3D-моделированием, видеомонтажом, фотошопом.

                    </About>
                    <About url={random === 69? hoprikPizedec: hoprikNormal} right={false}>
                        В реальной жизни меня зовут Валера. Я живу в Ярославле и учусь в 8 классе школы №9. Мне нравятся пельмени. Я отношусь нейтрально к фурри, политике и ЛГБТ-движению. Я не очень хороший собеседник: мои шутки кринжовые и про туалет. Сейчас я учусь в Коде Будущего, 3D-моделированию и программированию.
                    </About>
                </div>
            </Page>
            <Page anchor="projects">
                <div className="thirdpage">
                    {projects_array.map((project) => (
                        <div className="thirdpage_floor">
                            {
                                project.map((item) => {
                                    return item
                                })
                            }
                        </div>
                    ))}
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
        <End/>
    </>
}

export default Main