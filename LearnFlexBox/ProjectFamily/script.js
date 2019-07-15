document.querySelector(".nav__header-btn").addEventListener('click', showNavBar);

function showNavBar() {
    var nav = document.querySelector(".nav__links");
    nav.classList.toggle("showNav");
}

// button to Top

var btnToTop = document.getElementsByClassName("top__btn")[0];

btnToTop.addEventListener('click', toTop);

function toTop() {
    var yScroll = window.pageYOffset;
    var interY = setInterval(function() {
        yScroll = yScroll - 20;
        document.documentElement.scrollTop = yScroll;
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(interY);
            document.documentElement.scrollTop = 0;
        }
    });
}


window.addEventListener('scroll', getY);

function getY() {
    if (window.pageYOffset === 0) {
        btnToTop.classList.add("hiddenBtnTop");
    } else {
        btnToTop.classList.remove("hiddenBtnTop");
    }
}

//end button to top