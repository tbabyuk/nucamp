// console.log('javascript connected!');
    
// const carousel = new bootstrap.Carousel('#homeCarousel', {
//     interval: 2000,
//     pause: false
// })

// // when the pause button is clicked, pause the carousel
// const carouselPause = document.getElementById('carouselPause');
// carouselPause.addEventListener('click', function() {
//     console.log('pausing the carousel');
//     carousel.pause();
// })

// // when the play button is clicked, begin cycling through the images
// const carouselPlay = document.getElementById('carouselPlay');
// carouselPlay.addEventListener('click', function() {
//     console.log('cycle the carousel');
//     carousel.cycle();
// })

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})



const fetchWeather = async () => {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "toronto";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        displayWeather(data);
    } catch (error) {
        console.log(error.message)
    }
}

fetchWeather();


const displayWeather = ({main, weather}) => {
    console.log("showing main:", main);
    console.log("showing weather:", weather)
    const temperature = main.temp;
    const description = weather[0].description;
    const icon = weather[0].icon;

    // add weather image
    const weatherIcon = document.querySelector("#weather-icon");
    weatherIcon.src = `https://openweathermap.org/img/w/${icon}.png`

    // add temperature
    const tempDisplay = document.querySelector("#weather-temp");
    tempDisplay.innerText = temperature + "\u00B0";

    // add description
    const descriptionDisplay = document.querySelector("#weather-description");
    descriptionDisplay.innerText = description;
    console.log("logging all data:", temperature, description, icon)
}