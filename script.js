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
    console.log("deneme");
    // Tüm seçeneklerin rengini gri yap
    for (let i = 1; i <= 4; i++) {
        let eleman = document.getElementById('option' + i)
        eleman.querySelector("h3").style.color = 'gray';
    }

    // Tıklanan seçeneğin rengini siyah yap
    let eleman2 = document.getElementById('option' + optionNumber)
    eleman2.querySelector("h3").style.color = '#c90005';

}

