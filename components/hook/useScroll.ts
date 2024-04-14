"use client"
import { useEffect, useState } from "react";

const useScrollPosition = () => {
    const [isScroll, setScroll] = useState(false)

    const handleScroll = (e: any) => {
        const currentPosition = e.target.scrollTop;
        if (currentPosition == 0){
            setScroll(false)
        }
        else{
            setScroll(true)
        }
    };

    useEffect(() => {
        // Добавляем слушателя события скролла при монтировании компонента

        // @ts-ignore
        document.querySelector("body").addEventListener('scroll', handleScroll);

        return ()=>{
            // @ts-ignore
            document.querySelector("body").removeEventListener("scroll", handleScroll)
        }
    }, []); // Пустой массив зависимостей для вызова useEffect только при монтировании и размонтировании

    return isScroll;
};

export default useScrollPosition;