document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    menu.classList.remove("hidden");

    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            document.body.classList.remove("scrolled");
            menu.style.top = "-100px";
        } else if (window.scrollY > window.innerHeight / 3) {
            document.body.classList.add("scrolled");
            menu.style.top = "0";
        } else {
            menu.style.top = "-50px";
        }
    });

    const restaurantButton = document.getElementById("restaurant-button");
    restaurantButton.addEventListener("click", function () {
        const restaurantImage = document.querySelector('img[src*="restaurant"]');
        if (restaurantImage) {
            restaurantImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    const semaine4Button = document.getElementById("semaine4-button");
    semaine4Button.addEventListener("click", function () {
        const semaine4Image = document.querySelector('img[src*="SEMAINE4.jpg"]');
        if (semaine4Image) {
            semaine4Image.scrollIntoView({ behavior: "smooth" });
        }
    });

    const decouverteButton = document.getElementById("decouverte-button");
    decouverteButton.addEventListener("click", function () {
        const welcomeSection = document.querySelector("h1");
        welcomeSection.scrollIntoView({ behavior: "smooth" });
    });

    const bestPlaceButton = document.getElementById("best-place-button");
    const bestPlaceImage = document.querySelector('img[src*="best1"]');
    bestPlaceButton.addEventListener("click", function () {
        if (bestPlaceImage) {
            bestPlaceImage.scrollIntoView({ behavior: "smooth" });
        }
    });

    const galleryImages = document.querySelectorAll("#gallery img");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal img");
    const closeBtn = document.querySelector(".close-btn");

    galleryImages.forEach((image) => {
        image.addEventListener("click", function () {
            modalImg.src = image.src;
            modal.style.display = "flex";
        });
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal || event.target === closeBtn) {
            modal.style.display = "none";
        }
    });
});
