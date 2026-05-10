const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

const scrollStep = 380;

if (slider && leftArrow && rightArrow) {

    rightArrow.addEventListener("click", () => {
        slider.scrollBy({
            left: scrollStep,
            behavior: "smooth"
        });
    });

    leftArrow.addEventListener("click", () => {
        slider.scrollBy({
            left: -scrollStep,
            behavior: "smooth"
        });
    });
}

const modal = document.getElementById("posterModal");
const openBtn = document.getElementById("openPoster");
const closeBtn = document.querySelector(".close-modal");

if (modal && openBtn && closeBtn) {

    openBtn.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}