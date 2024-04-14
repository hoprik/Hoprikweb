import Image from "next/image";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import About from "@/components/about";
import Socialbutton from "@/components/socialbutton";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";
import projects from '@/public/projects.json'
import Story from "@/components/story"
import Wakatime from "@/components/wakatime"
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import ProjectCards from "@/components/projectcards";
import ClientAbout from "@/components/clientabout";
function getExactAge(date: any) {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    dayjs.tz.setDefault("Europe/Moscow");

    const today = dayjs();
    const birthdateObj = dayjs(new Date(date).getTime()).utc().tz();
    return Math.trunc(today.diff(birthdateObj, "year", true) * Math.pow(10, 3)) / Math.pow(10, 3);
}



function Main(){
    const year = getExactAge("2008.10.10")
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
                            style={{borderRadius: "10px"}}
                        />
                    </div>
                </div>
            </Page>
            <Page anchor="info">
                <div className="secondpage">
                    <About url={"/terraia.png"}>
                        Привет, меня зовут Хоприк. Мне {year} лет и увлекаюсь программированием. Я занимаюсь этим уже <Wakatime/> и владею такими языками и технологиями, как python, java, c#, frontend, js, react, express и другие. Кроме того, я интересуюсь другими IT-направлениями: 3D-моделированием, видеомонтажом, фотошопом.
                    </About>
                    <ClientAbout/>
                    <About url="/haha.png" >
                        <Story/>
                    </About>
                </div>
            </Page>
            <Page anchor="projects">
                <div className="thirdpage">
                    <ProjectCards/>
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