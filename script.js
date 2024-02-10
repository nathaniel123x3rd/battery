const percentage = document.querySelector('.percentage');
const percent = document.querySelector('.percent');
navigator.getBattery().then(function(battery){
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
})

const sec = document.querySelector('.sec');
const toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    sec.classList.toggle('dark container');
}
