let menu = document.querySelector('#menu-btn'),
    navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// active nav
const liNav = [...document.querySelectorAll('.header .navbar a')];
liNav.forEach((el)=> {
    el.addEventListener("click", () => {
        liNav.forEach((el) => {
            el.classList.remove('active-a');
        });
        el.classList.add('active-a');
    });
});

// slider
var swiper = new Swiper(".home-slider", {
    loop: true,
    navigation: {
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev",
    },
});

// packages (load more button)
let loadMoreBtn = document.querySelector('.packages .load-more .btn'),
    currentItem = 4;
loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.packages .container .box')];
    for(var i = currentItem; i < currentItem+4; i++) {
        boxes[i].style.display = 'inline-block';
    };
    currentItem += 4;
    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
    }

};

// reviews
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    autoHeight: true,
    grabCursor: true,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});

// state
let nums = document.querySelectorAll(".stats .number"),
    section = document.querySelector(".stats"),
    started = false;

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num)); 
        }
        started = true;
    }
};

function startCount (el) {
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    },2000/goal);
}

// up bottom
let upBottom = document.querySelector(".up");
window.onscroll = function () {
    if (this.scrollY >= 1000) {
        upBottom.classList.add("show");
    } else {
        upBottom.classList.remove("show");       
    }
};
upBottom.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};