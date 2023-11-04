const btn = document.querySelector('.btn');

function darkThemeSwitch() {
    const body = document.body;
    const darkTheme = localStorage.getItem('darktheme') === 'true';


    localStorage.setItem('darktheme', !darkTheme);
    body.classList.toggle('dark-theme', !darkTheme);
}


btn.addEventListener('click', darkThemeSwitch);

function onload() {
    document.body.classList.toggle('dark-theme', localStorage.getItem('darktheme') === 'true')
}
document.addEventListener('DOMContentLoaded', onload)