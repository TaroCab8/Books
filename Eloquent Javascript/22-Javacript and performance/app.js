/*-----Staged Compilation-----*/
//text
/*-----Graph Layout-----*/
//text
/*-----Deining a Graph-----*/
class GraphNode{
    constructor(){
        this.pos = new Vec(Math.random()*1000, Math.random()*1000);
        this.edges = [];
    }
    connect(other) {
        this.edges.push(other);
        other.edges.push(this);
    }
    hasEdge(other){
        return this.edges.includes(other);    
    }
}

function treeGraph(depth, branches) {
    let graph = [new GraphNode()];
    if(depth > 1) {
        for(let i = 0; i < branches; i++) {
            let subGraph = treeGraph(depth -1, branches);
            graph[0].connect(subGraph[0]);
            graph = graph.concat(subGraph);
        }
    }
    return graph;
}
    //---  Start Representing graph on canvas---//
        // Vec class
    class Vec {
        constructor(x,y) {
            this.x = x; this.y = y;
        }
        plus(other){
            return new Vec(this.x + other.x, this.y + other.y);
        }
        minus(other){
            return new Vec(this.x - other.x, this.y - other.y);
        }
        times(factor) {
            return new Vec(this.x * factor,this.y * factor);
        }

        get length(){
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }

    // Since we will want to inspect the layouts or code produces, let's 
    // first write code to draw a graph onto a canva. Since we don't know
    // in advance how big the graph is, the "scale" object computes a
    // scale and offset so that all nodes fit onto the given canvas.

    const nodeSize = 8;

    function drawGraph(graph){
        let canvas = document.querySelector("canvas");
        if (!canvas) {
            canvas = document.body.appendChild(document.createElement("canvas"));
            canvas.width = canvas.height = 400;
        }
        let cx = canvas.getContext("2d");
        cx.clearRect(0,0, canvas.width, canvas.height);
        let scale = new Scale (graph, canvas.width, canvas.height);
        
        //draw the edges
        cx.strokeStyle = "orange";
        cx.lineWidth = 3;
        for(let i = 0; i < graph.length; i++){
            let origin = graph[i];
            for (let target of origin.edges){
                if(graph.indexOf(target) <= i) continue;
                cx.beginPath();
                cx.moveTo(scale.x(origin.pos.x), scale.y(origin.pos.y));
                cx.lineTo(scale.x(target.pos.x), scale.y(target.pos.y));
                cx.stroke();
            }
        }

        //draw the nodes.
        cx.fillStyle = "purple";
        for(let node of graph) {
            cx.beginPath();
            cx.arc(scale.x(node.pos.x), scale.y(node.pos.y), nodeSize, 0, 7);
            cx.fill();
        }
    }

    // The function starts by drawing the edges , so that they appear
    // behind the nodes. Sunce the nodes on _both_ side of an edge refer
    // to each other, and we dn't want to draw every edge twice, edges
    // are only drawn then the target comes _after_ the current node in
    // the "graph" array.

    // When the edges have been drawn, the nodes are drawn on tp of them
    // as purple discs. Remember that the last argument to "arc" gives the
    // rotation, and we have to pass something bigger than 2 radians to get a
    // full circle.

    // Finding a scale at which todraw the graph is donde by finding the
    // top left and bottom rifht corners of the area taken up by the 
    // nodes. The offset at which nodes are drawn is based on he top left
    // corner, and the scale is based on the size of the canvas dicided by
    // the distance between those corners. The function reserves space
    // along the sides of the canvas based ont the "nodeSize" variable, so
    // that the circles drawn around nodes' center points don't get cut off.

    class Scale {
        constructor(graph, width, height) {
            let xs = graph.map(node => node.pos.x);
            let ys = graph.map(node => node.pos.y);
            let minX = Math.min(...xs);
            let minY = Math.min(...ys);
            let maxX = Math.max(...xs);
            let maxY = Math.max(...ys);

            this.offsetX = minX; this.offsetY = minY;
            this.scaleX = (width - 2 * nodeSize) / (maxX - minX);
            this.scaleY = (height - 2 * nodeSize) / (maxY - minY);
        }
        // the "x" and "y" methods convert from graph coordinates into
        // canvas coordinates
        x(x) {
            return this.scaleX * (x - this.offsetX) + nodeSize;
        }
        y(y){
            return this.scaleY * (y - this.offsetY) + nodeSize;
        }
    }

         //---  End Representing graph on canvas---//
        
drawGraph(treeGraph(1,2));
/*-----Force-Directed Layout-----*/
const springLength = 40;
const sprinStrength = 0.1;

const repulsionStrength = 1500;

function forceDirected_simple(graph) {
    for(let node of graph) {
        for(let other of graph) {
            if(other == node) continue;
            let apart = other.pos.minus(node.pos);
            let distance = Math.max(1, apart.length);
            let forceSize = -repulsionStrength / (distance * distance);
            if (node.hasEdge(other)) {
                forceSize += (distance - springLength) * sprinStrength;
            }
            let normalized = apart.times(1 / distance);
            node.pos = node.pos.plus(normalized.times(forceSize));
        }
    }
}

function forceDirected_noRepeat(graph) {
    for(let i = 0; i < graph.length; i++){
        let node  = graph[i];
        for(let j = i +1; j < graph.length; j++){
            let other = gaph[j];
            let apart = other.pos.minus(node.pos);
            let distance = Math.max(1, apart.length);
            let forceSize = -repulsionStrength / (distance * distance);
            if(node.hasEdge(other)){
                forceSize += (distance - springLength) * sprinStrength;
            }
            let applied = apart.times(forceSize / distance);
            node.pos = node.pos.plus(applied);
            other.pos = other.pos.minus(applied);
        }
    }
}

function runLayout(implementation, graph) {
    function run(steps, time) {
        let startTime = Date.now();
        for (let i = 0; i < 100; i++) {
            implementation(graph);
        }
        time += Date.now() - startTime;
        drawGraph(graph);
        if (steps == 0) console.log(time);
        else requestAnimationFrame(()=> run(steps -100, time));
    }
    run(4000, 0)
}


/*-----Avoiding Work-----*/


function forceDirected_noRepeat(graph) {
    for(let i = 0; i < graph.length; i++){
        let node  = graph[i];
        for(let j = i +1; j < graph.length; j++){
            let other = graph[j];
            let apart = other.pos.minus(node.pos);
            let distance = Math.max(1, apart.length);
            let forceSize = -repulsionStrength / (distance * distance);
            if(node.hasEdge(other)){
                forceSize += (distance - springLength) * sprinStrength;
            }
            let applied = apart.times(forceSize / distance);
            node.pos = node.pos.plus(applied);
            other.pos = other.pos.minus(applied);
        }
    }
}

const skipDistance = 175;
function forceDirected_skip(graph) {
  for(let i = 0; i < graph.length; i++) {  
    let node = graph[i];
    for(let j = i + 1; j < graph.length; j++) {
        let other = graph[j];
        let apart  = other.pos.minus(node.pos);
        let distance = Math.max(1, apart.length);
        let hasEdge = node.hasEdge(other);
        if(!hasEdge && distance > skipDistance) continue;
        let forceSize = -repulsionStrength / (distance * distance);
        if(hasEdge) {
            forceSize += (distance - springLength) * sprinStrength;
        }
        let applied = apart.times(forceSize / distance);
        node.pos = node.pos.plus(applied);
        other.pos = other.pos.minus(applied);
        }
}
}


/*-----Profiling-----*/
GraphNode.prototype.hasEdgeFast = function(other){
    for(let i = 0; i < this.edges.length; i++) {
        if(this.edges[i] === other) return true;
    }
    return false;
}
/*-----Function Inlining-----*/
//text
/*-----Creating Less Garbage-----*/
function forceDirected_noVector(graph){
    for(let i = 0; i < graph.length; i++) {
        let node = graph[i];
        for(let j = i +1; j < graph.length; j++){
            let other = graph[j];
            let apartX = other.pos.x - node.pos.x;
            let apartY = other.pos.y - node.pos.y;
            let distance = Math.max(1, Math.sqrt(apartX * apartX + apartY * apartY));

            let hasEdge = node.hasEdgeFast(other);
            if(!hasEdge && distance > skipDistance) continue;
            let forceSize = - repulsionStrength / (distance * distance);
            if (hasEdge){
                forceSize = (distance -springLength) * sprinStrength;
            }
            let forceX = apartX * forceSize / distance;
            let forceY = apartY * forceSize / distance;
            node.pos.x += forceX; node.pos.y += forceY;
            other.pos.x -= forceX; other.pos.y -= forceY;
        }
    }
}
runLayout(forceDirected_noVector, treeGraph(4,4));
/*-----Garbage Collection-----*/
/*-----Dynamic Types-----*/
/*-----Excercises?-----*/