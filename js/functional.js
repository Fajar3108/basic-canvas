const canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');
let background = document.querySelector("#image");
let character = new Image();
let index = 0;

const charPath = "/sprites/cowboy";
character.src = `${charPath}/run/Run__00${index}.png`;

//  Set Canvas Size
const fullwidth = document.body.clientWidth;
const fullheight = document.body.clientHeight;

canvas.width = fullwidth;
canvas.height = fullheight;

let charData = {
    image: character,
    x: 200,
    y: 370,
    width: 415 / 2.2,
    height: 507 / 2.2,
    dx: 1,
}

let bgData = {
    image: background,
    x: 0,
    y: 0,
    width: canvas.width,
    height: canvas.height,
}

const drawImage = ({image, x, y, width, height}) => {
    context.drawImage(image, x, y, width, height);
}

const move = (speed, d) => {
    let batas = 0;
    setInterval(() => {
        if (batas > speed) return;
        batas++;
        drawImage(bgData);
        drawImage(charData);
        
        charData.x += d;
    }, 1)
}

window.onload = () => {
    character.src = `${charPath}/run/Run__00${index}.png`;
    drawImage(bgData);
    drawImage(charData);

    const speed = 20;

    window.addEventListener('keydown', (e) => {
        if (e.code === "ArrowRight") {
            index++;

            if (index > 9) {
                index = 0;
            }

            character.src = `${charPath}/run/Run__00${index}.png`;
            if (charData.x > canvas.width - 400) return;
            move(speed, 1);
        } 

        if (e.code === "ArrowLeft") {
            index--;

            if (index < 0) {
                index = 9;
            }

            character.src = `${charPath}/run/Run__00${index}.png`;
            if (charData.x < 150) return;
            move(speed, -1);
        }
    })
}