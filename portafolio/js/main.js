

const d = document,
    $ = el => d.querySelector(el),
    $_ = el => d.querySelectorAll(el);

const $wrapper = $('.wrapper');
d.addEventListener('click', e => {
    if (e.target.matches('.menu-btn') || e.target.matches('.menu-btn *')){
        d.querySelector('.panel').classList.toggle('panel-slide')
        d.querySelector('.menu-btn').classList.toggle('color-swap')
    }
})