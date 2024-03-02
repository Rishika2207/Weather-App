let input=document.querySelector("#location");
let btn=document.querySelector("#search-btn");
let temp=document.getElementById("temprature");
let humid=document.getElementById("percent");
let wSpeed=document.getElementById("speed");
let wInfo=document.getElementById("info");
 let wImage=document.getElementById("image");
input.addEventListener("click",(evt)=>{
    evt.target.value="";
})
async function demo_function(){
    var data1=document.getElementById("location").value;
   
    let URL=`https://api.weatherapi.com/v1/current.json?key=2544a9bdb8bc4b92a4e90821240101&q=${data1}`
    let response=await fetch(URL);
    if(!response.ok){
        alert("Enter correct Location");
        throw new Error("Unable to fetch weather data.");
    }
    let data=await response.json();
    temp.innerText=data.current.temp_c+"°C";
    humid.innerText=data.current.humidity+"%";
    wSpeed.innerText=data.current.wind_kph+"Km/H";
    wInfo.innerText=data.current.condition.text;
    wImage.src=data.current.condition.icon;
}

