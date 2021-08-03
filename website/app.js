/* Global Variables */

const url = 'https://api.openweathermap.org/data/2.5/weather';
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

const postData = async (url='', data={}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData
    } catch(error){
        console.log("Error", error);
    }
}

const updateUI = async () => {
    const req = await fetch("http://localhost:3000/all");
    console.log(req);
    try{
      const allData = await request.json();
      console.log(allData);
      date.innerHTML = 'Date: ' + allData.date;
      temp.innerHTML = 'Temperature: ' + allData.temperature;
      content.innerHTML = 'Feeling: ' + allData.user_response;
    }catch(error){
      console.log("error", error);
    }
  }

const clickFun = () => {
    getData()
    .then((data) => postData("http://localhost:3000/add",{temp:data.main.temp,date:newDate,feeling:feelings.value}))
    .then(() => updateUI());
}

generate.addEventListener('click', clickFun);
