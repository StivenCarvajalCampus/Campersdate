let myFormularioCampus = document.querySelector("#myFormularioCampus");
let myFormularioCampers = document.querySelector("#myFormularioCampers");
let myFormularioTrainers = document.querySelector("#myFormularioTrainers"); 
let myFormularioTeams = document.querySelector("#myFormularioTeams");
let myFormularioNiveles = document.querySelector("#myFormularioNiveles");
let myFormularioRoadmap = document.querySelector("#myFormularioRoadmap");
let campus = {};

myFormularioCampus.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    campus[`${data.nombreSede}`] = {Camper: [], Trainers: [], Teams: [], Niveles: [], Roadmap: [],};
    listaSedes("[name= 'sedeTrainers']");
    listaSedes("[name= 'sedeCampers']");
    listaSedes("[name= 'sedeTeams']");
    listaSedes("[name= 'sedeNiveles']");
    listaSedes("[name= 'sedeRoadmap']");
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
/*let listaTeam = (team)=>{
    let opciones = document.querySelector(team);
    opciones.innerHTML = null;
    for (let [val, id] of Object.entries(campus)) {
        opciones.insertAdjacentHTML("beforeend", `
            <option value="${val}">${val}</option>
        `);
    }
}*/
myFormularioTeams.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeTeams;
    delete data.sede;
    campus[`${sede}`]["Teams"].unshift(data);
    console.log(campus);    
    listar_teams('[name="sedeTrainers"]','[name="selector_teamtrainers"]')
    listar_teams('[name="sedeCampers"]','[name="selector_team"]')
    myFormularioTeams.reset();
    myFormularioTeams.reset();
})

let listar_teams= (sedeTeams,selector_team) =>{
    let opc_sede = document.querySelector(sedeTeams);
    let opc_team= document.querySelector(selector_team);
    opc_sede.addEventListener('change', (e) => {
        opc_team.innerHTML = null; 
        campus[e.target.value]["Teams"].forEach((team) => {
            opc_team.innerHTML += `
            <option value = "${team.nombreteam}">${team.nombreteam}</option>
            `
            
        });
    })
}




myFormularioCampers.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);

    let sede = data.sedeCampers;
    delete data.sede;
    campus[`${sede}`]["Camper"].unshift(data);
    console.log(campus);    
    myFormularioCampers.reset();
})
let listar_teamstrainer= (sedeTeams,selector_teamtrainer) =>{
    let opc_sede = document.querySelector(sedeTeams);
    let opc_team= document.querySelector(selector_teamtrainer);
    opc_sede.addEventListener('change', (e) => {
        opc_team.innerHTML = null; 
        campus[e.target.value]["Teams"].forEach((team) => {
            opc_team.innerHTML += `
            <option value = "${team.nombreteam}">${team.nombreteam}</option>
            `
            
        });
    })
}
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
myFormularioNiveles.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeNiveles;
    delete data.sede;
    campus[`${sede}`]["Niveles"].unshift(data);
    console.log(campus);
    myFormularioTrainers.reset();
})
myFormularioRoadmap.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    console.log(data);
    let sede = data.sedeRoadmap;
    delete data.sede;
    campus[`${sede}`]["Roadmap"].unshift(data);
    console.log(campus);
    myFormularioTrainers.reset();
})