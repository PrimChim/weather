var inputValue = document.getElementById("searchbar");
var main1 = document.querySelector(".name");
var temp1 = document.querySelector(".temp");
var wspd = document.querySelector(".wind");
var hum1 = document.querySelector(".humm");

var wind = document.getElementById("rain");
let button1 =  document.getElementById("submitb");


button1.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=176d67a4f29f97071d97c6a42d0d543e')
      .then(response => response.json())
      .then(data => {
        const { name } = data;
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        const description = data['weather'][0]['description'];
  
        main1.innerHTML = name;
        temp1.innerHTML = (temp - 273.15).toFixed(2) + "° C";
        // document.getElementById("rain").innerHTML = description;
        hum1.innerHTML = "Humidity : " + humidity + " g.kg-1";
        wspd.innerHTML = "Wind speed : " + speed + " km/hrs";
        wind.innerHTML = description;
        // input.value = "";
        document.body.style.backgroundImage = url("https://source.unsplash.com/1600x900/?"+ inputValue);
      })
  
    // .catch(err) => alert("Wrong city name!"));
  }
)
  