const lookupBtn = document.querySelector(".lookup-btn");
const isDisplay = document.querySelector(".ip-display");
const locationDisplay = document.querySelector(".location-display");
const geolocation = document.querySelector(".geolocation-display");

lookupBtn.addEventListener('click', () => {
    $.getJSON('https://ipapi.co/json/', function (data) {

        isDisplay.textContent = `IP: ${data.ip}`;
        locationDisplay.textContent = `Region: ${data.city}, ${data.region}, ${data.country_name}`;
        geolocation.textContent = `Geo Location: ${data.latitude}, ${data.longitude}`;

    });
})


const menutoggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menutoggle.addEventListener('click', () => {
    menutoggle.classList.toggle('active');
    showcase.classList.toggle('active');
});



