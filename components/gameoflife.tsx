"use client"

import {useEffect, useRef} from "react";

let WIDTH: number;
let HEIGHT: number;
let state: Array<Array<boolean>>;
function init(canvas: HTMLCanvasElement) {
    for(let i = 0; i < WIDTH; i++) {
        state[i] = new Array(HEIGHT);
        for(let j = 0; j < HEIGHT; j++) {
            state[i][j] = Math.random() < 0.07;
        }
    }
    setInterval(()=>game_loop(canvas), 100);
}

function game_loop(canvas: HTMLCanvasElement) {
    let n_neighbors;
    for(let i = 0; i < WIDTH/2; i++) {
        for(let j = 0; j < HEIGHT/5; j++) {
            n_neighbors = num_neighbors(i,j);
            state[i][j] = (state[i][j]) ?
                n_neighbors == 2 || n_neighbors == 3 :
                n_neighbors == 3;
        }
    }
    draw(canvas);
}

function num_neighbors(x: number, y: number) {
    let total = 0;
    // Check top
    if(y > 0) {
        total += state[x][y - 1] ? 1 : 0;
    }
    // Check bottom
    if(y < HEIGHT - 1) {
        total += state[x][y + 1] ? 1 : 0;
    }
    // Check left
    if(x > 0) {
        total += state[x - 1][y] ? 1 : 0;
    }
    // Check right
    if(x < WIDTH - 1) {
        total += state[x + 1][y] ? 1 : 0;
    }
    // Check top-left
    if(y > 0 && x > 0) {
        total += state[x - 1][y -1] ? 1 : 0;
    }
    // Check top-right
    if(y > 0 && x < WIDTH - 1) {
        total += state[x + 1][y - 1] ? 1 : 0;
    }
    // Check bottom-left
    if(y < HEIGHT - 1 && x > 0) {
        total += state[x - 1][y + 1] ? 1 : 0;
    }
    // Check bottom-right
    if(y < HEIGHT - 1 && x < WIDTH - 1) {
        total += state[x + 1][y + 1] ? 1 : 0;
    }
    return total;
}

function draw(canvas: HTMLCanvasElement) {
    // @ts-ignore
    if(canvas.getContext) {
        // @ts-ignore
        var ctx = canvas.getContext('2d');
        // @ts-ignore
        ctx.clearRect(0,0,WIDTH,HEIGHT);
        for(let i = 0; i < WIDTH; i+=5) {
            for(let j = 0; j < HEIGHT; j+= 5) {
                if(state[i / 5][j / 5]) { // @ts-ignore
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
                    // @ts-ignore
                    ctx.fillRect(i, j, 5, 5);
                }
            }
        }
    }
}

export function Gameoflife() {
    // Based on http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvas.current != null){
            WIDTH = document.documentElement.clientWidth
            HEIGHT = document.documentElement.clientHeight
            state = new Array(WIDTH);
            const ctx = canvas.current.getContext('2d')
            if (ctx){
                ctx.clearRect(0,0, WIDTH, HEIGHT)
            }
            canvas.current.width = WIDTH;
            canvas.current.height = HEIGHT;
            init(canvas.current)
        }

    }, []);

    return (
        <>
            <canvas className='fixed top-0 left-0 -z-10' ref={canvas}/>
        </>
    );
}