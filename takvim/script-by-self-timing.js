let namazTimes = [
    ["06:06","07:24","12:27","15:49","17:30","18:48"],
    ["06:05","07:23","12:27","15:50","17:32","18:50"],
    ["06:04","07:22","12:27","15:51","17:33","18:51"],
    ["06:03","07:21","12:27","15:52","17:34","18:52"],
    ["06:02","07:20","12:27","15:54","17:35","18:53"],
    ["06:01","07:19","12:27","15:55","17:37","18:54"],
    ["06:00","07:18","12:27","15:56","17:38","18:55"],
    ["05:59","07:17","12:27","15:57","17:39","18:56"],
    ["05:58","07:15","12:27","15:58","17:40","18:57"],
    ["05:57","07:14","12:28","15:59","17:41","18:58"],
    ["05:56","07:13","12:28","16:01","17:43","18:59"],
    ["05:55","07:12","12:28","16:02","17:44","19:01"],
    ["05:54","07:10","12:27","16:03","17:45","19:02"],
    ["05:53","07:09","12:27","16:04","17:46","19:03"],
    ["05:52","07:08","12:27","16:05","17:48","19:04"],
    ["05:50","07:07","12:27","16:06","17:49","19:05"],
    ["05:49","07:05","12:27","16:07","17:50","19:06"],
    ["05:48","07:04","12:27","16:09","17:51","19:07"],
    ["05:46","07:02","12:27","16:10","17:52","19:08"],
    ["05:45","07:01","12:27","16:11","17:54","19:10"],
    ["05:44","07:00","12:27","16:12","17:55","19:11"],
    ["05:42","06:58","12:27","16:13","17:56","19:12"],
    ["05:41","06:57","12:27","16:14","17:57","19:13"],
    ["05:40","06:55","12:26","16:15","17:58","19:14"],
    ["05:38","06:54","12:26","16:16","18:00","19:15"],
    ["05:37","06:52","12:26","16:17","18:01","19:16"],
    ["05:35","06:51","12:26","16:18","18:02","19:17"],
    ["05:34","06:49","12:26","16:19","18:03","19:18"]
]
function setLang(){
    let rus = ["Фаджр","Восход","Зухр","Acp","Магриб","Иша"];
    let uzb = ["Bomdod","Quyosh","Peshin","Asr","Shom","Xufton"];
    let eng = ["Fajr","Sunrise","Zuhr","Asr","Maghrib","Isha"]
    let namazNames = document.querySelectorAll('.namaz-name');
    let titleNamaz = document.getElementById('title-namaz');
    let titleTime = document.getElementById('title-time');
    let langValue = document.getElementById("languages");
    let currentCity = document.getElementById('current-city');
    let quoteText = document.getElementById('quote-text');
<<<<<<< HEAD:takvim/script-by-self-timing.js
    currentCity.innerText = 'Namangan';
    let date = document.getElementById("local-date");
    let headerTitle = document.getElementById("header-title");
    var selectedValue = langValue.options[langValue.selectedIndex].value;
    
    
=======
    let selectedValue = langValue.options[langValue.selectedIndex].value;
>>>>>>> 91c9fd1d8b820008fb5b36502ee011280af28a18:takvim/api.js
    if(selectedValue == "rus"){
        for (let i = 0; i < rus.length; i++){
            namazNames[i].innerText = rus[i];
            titleNamaz.innerText = "Время";
            titleTime.innerText = "намаза";
            currentCity.innerText = 'Наманган';
            quoteText.innerText = '"Совершайте намаз. Воистину, намаз предписан верующим в определенное время. (Ниса.103)"';
<<<<<<< HEAD:takvim/script-by-self-timing.js
            headerTitle.innerText = "Время намаза Наманган.";
            switch (new Date().getDay()) {
                case 0:date.textContent = "Воскресенъе"; break;       
                case 1:date.textContent = "Понеделъник";break;
                case 2:date.textContent = "Вторник";break;
                case 3:date.textContent = "Среда";break;
                case 4: date.textContent = "Четверг";break;
                case 5:date.textContent = "Пятнитца";break;
                case 6: date.textContent = "Суббота";
            }
=======
>>>>>>> 91c9fd1d8b820008fb5b36502ee011280af28a18:takvim/api.js
        }
    }
    else if(selectedValue == "eng"){
        for (let i = 0; i < eng.length; i++){
            namazNames[i].innerText = eng[i];
            titleNamaz.innerText = "Namaz"
            titleTime.innerText = "Time"
            quoteText.innerText = '"Perform the prayer. The prayer is obligatory for believers at specific times! (Nisa.103)"';
<<<<<<< HEAD:takvim/script-by-self-timing.js
            headerTitle.innerText = "Namangan prayer times.";
            switch (new Date().getDay()) {
                case 0:date.textContent = "Sunday";break;
                case 1:date.textContent = "Monday";break;
                case 2:date.textContent = "Tuesday";break;
                case 3:date.textContent = "Wednesday";break;
                case 4: date.textContent = "Thursday";break;
                case 5:date.textContent = "Friday";break;
                case 6: date.textContent = "Saturday";  
            }
=======
>>>>>>> 91c9fd1d8b820008fb5b36502ee011280af28a18:takvim/api.js
        }
    }
    else if(selectedValue == "uzb"){
        for (let i = 0; i < uzb.length; i++){
            namazNames[i].innerText = uzb[i];
            titleNamaz.innerText = "Namoz"
            titleTime.innerText = "Vaqtlari"
<<<<<<< HEAD:takvim/script-by-self-timing.js
            quoteText.innerText = '"Namozni to\'kis ado etinglar.Albatta namoz mo\'minlarga vaqtida farz qilingandir. (Niso.103)"'
            headerTitle.innerText = "Namangan namoz vaqtlari.";
            switch (new Date().getDay()) {
                case 0: date.textContent = "Yakshanba";break;
                case 1:date.textContent = "Dushanba";break;
                case 2:date.textContent = "Seshanba";break;
                case 3:date.textContent = "Chorshanba";break;
                case 4:date.textContent = "Payshanba";break;
                case 5:date.textContent = "Juma";break;
                case 6:date.textContent = "Shanba";
            }
        }
    }
}



