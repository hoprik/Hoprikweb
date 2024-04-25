"use client"

const WIDTH = document.documentElement.clientWidth
const HEIGHT = document.documentElement.clientHeight
let state = new Array(WIDTH);
function init() {
    for(let i = 0; i < WIDTH; i++) {
        state[i] = new Array(HEIGHT);
        for(let j = 0; j < HEIGHT; j++) {
            state[i][j] = Math.random() < 0.1;
        }
    }
    setInterval(game_loop, 33);
    console.log("canvas load")
}

function game_loop() {
    let n_neighbors;
    for(let i = 0; i < WIDTH; i++) {
        for(let j = 0; j < HEIGHT; j++) {
            n_neighbors = num_neighbors(i,j);
            state[i][j] = (state[i][j]) ?
                n_neighbors == 2 || n_neighbors == 3 :
                n_neighbors == 3;
        }
    }
    draw();
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

function draw() {
    let canvas = document.getElementById('bg');
    // @ts-ignore
    if(canvas.getContext) {
        // @ts-ignore
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,500,500);
        for(let i = 0; i < 500; i+=5) {
            for(let j = 0; j < 500; j+= 5) {
                if(state[i / 5][j / 5]) ctx.fillRect(i, j, 5, 5);
            }
        }
    }
}

export function Gameoflife() {
    // Based on http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
    const WIDTH = document.documentElement.clientWidth
    const HEIGHT = document.documentElement.clientHeight

    return (
        <>
            <canvas id="bg" width={WIDTH} height={HEIGHT} onLoad={e=>init()}/>
        </>
    );
}