// i can export what i what to export through module 
// export function directly 
export const myfunction = ()=>{
    console.log("heelo im script 2 function");
}
// export  multiple function at a time 
const abc= ()=>{
    console.log("hi im abc and im a default function");
}
const foo= ()=>{
    console.log("hi im foo");
}
export{ abc,foo }
