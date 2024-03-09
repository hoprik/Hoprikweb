"use client"
import Image from "next/image";
import Navbar from "../components/navbar";
import Page from "../components/page";
import About from "../components/about";
import Projectcart from "../components/projectcart";
import Socialbutton from "../components/socialbutton";
import Mobilenavbar from "../components/mobilenavbar";
import End from "../components/end";
import projects from '../public/projects.json'
import {SyntheticEvent, useEffect} from "react";

function getExactAge(date: any) {
  const dob: any = new Date(date);
  const today: any = new Date();
  const ageInMillis = today - dob;
  const ageInSeconds = ageInMillis / 1000;
  const ageInYears = ageInSeconds / (24 * 3600 * 365.25);
  return ageInYears.toFixed(3).toString().replace(".", ",")
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function getProjects(){
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



function Main(){
  const random = getRandomInt(100)
  const year = getExactAge("2008.10.10")
  const projects_array = getProjects();
  useEffect(() => {
    const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.1'}};

    // @ts-ignore
    fetch('http://localhost:3000/api/story', options)
        .then(response => response.json())
        .then(response => document.querySelector(".story_hopry").innerHTML = response["answer"])
        .catch(err => console.error(err));
  }, []);
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
            <Image
                src="/main.png"
                fill
                alt="Picture of the author"
            />
          </div>
        </div>
      </Page>
      <Page anchor="info">
        <div className="secondpage">
          <About url={"/terraia.png"}>
            Привет, меня зовут Хоприк. Мне {year} лет и увлекаюсь программированием. Я занимаюсь этим уже {"800 часов"} и владею такими языками и технологиями, как python, java, c#, frontend, js, react, express и другие. Кроме того, я интересуюсь другими IT-направлениями: 3D-моделированием, видеомонтажом, фотошопом.
          </About>
          <About url={random === 69? "/hoprik_pizdec.png": "/hoprik_normal.png"} right={false}>
            В реальной жизни меня зовут Валера. Я живу в Ярославле и учусь в 8 классе школы №9. Мне нравятся пельмени. Я отношусь нейтрально к фурри, политике и ЛГБТ-движению. Я не очень хороший собеседник: мои шутки кринжовые и про туалет. Сейчас я учусь в Коде Будущего, 3D-моделированию и программированию.
          </About>
          <p className="story_hopry">История</p>
        </div>
      </Page>
      <Page anchor="projects">
        <div className="thirdpage">
          {projects_array.map((project) => (
              <div className="thirdpage_floor">
                {
                  project.map((item: JSX.Element) => {
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