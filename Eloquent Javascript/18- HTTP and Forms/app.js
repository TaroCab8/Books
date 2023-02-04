/*------------Fetch------------ */
/*fetch("example/data.txt").then(response => {
    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
})

fetch("example/data.txt")
.then(resp => resp.text())
.then(text => console.log(text));

fetch("example/data.txt", {method: "DELETE"}).then(resp => {
    console.log(resp.status);
});

fetch("example/data.txt", {headers: {Range: "bytes=8-19"}})
.then(resp => resp.text())
.then(console.log);

/*
/*------------HTTP Sandboxing------------ */
/*------------Appreciatig HTTP------------ */
/*------------Security and HTTPS------------ */
/*------------Form Fields------------ */
/*------------Focus------------ */
document.querySelector("#input1").focus();
console.log(document.activeElement.tagName);

document.querySelector("#input1").blur();
console.log(document.activeElement.tagName);
/*------------Disabled Fields------------ */


/*------------The form as a whole------------ */
let form1= document.querySelector("#form1");
console.log(form1.elements[1].type);
console.log(form1.elements.password.type);
console.log(form1.elements.name.form == form1);
/*------------Text Fields------------ */
let textArea1 = document.querySelector("#txtArea1");
textArea1.addEventListener("keydown", event => {
    if(event.keyCode == 113){
        replaceSelection(textArea1, "Khasekhemwy");
        event.preventDefault();
    }
})

function replaceSelection(field, word){
    let from= field.selectionStart, to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word + field.value.slice(to);
    field.selectionStart = from + word.length;
    field.selectionEnd = from + word.length;
}


let text3= document.querySelector("#input3");
let output = document.querySelector("#length");
text3.addEventListener("input", ()=> {
    output.textContent = text3.value.length;
})
/*------------Checkboxes and Radio Buttons------------ */
let checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", ()=> {
    document.body.style.background = checkbox.checked? "mediumpurple": "";
});

let buttons = document.querySelectorAll("[name=color]");
for(let button of Array.from(buttons)){
    button.addEventListener("change", ()=> {
        document.body.style.background = button.value;
    });
}
/*------------Select Fields------------ */
/*
let select2= document.querySelector("#select2");
let output2 = document.querySelector("#output2");
select2.addEventListener("change", () => {
    let number = 0;
    for(let option of Array.from(select2.options)){
        if(option.selected){
            number += Number(option.value);
        }
    }
    output2.textContent = number;
})*/
/*------------File Field------------ */
let input7= document.querySelector("#input7");
input7.addEventListener("change", ()=> {
    if(input7.isDefaultNamespace.length > 0) {
        let file = input7.files[0];
        console.log("You choose", file.name);
        if(file.type) console.log("It has type", file.type)
    }
});
/*------------Storing Data Client-Side------------ */
localStorage.setItem("username", "Lautaro");
console.log(localStorage.getItem("username"));


let list = document.querySelector("#select3");
let note = document.querySelector("#txtArea2");

let state;

function setState(newState) {
    list.textContent = "";
    for(let name of Object.keys(newState.notes)){
        let option = document.createElement("option");
        option.textContent= name;
        if(newState.selected == name) option.selected = true;
        list.appendChild(option);
    }
    note.value = newState.notes[newState.selected];

    localStorage.setItem("Notes", JSON.stringify(newState));
    state = newState;
}

setState(JSON.parse(localStorage.getItem("Notes")) || {
    notes: {"shopping list": "Carrots\nRaisins"},
    selected: "shopping list"
});

list.addEventListener("change", () => {
    setState({notes: state.notes, selected:list.value});
});
note.addEventListener("change", ()=> {
    setState({
        notes: Object.assign({}, state.notes,{[state.selected]: note.value}),
        selected: state.selected
    });
})

document.querySelector("#button1").addEventListener("click", ()=> {
    let name = prompt("Note name");
    if(name) setState({
        notes: Object.assign({}, state.notes, {[name]: ""}),
        selected: name
    });
});
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */
/*------------Something------------ */