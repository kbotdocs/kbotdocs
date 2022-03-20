
const HEADER        = document.querySelector('header');
const ASIDE         = document.querySelector('aside');
const HEADER_TITLE  = document.querySelector('div#header-title');
const LIST_EL       = document.querySelectorAll('div.list-el');
const SMALL_LIST_EL = document.querySelectorAll('li.small-list-el');
const ANCHOR        = document.querySelectorAll('a.anchor');


if(window.matchMedia('(max-width: 767px)').matches) {
    HEADER_TITLE.addEventListener('click', () => {
        ASIDE.style.display = ((ASIDE.style.display === 'none') ? 'block' : 'none');
    });
}

LIST_EL.forEach(e => {
    e.addEventListener('click', (_e) => {
        _e.preventDefault();
        LIST_EL.forEach(__e => { __e.removeAttribute('data-selected') });
        e.setAttribute('data-selected', '');
        scroll(e.id);
    });
});

SMALL_LIST_EL.forEach(e => {
    e.addEventListener('click', _e => {
        _e.preventDefault();
        scroll(e.id);
    });
});

ANCHOR.forEach(e => {
    e.addEventListener('click', _e => {
        _e.preventDefault();
        scroll(e.getAttribute('href'));
    });
});

function scroll(id) {
    let bh = 'smooth';

    if(window.matchMedia('(max-width: 767px)').matches) bh = 'auto';

    window.scrollTo({
        top: window.pageYOffset + document.querySelector(`div#d${id}.con`).getBoundingClientRect().top - (HEADER.offsetHeight + 72),
        behavior: bh
    });

    if(window.matchMedia('(max-width: 767px)').matches) ASIDE.style.display = 'none';
}