const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const descreaseBtn = document.getElementById('descrease');
const sizeEl = document.getElementById('size');
const clear = document.getElementById('clear');
const colorEl = document.getElementById('color');
const ctx = canvas.getContext("2d");

let size = 5;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();   
}

function drawLine(x1, y1, x2,  y2){
    ctx.beginPath();
    ctx.moveTo(x1,y2);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', (e)=>{
    isPressed = false;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mousemove', (e)=>{
        if(isPressed){
            const x2 = e.offsetX;
            const y2 = e.offsetY;

            drawCircle(x2, y2);
            drawLine(x, y,x2,y2);

            x = x2;
            y = y2;
        }
});

increaseBtn.addEventListener('click', ()=>{
    size += 5;

    if(size > 50){
        size = 50;
    }

    updateSizeOnScreen();
});

descreaseBtn.addEventListener('click', ()=>{
    size -= 5;

    if(size < 5){
        size = 5;
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e)=>{
    color = e.target.value;
});

clear.addEventListener('click', (e)=>{
    ctx.clearRect(0,0, canvas.width, canvas.height);
});

function updateSizeOnScreen(){
    sizeEl.innerHTML = size;
}