/*-------Event Handlers-------*/
window.addEventListener("click", ()=> {
    console.log("You knocked?")
})
/*-------Event and DOM Nodes-------*/

let button = document.querySelector("button");
button.addEventListener("click", ()=> {
    console.log("Button clicked");
})

let button2 = document.querySelector(".btn2");
function once(){
    console.log("Done.");
    button2.removeEventListener("click", once);
}

button2.addEventListener("click", once);
/*-------Event Objects-------*/

let button3 = document.querySelector(".btn3");
button3.addEventListener("mousedown", event => {
    if(event.button == 0){
        console.log("Left Button");
    } else if(event.button == 1) {
        console.log("Middle button");
    } else if(event.button == 2) {
        console.log("Right button")
    }
});
/*-------Propagation-------*/

let para= document.querySelector(".p1");
let button4 = document.querySelector(".btn4");
para.addEventListener("mousedown", ()=> {
    console.log("Handler for paragraph.");
});
button4.addEventListener("mousedown", event => {
    console.log("Handler for button.");
    if(event.button == 2) event.stopPropagation();
});

document.body.addEventListener("click", event => {
    if(event.target.nodeName == "BUTTON"){
        console.log("Clicked", event.target.textContent);
    }
});
/*-------Default Actions-------*/
let link = document.querySelector("a");
link.addEventListener("click", event=> {
    console.log("Nope.");
    event.preventDefault();
})

/*-------Key Events-------*/
window.addEventListener("keydown", event => {
    if(event.key == "v"){
        document.body.style.background = "violet";
    }
});
window.addEventListener("keyup", event => {
    if(event.key == "v"){
        document.body.style.background = "";
    }
})

window.addEventListener("keydown", event=> {
    let counter=0;
    if(event.key == " "&& event.ctrlKey){
        counter++;
    
        console.log(counter + "Continuing!")
    }
});
/*-------Pointer Events-------*/
    // Mouse Clicks
let drawing = document.querySelector(".draw");
/*window.addEventListener("click", event => {
    let dot = document.createElement("div");
    
    dot.className = "dot";
    dot.style.left = (event.pageX-4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    drawing.appendChild(dot);
} );*/


    // Mouse Motion
let lastX;
let bar = document.querySelector(".bar");
bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
        lastX = event.clientX;
        window.addEventListener("mousemove", moved);
        event.preventDefault();
    }
});

function moved(event) {
    if(event.buttons == 0) {
        window.removeEventListener("mousemove", moved);
    } else {
        let dist = event.clientX - lastX;
        let newWidth= Math.max(10, bar.offsetWidth + dist);
        bar.style.width = newWidth + "px";
        lastX= event.clientX;
    }
}

    // Touch Events

/*-------Scroll Events-------*/
document.body.appendChild(document.createTextNode(
    "supercalifragilisticepialidocious".repeat(1000)));

let barra= document.querySelector("#progress");
window.addEventListener("scroll", ()=> {
    let max = document.body.scrollHeight - innerHeight;
    barra.style.width = `${(pageYOffset / max) * 100}%`;
});
/*-------Focus Events-------*/

let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for(let field of Array.from(fields)){
    field.addEventListener("focus", event => {
        let text = event.target.getAttribute("data-help");
        help.textContent = text;
    });
    field.addEventListener("blur", event=> {
        help.textContent = " ";
    });   
}


/*-------Load Event-------*/
/*-------Events and the Event Loop-------*/

/*-------Timers-------*/
let bombTimer = setTimeout(()=> {
    console.log("BOOM")
},500);

if(Math.random()< 0.5) {
    console.log("Defused");
    clearTimeout(bombTimer);
}

let ticks = 0;
let clock = setInterval(()=> {
    console.log("tick", ticks++);
    if(ticks ==10){
        clearInterval(clock);
        console.log("stop.");
    }
},200);
/*-------Debouncing-------*/
let textarea = document.querySelector("textarea");
let timeout;
textarea.addEventListener("input", ()=>{
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Typed!"),500);
});

let scheduled=null;
window.addEventListener("mousemove", event => {
    if(!scheduled){
        setTimeout(()=> {
            document.body.textContent = 
            `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
            scheduled = null;
        },250)
    }
    scheduled = event;
})