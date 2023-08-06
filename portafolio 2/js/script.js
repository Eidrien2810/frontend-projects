const d = document;
const $ = selector => d.querySelector(selector)
const $_ = selector => d.querySelectorAll(selector)

d.addEventListener('click', e => {
    if (e.target.matches('.fa-bars') || e.target.matches('.menu-links *')){
        d.querySelector('.panel').classList.toggle('is-active');
    }

})