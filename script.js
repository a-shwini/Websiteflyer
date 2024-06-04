document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".card_slider", {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const projectImg = document.getElementById('project-img');
    const projectButtons = document.querySelectorAll('.list-group-item');

    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imgSrc = button.getAttribute('data-img');
            projectImg.setAttribute('src', imgSrc);
            projectButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});

// Array of image paths
const imagePaths = [
    'image/edward-pretsi-jT8DXxyw8o8-unsplash.jpg',
    'image/daniel-j-schwarz-PPYpaw9UhnA-unsplash.jpg',
    'image/weichao-deng-qmE70blClzs-unsplash.jpg'
];

// Get the img element
const projectImg = document.getElementById('project-img');

// Set the initial image
projectImg.src = imagePaths[0];

// Add event listeners to each content item
document.querySelectorAll('.content-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        projectImg.src = imagePaths[index];
    });
});

/*document.addEventListener('DOMContentLoaded', function () {
    const contentItems = document.querySelectorAll('.content-item');
    const projectImg = document.getElementById('project-img');

    contentItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgPath = item.getAttribute('data-img');
            projectImg.setAttribute('src', imgPath);
        });
    });
});*/
