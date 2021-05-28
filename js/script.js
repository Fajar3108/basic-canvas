const canvas = document.querySelector("#canvas");

const fullwidth = document.body.clientWidth;
const fullheight = document.body.clientHeight;

canvas.width = fullwidth;
canvas.height = fullheight;

let context = canvas.getContext('2d');

window.onload = () => {
    //#region Basic Canvas
    // // Line
    // context.moveTo(0, 0);
    // context.lineTo(100, 100);
    // context.stroke();

    // // Rect
    // context.beginPath();
    // context.rect(100, 100, 50, 50);
    // context.fillStyle='rgb(255,0,0)';
    // context.strokeStyle='blue';
    // context.fill();
    // context.stroke();
    
    // // Circle / Arc
    // context.beginPath();
    // context.arc(150, 150, 35, 0, Math.PI * 2);
    // context.fillStyle='rgb(0,255,0)';
    // context.fill();

    // // Text
    // context.font='24px sans-serif';
    // context.fillStyle='rgb(0,0,255)';
    // context.fillText("MaFI", 300, 300);
    
    // // Shorthand untuk rect
    // context.fillStyle='rgb(100,0,100)';
    // context.fillRect(300, 400, 100, 100);
    //#endregion

    //#region Stickman
    // //Head
    // const xStickman = 500;
    // context.beginPath();
    // context.arc(xStickman, 100, 50, 0, Math.PI*2);
    // context.strokeStyle='white';
    // context.stroke();
    // context.closePath();

    // // Body
    // context.moveTo(xStickman, 150);
    // context.lineTo(xStickman, 250);
    // context.stroke();

    // // Right Hand
    // context.moveTo(xStickman, 170);
    // context.lineTo(xStickman + 50, 200);
    // context.stroke();

    // // Left Hand
    // context.moveTo(xStickman, 170);
    // context.lineTo(xStickman - 50, 200);
    // context.stroke();

    // // Right Hand
    // context.moveTo(xStickman, 250);
    // context.lineTo(xStickman + 50, 300);
    // context.stroke();

    // // Left Hand
    // context.moveTo(xStickman, 250);
    // context.lineTo(xStickman - 50, 300);
    // context.stroke();
    
    //#endregion
    
    //#region Chart
    // let data = [];
    // for (let i = 0; i < 10; i++) {
    //     data.push(Math.floor(Math.random() * 100));
    // }

    // context.fillStyle= '#ddd';
    // context.fillRect(0,0, document.body.clientWidth,document.body.clientHeight);

    // context.fillStyle = 'blue';

    // data.forEach(item => {
    //     context.fillRect(50 + data.indexOf(item) * 100, 30, 50, item * 5);
    // });
    
    //#endregion
};