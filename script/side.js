
const HEADER        = document.querySelector('header');
const LIST_TITLE    = document.querySelectorAll('h3.list-title');
const LIST_EL       = document.querySelectorAll('li.list-el');
const SMALL_LIST_EL = document.querySelectorAll('li.small-list-el');

const FILTER = 'win16|win32|win64|mac';

let isDesktop = true;

if(navigator.platform) {
    if(0 > FILTER.indexOf(navigator.platform.toLowerCase())) {
        isDesktop = false;
    }
}

LIST_TITLE.forEach(e => {
    e.addEventListener('click', (_e) => {
        _e.preventDefault();
        if(e.hasAttribute('data-selected')) e.removeAttribute('data-selected');
        else e.setAttribute('data-selected', '');
    });
});

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
    })
})

function scroll(id) {
    let bh = 'smooth';

    if(!isDesktop) bh = 'auto';

    window.scrollTo({
        top: window.pageYOffset + document.querySelector(`div#${id}.con`).getBoundingClientRect().top - (HEADER.offsetHeight + 72),
        behavior: bh
    });
}