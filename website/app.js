/* Global Variables */

const url = 'api.openweathermap.org/data/2.5/weather';
const key = '739fa7ed5dc76fc6dbb8e33b1a50a628';


const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const generate = document.getElementById('generate');
const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const getData = async () => {
    const req = await fetch(`${url}?zip=${zip.value}&appid=${key}`)
        try{
            const res = await req.json();
            return res;
        } catch(error){
            console.log("ERROR!!", error);
        }
}