function Navbar() {
    return <div className="navbar">
        <a href="/" className="navbar_logo">Hoprik.ru</a>
        <div className="navbar_menu">
            <a href="#info" className="navbar_item">Обо мне</a>
            <a href="#projects" className="navbar_item">Проекты</a>
            <a href="#social" className="navbar_item">Контакты</a>
        </div>
        <button className="navbar_burger" onClick={open}>
            <div className="navbar_burger_line"/>
            <div className="navbar_burger_line"/>
            <div className="navbar_burger_line"/>
        </button>
    </div>
}

function open() {
    document.querySelector(".mobilenavbar").style.display = "flex";
}

export default Navbar