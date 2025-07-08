document.addEventListener("DOMContentLoaded", function () {
    var menuBar = document.querySelector("#menuBar");
    var navBar = document.querySelector(".container nav ul");
    var overlaycontainer = document.querySelector(".overlay_container");
    var shownav = document.querySelector(".container nav");

    if (menuBar && navBar && overlaycontainer) {
        menuBar.addEventListener("click", function () {
            navBar.classList.toggle("navbarShow");
            overlaycontainer.classList.toggle("overlayShow");
        });

        overlaycontainer.addEventListener("click", function () {
            navBar.classList.remove("navbarShow");
            overlaycontainer.classList.remove("overlayShow");
        });
    }

    if (shownav) {
        document.addEventListener("scroll", function () {
            if (window.scrollY > 49) {
                shownav.classList.add("navfullShow");
            } else {
                shownav.classList.remove("navfullShow");
            }
        });
    }
});


$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 446,  
            settings: {
                slidesToShow: 1, 
                centerMode: true, 
                centerPadding: '2px'
            }
        }
        
    ]
});