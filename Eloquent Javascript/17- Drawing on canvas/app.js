/*-----------SVG---------------*/
let circle = document.querySelector("circle");
circle.setAttribute("fill", "red");
/*-----------The Canvas Element---------------*/
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "red";
context.fillRect(10, 10, 100, 50);

/*-----------Lines and Surfaces---------------*/

let cx = document.querySelector("#canvas2").getContext("2d");
cx.strokeStyle = "blue";
cx.strokeRect(5,5,50,50);
cx.lineWidth = 5;
cx.strokeRect(135, 5, 50, 50);
/*-----------Paths---------------*/

cx.beginPath();
for(let y = 100; y < 150; y += 10) {
    cx.moveTo(10, y);
    cx.lineTo(300, y);
}
cx.stroke();


cx.beginPath();
cx.moveTo(50,150)
cx.lineTo(10,200);
cx.lineTo(90,200);
cx.fill();
/*-----------Curves---------------*/

cx.beginPath();
cx.moveTo(10, 290);
    // control = (60,210) goal= (290,290)
cx.quadraticCurveTo(60,210,290,290);
cx.lineTo(60,210);
cx.closePath();
cx.stroke();

let ctx= document.querySelector("#canvas3").getContext("2d");

ctx.beginPath();
    // center=(50,50) radius = 40 angle= 0 to 7
ctx.arc(50, 50, 40, 0, 7);
    // center=(150,50) radius = 40 angle00 to 1/2 pi
ctx.arc(150, 50, 40, 0, 0.5 * Math.PI);
ctx.stroke()
/*-----------Drawing a Pie Chart---------------*/
const results = [
    {name: "Satisfied", count: 1043, color: "lightblue" },
    {name: "Neutral", count: 563 , color: "lightgreen" },
    {name: "Unsatisfied" , count: 510 , color: "pink"},
    {name: "No comment" , count: 175 , color: "silver" }
];
let ctx2 = document.querySelector("#canvas4").getContext("2d");
let total= results.reduce((sum, {count}) => sum + count, 0);
    //start at the top
let currentAngle= -0.5 * Math.PI;
for(let result of results) {
    let sliceAngle = (result.count / total) * 2 * Math.PI;
    ctx2.beginPath();
        //center= 100,100, radius = 100
        // from current angle clockwise bu slice's angle
    ctx2.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle;
    ctx2.lineTo(100,100);
    ctx2.fillStyle = result.color;
    ctx2.fill()
}
/*-----------Text---------------*/
ctx2.font="28px Georgia";
ctx2.textBaseline = "middle"
ctx2.fillStyle= "fuchsia";
ctx2.fillText("I can draw text, too", 10, 300)
/*-----------Images---------------*/
let ctx3 = document.querySelector("#canvas5").getContext("2d");
let cat= document.createElement("img");
cat.className="cat";
cat.src = "./cat.jpeg";
cat.addEventListener("load", ()=> {
    for (let x = 10; x < 200; x += 30) {
        ctx3.drawImage(img, x,10);
    }
});

let ctx4= document.querySelector("#canvas6").getContext("2d");
let img= document.createElement("img");
img.src= "./player.png";
let spriteW = 24, spriteH = 30;
img.addEventListener("load", () => {
    let cycle = 0;
    setInterval(() => {
        ctx4.clearRect(0, 0, spriteW, spriteH);
        ctx4.drawImage(img, 
            // source rectangle;
            cycle * spriteW, 0, spriteW, spriteH,
            // destination rectangle
            0, 0, spriteW, spriteH);
        cycle = (cycle + 1) % 8;
    }, 120)
})
/*-----------Transformation---------------*/
let ctx5= document.querySelector("#canvas7").getContext("2d");
ctx5.scale(3, .5);
ctx5.beginPath();
ctx5.arc(50,100,40,0,7);
ctx5.lineWidth=3;
ctx5.stroke();

function flipHorizontally(context, around){
    context.translate(around, 0);
    context.scale(-1,1);
    context.translate(-around,0)
}

img.addEventListener("load", ()=> {
    flipHorizontally(ctx4, 100 + spriteW /2);
    ctx4.drawImage(img, 0,0, spriteW, spriteH, 100, 0, spriteW, spriteH)
})

/*-----------Storing and Clearing Transformations---------------*/

let ctx6= document.querySelector("#canvas8").getContext("2d");

function branch(length, angle, scale){
    ctx6.fillRect(0,0,1,length);
    if(length < 8) return;
    ctx6.save();
    ctx6.translate(0, length);
    ctx6.rotate(-angle);
    branch(length*scale,angle,scale);
    ctx6.rotate(2 * angle);
    branch(length * scale, angle, scale);
    ctx6.restore();
}
ctx6.translate(300,0);
branch(60,0.5, 0.8);

/*-----------Back to The Game---------------*/
/*-----------Choosin a Graphics Interface---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/
/*-----------Something---------------*/