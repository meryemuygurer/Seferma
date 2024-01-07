'use strict'

window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".header-nav")
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

window.onload = function () {
    selectOption(1);
};

// Seçenekleri değiştiren JavaScript fonksiyonu
function selectOption(optionNumber) {
    // Tüm seçeneklerin rengini gri yap
    for (let i = 1; i <= 4; i++) {
        let eleman = document.getElementById('option' + i)
        eleman.querySelector("h3").style.color = 'gray';
    }

    // Tıklanan seçeneğin rengini siyah yap
    let eleman2 = document.getElementById('option' + optionNumber)
    eleman2.querySelector("h3").style.color = '#c90005';
}


document.addEventListener('DOMContentLoaded', function() {
    var tarihInput = document.getElementById("tarihSec");

    // Bugünün tarihini al
    var bugununTarihi = new Date();

    // Tarihi "YYYY-MM-DD" formatına dönüştür
    var formatliTarih = getFormattedDate(bugununTarihi);

    // Tarih input'unun değerini güncelle
    tarihInput.value = formatliTarih;
});

function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (date.getMonth() + 1).toString();
    month = month.length === 1 ? '0' + month : month;

    var day = date.getDate().toString();
    day = day.length === 1 ? '0' + day : day;

    return year + '-' + month + '-' + day;
}

var adresInputList = document.querySelectorAll(".adresInput");

function initMap() {
    adresInputList.forEach(function (adresInput) {
        var autocomplete = new google.maps.places.Autocomplete(adresInput);

        autocomplete.addListener('place_changed', function () {
            var place = autocomplete.getPlace();
            if (place.geometry) {
                console.log(adresInput.id + ' için Seçilen Adres:', place.formatted_address);
                // İstediğiniz başka işlemleri burada yapabilirsiniz
            } else {
                console.error(adresInput.id + ' için geçerli bir adres seçilmedi.');
            }
        });
    });
}


