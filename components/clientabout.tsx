"use client"
import About from "@/components/about";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function ClientAbout() {
    const random = getRandomInt(100)
    return <About url={random === 69? "/hoprik_pizdec.png": "/hoprik_normal.png"} right={false}>
        В реальной жизни меня зовут Валера. Я живу в Ярославле и учусь в 8 классе школы №9. Мне нравятся пельмени. Я отношусь нейтрально к фурри, политике и ЛГБТ-движению. Я не очень хороший собеседник: мои шутки кринжовые и про туалет. Сейчас я учусь в Коде Будущего, 3D-моделированию и программированию.
    </About>
}

export default ClientAbout;