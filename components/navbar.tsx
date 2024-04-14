"use client"

// import {useEffect, useState} from "react";
//
// const useScrollPosition = () => {
//     const [isScroll, setScroll] = useState(false)
//
//     const handleScroll = (e: any) => {
//         const currentPosition = e.target.scrollTop;
//         if (currentPosition == 0){
//             setScroll(false)
//         }
//         else{
//             setScroll(true)
//         }
//     };
//
//     useEffect(() => {
//         // Добавляем слушателя события скролла при монтировании компонента
//
//         // @ts-ignore
//         document.addEventListener('scroll', handleScroll);
//
//         return ()=>{
//             // @ts-ignore
//             document.removeEventListener("scroll", handleScroll)
//         }
//     }, []); // Пустой массив зависимостей для вызова useEffect только при монтировании и размонтировании
//
//     return isScroll;
// };


function Navbar() {
    // const elem = useScrollPosition()
    // console.log(elem)
    return <div className="navbar flymode">
        <a href="/" className="navbar_logo">Hoprik</a>
        <div className="navbar_menu">
            <a href="/#info" className="navbar_item">Обо мне</a>
            <a href="/#projects" className="navbar_item">Проекты</a>
            <a href="/#social" className="navbar_item">Контакты</a>
            <a className="navbar_item" href="/url">Сократитель ссылок</a>
        </div>
        <button className="navbar_burger" onClick={open}>
            <div className="navbar_burger_line"/>
            <div className="navbar_burger_line"/>
            <div className="navbar_burger_line"/>
        </button>
    </div>
}

function open() {
    // @ts-ignore
    document.querySelector(".mobilenavbar").style.display = "flex";
}

export default Navbar