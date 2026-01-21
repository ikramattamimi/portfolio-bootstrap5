new Swiper(".project-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev"
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

new Swiper(".modal-image-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});


// Function to highlight the active link
function highlightActiveLink() {
    // Get the current URL
    var url = window.location.href;

    // Extract the fragment (the part of the URL after the # symbol)
    var fragment = url.split('#')[1];
    console.log(fragment)

    // If a fragment exists and matches one of the link IDs, highlight it
    if (fragment) {
        var link = document.getElementById('link' + fragment);
        if (link) {
            link.classList.add('active'); // Add a CSS class to highlight the active link
        }
    } else {
        var link = document.getElementById('link' + 'home');
        if (link) {
            link.classList.add('active'); // Add a CSS class to highlight the active link
        }
    }
}

// Call the function when the page loads
window.addEventListener('load', highlightActiveLink);
