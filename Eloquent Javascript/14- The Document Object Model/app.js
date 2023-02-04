//-----Document Structure------//   

//-----Trees------//   
console.log(document.documentElement);
console.log(document.body);
console.log(Node.ELEMENT_NODE);
console.log(Node.TEXT_NODE);

//-----The Standard------//   

//-----Moving through the Tree------//   
function talksAbout(node, string){
    if(node.nodeType == Node.ELEMENT_NODE){
        for(let child of node.childNodes){
            if(talksAbout(child, string)){
                return true;
            }
        }
        return false;
    } else if(node.nodeType == Node.TEXT_NODE){
        return node.nodeValue.indexOf(string) > -1;
    }
}

console.log(talksAbout(document.body, "book"));

//-----Finding Elements------//   
let link = document.body.getElementsByTagName("a")[0];
console.log(link.href);

//-----Changing the document------//   
let paragrhaps = document.body.getElementsByTagName("p");
document.body.insertBefore(paragrhaps[3], paragrhaps[2])
//-----Creating nodes------//   

function replaceImages(){
    let images = document.body.getElementsByTagName("img");
    for(let i = images.length - 1; i >= 0; i--) {
        let image = images[i];
        if(image.alt){
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text, image);
        }
    }
}


let arrayish = {0: "one", 1: "two", length:2};
let array = Array.from(arrayish);
console.log(array.map(s=>s.toUpperCase()));


function elt(type, ...children) {
    let node = document.createElement(type);
    for (let child of children){
        if(typeof child != "string") node.appendChild(child);
        else node.appendChild(document.createTextNode(child));
    }
    return node;
}

document.getElementById("quote").appendChild(
    elt("footer", "--",
    elt("strong", "Karl Popper"),
    ", preface to the second edition of ",
    elt("em", "The open Society and Its Enemies"),
    ", 1950"
    )
)
//-----Attributes------//   

let paras = document.body.getElementsByTagName("p");
for(let para of Array.from(paras)){
    if(para.getAttribute("data-classified") == "secret"){
        para.remove();
    }
}
//-----Layout------//   
let para = document.body.getElementsByClassName("recuadro");
console.log("clientHeight:", para.clientHeight);
console.log("offsetHeight:", para.offsetHeight);

function time(name, action) {
    let start = Date.now();
    action();
    console.log(name, "took", Date.now() - start, "ms")
}

time("naive", ()=> {
    let target = document.getElementById("one");
    while (target.offsetWidth < 2000) {
        target.appendChild(document.createTextNode("X"));
    }
});

time("clever", function(){
    let target = document.getElementById("two");
    target.appendChild(document.createTextNode("XXXXX"));
    let total = Math.ceil(2000/ (target.offsetWidth / 5));
    target.firstChild.nodeValue = "X".repeat(total);
})

//-----Styling------//   


//-----Cascading Styles------//   


//-----Query Selectors------//   


//-----Positioning and Animating------//   
let cat = document.querySelector("img");
let angle = Math.PI / 2;
function animate(time, lastTime){
    if(lastTime !=null) {
        angle += (time-lastTime)* 0.001;
    }
    cat.style.top = (Math.sin(angle)*20) + "px";
    cat.style.left = (Math.cos(angle)*200) + "px";
    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);