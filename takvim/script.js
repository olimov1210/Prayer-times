function setLang(){
    let rus = ["Фаджр","Восход","Зухр","Acp","Магриб","Иша"];
    let uzb = ["Bomdod","Quyosh","Peshin","Asr","Shom","Xufton"];
    let eng = ["Fajr","Sunrise","Zuhr","Asr","Maghrib","Isha"]
    let namazNames = document.querySelectorAll('.namaz-name');
    let titleNamaz = document.getElementById('title-namaz');
    let titleTime = document.getElementById('title-time');
    let langValue = document.getElementById("languages");
    let quoteText = document.getElementById('quote-text');
    let selectedValue = langValue.options[langValue.selectedIndex].value;
    if(selectedValue == "rus"){
        for (let i = 0; i < rus.length; i++){
            namazNames[i].innerText = rus[i];
            titleNamaz.innerText = "Время";
            titleTime.innerText = "намаза";
            quoteText.innerText = '"Совершайте намаз. Воистину, намаз предписан верующим в определенное время. (Ниса.103)"';
        }
    }
    else if(selectedValue == "eng"){
        for (let i = 0; i < eng.length; i++){
            namazNames[i].innerText = eng[i];
            titleNamaz.innerText = "Namaz"
            titleTime.innerText = "Time"
            quoteText.innerText = '"Perform the prayer. The prayer is obligatory for believers at specific times! (Nisa.103)"';
        }
    }
    else if(selectedValue == "uzb"){
        for (let i = 0; i < uzb.length; i++){
            namazNames[i].innerText = uzb[i];
            titleNamaz.innerText = "Namoz"
            titleTime.innerText = "Vaqtlari"
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
    });
}
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
        currentDate.innerText = response.data.data[date - 1].date.gregorian.date});
}
function setTakvim() {
    let currentPrayerTime = document.querySelectorAll(".namaz-sections")
    let hours = new Date().getHours().toString();
    let minutes = new Date().getMinutes().toString();
    let seconds = new Date().getSeconds().toString();
    if( hours.length <= 1 ) {
        hours = "0" + hours
    }
    else if( minutes.length <= 1 ) {
        minutes = "0" + minutes
    }
    let prayerTimes = document.querySelectorAll(".namaz-time");
    var fullHour = hours + ":" + minutes;
    for(let i = 0; i < prayerTimes.length; i++) {
        currentPrayerTime[i].classList.remove('current-namaz-time');
        if(fullHour >= prayerTimes[5].innerText){
            currentPrayerTime[5].classList.add('current-namaz-time');
        }
        else if((fullHour == prayerTimes[i].innerText || fullHour > prayerTimes[i ].innerText) && fullHour < prayerTimes[i + 1].innerText) {
           currentPrayerTime[i].classList.add('current-namaz-time')
        }
        if (fullHour == prayerTimes[i].innerText && seconds == 1){
            showNotification();
        }
    }
}
var interval = setInterval(setTakvim, 1000);
var interval = setInterval(setLang, 1000);
var interval = setInterval(setTime, 1000);