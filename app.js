const day = document.querySelector('.day')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const hour = document.querySelector('.hours')
const minute = document.querySelector('.minutes')
const second = document.querySelector('.seconds')

const months =[
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]
function livedate(){
        const now = new Date();
        day.textContent=now.getDate()<10?'0'+now.getDate():now.getDate()
        month.textContent=months[now.getMonth()]
        year.textContent= now.getFullYear()
        hour.textContent= now.getHours()<10?'0'+now.getHours():now.getHours()
        minute.textContent= String(now.getMinutes()).padStart(2,'0');// bu tepadagi bilan birxil vazifa bajaradi padStart
        second.textContent= String(now.getSeconds()).padStart(2,'0');
}
setInterval(livedate,1000)
    
livesec();