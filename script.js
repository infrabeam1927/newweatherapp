let weather ={
    apiKey:"aa1d1e34e51b6f6cb69275758a8c8013",
    fetchWeather:function(city){
        if (city=='hamilton'){
            city="hamilton,CA"
        }
        if (city=='Hamilton'){
            city="hamilton,CA"
        }

        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey)
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){

        const{ name }=data;
        const{ description,icon }=data.weather[0];
        const{ temp, humidity }=data.main;
        const{ speed }= data.wind;
        console.log(name,description,icon,temp,humidity,speed);
        document.querySelector(".city").innerText="Weather in "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".description").innerText=description;
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind speed : "+speed +"km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
})
document.querySelector('.search-bar').addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {      
        weather.search();             
    }
})
weather.fetchWeather("hamilton")