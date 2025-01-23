import Image from "next/image";
import Navbar from "@/components/navbar";
import Page from "@/components/page";
import About from "@/components/about";
import Socialbutton from "@/components/socialbutton";
import Mobilenavbar from "@/components/mobilenavbar";
import End from "@/components/end";
import Wakatime from "@/components/wakatime"
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import ProjectCards from "@/components/projectcards";

function getExactAge(date: string) {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    dayjs.tz.setDefault("Europe/Moscow");

    const today = dayjs();
    const birthdateObj = dayjs(new Date(date).getTime()).utc().tz();
    return Math.trunc(today.diff(birthdateObj, "year", true) * Math.pow(10, 3)) / Math.pow(10, 3);
}


function Main() {
    const year = getExactAge("2008.10.10")
    return <>
        <Navbar/>
        <Mobilenavbar/>
        <main>
            <Page>
                <div className='mx-auto mt-[100px] w-1/2 flex flex-col'>
                    <Image className='mx-auto' src='/hoprik.png' width={192} height={192} alt='hoprik'/>
                    <p className='text-center text-white text-5xl font-black'>Hoprik</p>
                    <div id='info' className='border-2 p-10 rounded'><p className='text-3xl text-white'>Привет, меня зовут
                        Хоприк. Мне {year} лет и увлекаюсь программированием. Я занимаюсь этим
                        уже <Wakatime/> и владею такими языками и технологиями, как python, java, c#, frontend, js,
                        react, express и другие. Кроме того, я интересуюсь другими IT-направлениями: 3D-моделированием,
                        видеомонтажом, фотошопом.</p>
                    </div>
                    <p id='social' className='text-white text-3xl font-bold mt-5 mb-5'>Связь</p>
                    <a className='text-white hover:underline' href='https://t.me/hoprik'>Telegram</a>
                    <a className='text-white hover:underline' href='https://github.com/hoprik'>Github</a>
                    <a className='text-white hover:underline' href='https://mynickname.com/hoprik'>MyNickname</a>
                    <a className='text-white hover:underline' href='mailto:42morozov42@gmail.com'>Gmail</a>
                </div>
                <p id='projects' className='text-white text-3xl font-bold text-center mt-10'>Проекты</p>
                <ProjectCards/>
            </Page>
        </main>
        <End/>
    </>
}

export default Main