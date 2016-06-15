/* Geo Location */
	var lat=0;
	var lon=0;
		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(Coords);
			} else {
				x.innerHTML = "Geolocation is not supported by this browser.";
			}
		}

		function Coords(position){
			lat=position.coords.latitude;
			lon=position.coords.longitude;
		}


/*search window functions*/

    function showSearch(){
        document.getElementById("s").style.visibility='visible';
    }
    function hideSearch(){
        document.getElementById("s").style.visibility='hidden';
    }

/* Search for weather by coords given in inputs */
	


function getWeather(){
    var lat=document.getElementById("latitude").value;
    var lon=document.getElementById("longitude").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=e155690e9c5a721192a3d32032c12449";
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var out = JSON.parse(xmlhttp.responseText);
            v(out);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    
        function v(x) {
        var temperature=Math.floor(x.main.temp - 273)+"<sup>o</sup>";
        document.getElementById("temperature").innerHTML=temperature;
        document.getElementById("city").innerHTML=x.name;
        document.getElementById("description").innerHTML=x.weather[0]["main"];
        document.getElementById("icon").innerHTML="<img src='http://openweathermap.org/img/w/"+x.weather[0]["icon"]+".png'>";
        }
        hideSearch();
}

    