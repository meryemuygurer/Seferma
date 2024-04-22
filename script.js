'use strict'

window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".header-nav")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

window.onload = function () {
    selectOption(1);
};

function selectOption(optionNumber) {
    for (let i = 1; i <= 4; i++) {
        let eleman = document.getElementById('option' + i)
        eleman.querySelector("h3").style.color = 'gray';

        let region = document.getElementById('region' + i)
        region.style.display= 'none';
    }

    let eleman2 = document.getElementById('option' + optionNumber)
    eleman2.querySelector("h3").style.color = '#c90005';

    let selectedRegion = document.getElementById('region' + optionNumber)
    selectedRegion.style.display = 'flex';
}


document.addEventListener('DOMContentLoaded', function() {
    var dateInput = document.getElementById("pickDate");

    var todaysDate = new Date();

    var formatliTarih = getFormattedDate(todaysDate);

    dateInput.value = formatliTarih;
});

function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (date.getMonth() + 1).toString();
    month = month.length === 1 ? '0' + month : month;

    var day = date.getDate().toString();
    day = day.length === 1 ? '0' + day : day;

    return year + '-' + month + '-' + day;
}

/* MAP SECTION */

var adresInputList = document.querySelectorAll(".addressInput");

function initMap() {
    adresInputList.forEach(function (adresInput) {
        var autocomplete = new google.maps.places.Autocomplete(adresInput);

        autocomplete.addListener('place_changed', function () {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                console.log(adresInput.id + ' için Seçilen Adres:', place.formatted_address);
            } else {
                console.error(adresInput.id + ' için geçerli bir adres seçilmedi.');
            }
        });
    });
}

/* COUNTER SECTION */

let nums = document.querySelectorAll('.counter-area .counter');
let started = false;

window.addEventListener('scroll', function() {
    if (!started && isElementInViewport('.counter-area')) {
        nums.forEach((num) => startCount(num));
        started = true;
    }
});

function isElementInViewport(el) {
    let rect = document.querySelector(el).getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function startCount(e1) {
    let goal = e1.dataset.goal;
    let count = setInterval(() => {
        e1.textContent++;
        if (e1.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

function travelSelected(num){
    let travelElements = document.querySelectorAll('[id^="travel-"]');
    let menuElements = document.querySelectorAll('[id^="menu-"]');
    travelElements.forEach(element => {
        element.classList.remove("active");
    });

    menuElements.forEach(element => {
        element.style.display = "none";
    });


    let selected = document.getElementById(`travel-${num}`);
    let menuElement = document.getElementById(`menu-${num}`);
    selected.classList.add("active");
    menuElement.style.display = "flex";
}

/* REGISTER PART */

var map;

function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.0082, lng: 28.9784}, // Başlangıç konumu (örnek olarak İstanbul)
        zoom: 8
    });
    directionsRenderer.setMap(map);

    var start = {lat: parseFloat(prompt("Başlangıç noktası enlem:")), lng: parseFloat(prompt("Başlangıç noktası boylam:"))};
    var end = {lat: parseFloat(prompt("Bitiş noktası enlem:")), lng: parseFloat(prompt("Bitiş noktası boylam:"))};

    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
            var distance = result.routes[0].legs[0].distance.text;
            alert("Mesafe: " + distance);
        } else {
            window.alert('Yol bilgileri alınamadı: ' + status);
        }
    });
}
