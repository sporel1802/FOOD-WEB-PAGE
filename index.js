const searchicon1 = document.querySelector("#searchicon1"); 
const searchinput1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click", function () {
    searchinput1.style.display = 'flex'; 
    searchicon1.style.display = 'none'; 
});

const searchicon2 = document.querySelector("#searchicon2"); 
const searchinput2 = document.querySelector("#searchinput2");

searchicon2.addEventListener("click", function () {
    searchinput2.style.display = 'flex'; 
    searchicon2.style.display = 'none'; 
});

const bar = document.querySelector('.fa-bars'); 
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});
