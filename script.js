const weddingDate = new Date("APR 20, 2025 08:00:00").getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)) ;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) /1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    
},1000);



// Fade In Effect Start
// faed in
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.02 });

    fadeElements.forEach((el) => observer.observe(el));
});

// right to left dan left to right
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden-right");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden-left");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
});
// Fade In Effect End

document.getElementById("startButton").addEventListener("click", function () {
    let audio = document.getElementById("audioPlayer");

    // Memutar audio
    audio.play();
});
