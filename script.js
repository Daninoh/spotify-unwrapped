// $(function () {
//     $(".draggable").draggable({
//         containment: "parent"
//     });
// });

//DRAG JQUERY
$(function () {
    $(".draggable").draggable();
});

//GIFT CONTAINER HOVER FEATURE
const gifts = document.querySelectorAll(".gift");
const containers = document.querySelectorAll(".gift-container");

gifts.forEach((gift) => {
    gift.addEventListener("mouseenter", () => {
        gift.src = "img/gift-box-unwrap.png";
    });

    gift.addEventListener("mouseleave", () => {
        gift.src = "img/gift-box.png";
    });
});

//GIFT CONTAINER OPENING
containers.forEach((container) => {
    const gift = container.querySelector(".gift");
    const message = container.querySelector(".giftText");

    gift.addEventListener("click", () => {
        gift.style.display = "none";
        message.classList.add("open");
    });
});

//GIFT CONTAINER CLOSING/RESET BUTTON
function resetGifts() {
    containers.forEach((container) => {
        const gift = container.querySelector(".gift");
        const message = container.querySelector(".giftText");

        gift.style.display = "";
        message.classList.remove("open");
    });
}

document.querySelectorAll(".refresh-butt").forEach((button) => {
    button.addEventListener("click", resetGifts);
});
