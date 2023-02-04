//The village of Meadowfield
const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];


    // converting the list of roads to a data structurea tha tells us what an be reached from there

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if(graph[from] == null){
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}
const roadGraph = buildGraph(roads);

//The task

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}


let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels)
console.log(first.place);

// Persistent Data

/*let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);*/

// Simulation

    function runRobot(state, robot, memory) {
        for(let turn = 0;; turn++) {
            if(state.parcels.length == 0) {
                console.log(`Done in ${turn} turns`);
                break;
            }
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
            console.log(`Moved to ${action.direction}`);
        }
    }


function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for( let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do{
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

//runRobot(VillageState.random(), routeRobot);


// The Mail Truck's Route
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Grete's House", "Farm","Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if(memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)}
}

// Pathfinding

function findRoute(graph, from, to) {
    let work = [{at: from, route:[]}];
    for(let i = 0; i < work.length; i++){
        let {at, route} = work[i];
        for(let place of graph[at]){
            if (place == to) return route.concat(place);
            if(!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if(route.length == 0) {
        let parcel = parcels[0];
        if(parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

//runRobot(VillageState.random(), routeRobot, [])
//runRobot(VillageState.random(), randomRobot)
runRobot(VillageState.random(), goalOrientedRobot, []);


// Exercises

    // Measuring a Robot
    function countSteps(state, robot, memory){
        for (let steps = 0;; steps++){
            if(state.parcels.length == 0) return steps;
            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
        
    }
    
    function compareRobots(robot1, memory1, robot2, memory2) {
        // Your code here
     let total1 = 0, total2 = 0;
     for (let i = 0; i < 100; i++) {
             let state = VillageState.random();
             total1 += countSteps(state, robot1, memory1);
             total2 += countSteps(state, robot2, memory2);
         }
         console.log(`Robot 1 needed ${total1 / 100} steps per task`);
         console.log(`Robot 2 needed ${total2 / 100} steps per task`);
     }  
      


      compareRobots(routeRobot, [], goalOrientedRobot, []);