const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    let inputValue = document.querySelector("#in").value;
    let wData = document.querySelector(".wData");
    let inVal = document.querySelector(".in")
    // let inputndBtn = document.querySelector(".inputndBtn")
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=aa6514c63ec17c230ad11ea3670f1bf0`;

    fetch(api)
        .then(res => res.json())
        .then(data => {
            // let errMsg = document.querySelector(".errMsg");

            let wImg = document.querySelector(".wImg");
            let location = document.querySelector(".location")
            let date = new Date();
            let timeNow = date.getHours();

            console.log(data);


            if (data.cod === '400') {
                alert('Enter any location to access')
            }

            if (data.cod === '404') {
                alert('Enter the the valid location to access')
            }

            if (data.weather[0].description === "broken clouds" ||
                data.weather[0].description === "scattered clouds" ||
                data.weather[0].description === "clear sky" ||
                data.weather[0].description === "overcast clouds" ||
                data.weather[0].description === "few clouds" ||
                data.weather[0].description === "mist" ||
                data.weather[0].description === "thunderstorm with light rain" ||
                data.weather[0].description === "light rain" ||
                data.weather[0].description === "moderate rain" ||
                data.weather[0].main === "Rain" ||
                data.weather[0].main === "Drizzle" ||
                data.weather[0].description === "heavy intensity rain" ||
                data.weather[0].description === "broken clouds" ||
                data.weather[0].description === "scattered clouds" ||
                data.weather[0].description === "clear sky" && timeNow > 18 ||
                fTemp < 16
            ) {
                wImg.setAttribute("src", "/Users/anas/git-repos/Weather-Info/assets/rain.png");
                wImg.classList.add("wImgActive")
            }



            // if (data.weather[0].description === "broken clouds" || data.weather[0].description === "scattered clouds" || data.weather[0].description === "clear sky") {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/mostlycloudy.png");
            //     wImg.classList.add("wImgActive")
            // }

            // if (data.weather[0].description === "overcast clouds" || data.weather[0].description === "few clouds") {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/cloudy.png");
            //     wImg.classList.add("wImgActive")
            // }

            // if (data.weather[0].description === "mist") {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/fog.png");
            //     wImg.classList.add("wImgActive")
            // }

            // if (data.weather[0].description === "thunderstorm with light rain") {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/tstorms.png");
            //     wImg.classList.add("wImgActive")
            // }

            // if (data.weather[0].description === "light rain" || data.weather[0].description === "moderate rain" || data.weather[0].main === "Rain" || data.weather[0].main === "Drizzle") {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/chancerain.png");
            //     wImg.classList.add("wImgActive")
            // }

            // if (data.weather[0].description === "heavy intensity rain") {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/rain.png");
            //     wImg.classList.add("wImgActive")
            // }



            // night

            // if (data.weather[0].description === "broken clouds" || data.weather[0].description === "scattered clouds" || data.weather[0].description === "clear sky" && timeNow > 18) {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/nt_mostlycloudy.png");
            //     wImg.classList.add("wImgActive")
            // }



            //location

            if (data.sys.country === "IN") {
                location.innerHTML = `${data.name},India`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "FR") {
                location.innerHTML = `${data.name},France`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "US") {
                location.innerHTML = `${data.name},United States`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "GB") {
                location.innerHTML = `${data.name},United Kingdom`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "PH") {
                location.innerHTML = `${data.name},Philippines`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "SA") {
                location.innerHTML = `${data.name},Saudi Arabia`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "AE") {
                location.innerHTML = `${data.name},United Arab Emirates`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "JP") {
                location.innerHTML = `${data.name},Japan`
                location.classList.add("locationActive")
            }

            if (data.sys.country === "ZA") {
                location.innerHTML = `${data.name},South Africa`
                location.classList.add("locationActive")
            }


            if (data.sys.country !== "IN" &&
                data.sys.country !== "FR" &&
                data.sys.country !== "US" &&
                data.sys.country !== "GB" &&
                data.sys.country !== "PH" &&
                data.sys.country !== "SA" &&
                data.sys.country !== "AE" &&
                data.sys.country !== "JP" &&
                data.sys.country !== "ZA"
            ) {
                location.innerHTML = `${data.name},${data.sys.country}`
                location.classList.add("locationActive")
            }


            let fTemp = Math.floor(data.main.temp - 273.15);
            let hTemp = Math.floor(data.main.temp_max - 273.15);
            let lTemp = Math.floor(data.main.temp_min - 273.15);



            // if (fTemp < 16) {
            //     wImg.setAttribute("src", "/Users/anas/Desktop/weatherIcons/dist/icons/black/png/256x256/snow.png");
            //     wImg.classList.add("wImgActive")
            // }




            btn.classList.add("btnFlex");
            inVal.classList.add("inActive")
            wData.classList.add("wDataActive");
            wData.innerHTML = `${fTemp}˚C`;

            // reports

            const weatherCard = document.querySelector(".weatherCard");
            const latData = document.querySelector(".latData");
            const lonData = document.querySelector(".lonData");
            const maxData = document.querySelector(".maxData");
            const minData = document.querySelector(".minData");
            const reports = document.querySelector(".reports");



            weatherCard.classList.add("weatherCardActive")

            latData.innerHTML = data.coord.lat;
            lonData.innerHTML = data.coord.lon;
            maxData.innerHTML = `${hTemp}˚C`;
            minData.innerHTML = `${lTemp}˚C`;
            reports.classList.add("reportsActive");


        })



})