=======
            quoteText.innerText = '"Namozni to\'kis ado etinglar.Albatta namoz mo\'minlarga vaqtida farz qilingandir. (Niso.103)"';
            }
        }
    let citiesInRus = ["Наманган","	Фергана","Андижан","Бухарa","Ташкент","Джизак","Хорезм","Навоий","Кашкадаря","Самарканд","Сырдаря"];
    let citiesInEng = ["Namangan","	Fergana","Andijan","Bukhara","Tashkent","Jizzakh","Khorazm","Navoi","Qarshi","Samarkand","Sirdarya"];
    let citiesInUzb = ["Namangan","Farg'ona","Andijon","Buxora","Toshkent","Jizzax","Xorazm","Navoiy","Qarshi","Samarqand","Sirdaryo"];
    let allCities = document.querySelectorAll(".city");
    if(selectedValue == "rus"){
        for (let l = 0; l < citiesInRus.length; l++){
            allCities[l].innerText = citiesInRus[l];
        }
    }
    else if(selectedValue == "uzb"){
        for (let l = 0; l < citiesInUzb.length; l++){
            allCities[l].innerText = citiesInUzb[l];
        }
    }
    else if(selectedValue == "eng"){
        for (let l = 0; l < citiesInEng.length; l++){
            allCities[l].innerText = citiesInEng[l];
        }
    }
}
>>>>>>> 91c9fd1d8b820008fb5b36502ee011280af28a18:takvim/api.js
function setTime() {
    let time = document.getElementById('local-time');
    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
   
    if( hours.length <= 1 ) {
        hours = "0" + hours
    }
    else if( minutes.length <= 1 ) {
        minutes = "0" + minutes
    }
    time.innerText = hours + ":" + minutes;
}
function showNotification() {
    const notification =  new Notification("new message from takvim", {
        body: "hey, it is praying time",
        icon: "https://img.icons8.com/color/48/000000/mosque.png"
    });
}
if(Notification.permission !== "denied")
{
    Notification.requestPermission().then(permission => {
        console.log(permission);
    });
}
<<<<<<< HEAD:takvim/script-by-self-timing.js


let prayerTimes = document.querySelectorAll(".namaz-time");
let currentPrayerTime = document.querySelectorAll(".namaz-sections")

function setTakvim(){
    let date = new Date().getDate();
=======
function setCity() {
    let cityValue = document.getElementById('cities');
    let selectedCountryValue = cityValue.options[cityValue.selectedIndex].value;
    var URL = 'http://api.aladhan.com/v1/calendarByCity?city='+selectedCountryValue+'&country=uzbekistan&school=1';
    let date = new Date().getDate()
    let prayerTimes = document.querySelectorAll(".namaz-time");
    let currentDate = document.getElementById("current-date");
    let longitude = document.getElementById("long");
    let latitude = document.getElementById("lat");
    axios.get(URL).then(response => {prayerTimes[0].innerText = response.data.data[date - 1].timings.Fajr.slice(0,5),
        prayerTimes[1].innerText = response.data.data[date - 1].timings.Sunrise.slice(0,5),
        prayerTimes[2].innerText = response.data.data[date - 1].timings.Dhuhr.slice(0,5),
        prayerTimes[3].innerText = response.data.data[date - 1].timings.Asr.slice(0,5),
        prayerTimes[4].innerText = response.data.data[date - 1].timings.Maghrib.slice(0,5),
        prayerTimes[5].innerText = response.data.data[date - 1].timings.Isha.slice(0,5),
        currentDate.innerText = response.data.data[date - 1].date.gregorian.date,
        latitude.innerText = response.data.data[date - 1].meta.latitude,
        longitude.innerText = response.data.data[date - 1].meta.longitude});
}
function setTakvim() {
    let currentPrayerTime = document.querySelectorAll(".namaz-sections")
>>>>>>> 91c9fd1d8b820008fb5b36502ee011280af28a18:takvim/api.js
    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let seconds = new Date().getSeconds().toString();
    if( hours.length <= 1 ) {
        hours = "0" + hours
    }
    else if( minutes.length <= 1 ) {
        minutes = "0" + minutes
    }
    var fullHour = hours + ":" + minutes;
    for(let x = 0; x < namazTimes[date - 1].length; x++){
        prayerTimes[x].innerText = namazTimes[date - 1][x];
        currentPrayerTime[x].classList.remove('current-namaz-time')
        if ((fullHour == namazTimes[date - 1][x] || fullHour > namazTimes[date - 1][x]) && fullHour < namazTimes[date - 1][x + 1]){
            currentPrayerTime[x].classList.add("current-namaz-time"); 
        }
        else if(fullHour >= namazTimes[date - 1][5]){
            currentPrayerTime[5].classList.add('current-namaz-time');
        }
        if (fullHour == namazTimes[date - 1][x] && seconds == 1){
            showNotification();
        }
    }
}
var interval = setInterval(setTakvim, 60000);
var interval  = setInterval(setLang, 60000);
var interval = setInterval(setTime, 60000);
let URL = "http://api.aladhan.com/v1/calendarByCity?city=namangan&country=Uzbekistan";
axios.get(URL)
.then(response => console.log(response));
