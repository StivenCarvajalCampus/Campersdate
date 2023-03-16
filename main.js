let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioTrainers = document.querySelector("#myFormularioTrainers"); 
let myFormularioTeams = document.querySelector("#myFormularioTeams")
let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: [], Teams: []};
    listaSedes("[name= 'sedeTrainers']");
    listaSedes("[name= 'sedeCampers']");
    listaSedes("[name= 'sedeTeams']");
    myFormularioCampus.reset();
})

let listaSedes = (ubicacion)=>{
    let opciones = document.querySelector(ubicacion);
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
let listaTeam = (team)=>{
    let opciones = document.querySelector(team);
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}
myFormularioTeams.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeTeams;
    delete data.sede;
    campus[`${sede}`]["Teams"].unshift(data);
    console.log(campus);    
    myFormularioTeams.reset();
})

myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    campus[`${data.nombreteam}`]
    let team = data.nombreteam;
    delete data.nombreteam;
    campus[`${team}`]["Teams"].unshift(data);
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeCampers;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);    
    myFormularioCampers.reset();
})
myFormularioTrainers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeTrainers;
    delete data.sede;
    campus[`${sede}`]["Trainers"].unshift(data);
    console.log(campus);
    myFormularioTrainers.reset();
})