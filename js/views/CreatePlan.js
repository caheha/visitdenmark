import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import ReRender from '../utils/ReRender.js';

export default function CreatePlan() {

    let _cities = [];

    let choices = {
        city: '',
        startDate: '',
        endDate: '',
        categories: []
    }

    async function fetchCities() {
        const url = "/json/da/cities.json";
        let response = await fetch(url);
        let data = await response.json();
        _cities = data;
        document.querySelector('.progress').style.width = "calc(100% / 3)";
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            window.navigateTo('#/');
        }
        appendCities(_cities);
        setMinDate();
    }

    fetchCities()

    function appendCities(cities) {
        const container = document.querySelector('.city-list');

        let html = "";
        for (const city of cities) {
            html += /*html*/`
                <article class="city" onclick="chooseCity('${city.name}')">
                    <img src="${city.img}" alt="${city.name}">
                    <div>
                        <h3>${city.name} <span class="material-icons">chevron_right</span></h3>
                        <p>${city.description}</p>
                    </div>
                </article>
            `;
        }
        container.innerHTML = html;
    }

    window.searchCities = (searchValue) => {
        
        searchValue = searchValue.toLowerCase();

        let results = [];

        for (const city of _cities) {
            let name = city.name.toLowerCase();
            if (name.includes(searchValue)) {
                results.push(city);
            }
        }

        appendCities(results);
    }



    window.chooseCity = (city) => {
        choices.city = city;
        
        document.querySelector('.create-plan h1').innerHTML = "Hvornår skal du afsted?";
        document.querySelector('.choose-city').style.display = "none";
        document.querySelector('.choose-days').style.display = "block";
        document.querySelector('.progress').style.width = "calc(100% / 3 * 2)";
        document.querySelector('.progress-bar-titles p:first-child').classList.remove('bold');
        document.querySelector('.progress-bar-titles p:nth-child(2)').classList.add('bold');
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            ReRender();
        }

        console.log(choices);
    }



    window.setMinDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        dd = dd < 10 ? '0' + dd : dd;

        mm = mm < 10 ? '0' + mm : mm;

        today = yyyy + '-' + mm + '-' + dd;
        console.log(today);
        return today;
    }

    let startChanged = false;
    let endChanged = false

    window.startDateChanged = (date) => {
        document.getElementById('enddate').setAttribute('min', date);
        startChanged = true;
        updateButton();
    }

    window.endDateChanged = (date) => {
        document.getElementById('startdate').setAttribute('max', date);
        endChanged = true;
        updateButton();
    }

    window.missingDates = () => {
        document.querySelector('.error-text').innerHTML = "Du skal udfylde datoerne før du kan gå videre";
    }

    function updateButton() {
        if (startChanged && endChanged) {
            document.querySelector('.choose-days button').onclick = (event) => {
                event.preventDefault();
                chooseDays();
            }
            document.querySelector('.choose-days button').style.backgroundColor = "var(--red)";
            document.querySelector('.error-text').innerHTML = "";
        }
    }

    window.chooseDays = () => {
        choices.startDate = document.getElementById('startdate').value
        choices.endDate = document.getElementById('enddate').value;
        
        document.querySelector('.create-plan h1').innerHTML = "Hvad kunne du tænke dig at lave?";
        document.querySelector('.choose-days').style.display = "none";
        document.querySelector('.choose-categories').style.display = "block";
        document.querySelector('.progress').style.width = "calc(100% / 3 * 3)";
        document.querySelector('.progress-bar-titles p:nth-child(2)').classList.remove('bold');
        document.querySelector('.progress-bar-titles p:last-child').classList.add('bold');
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            chooseCity(choices.city);
            document.querySelector('.choose-categories').style.display = "none";
        }

        console.log(choices);
    }





    return /*html*/ `
        ${Header( {backBtn: true} )}

        <main>
            <section class="create-plan">
                <h1 class="text-centered">Hvor skal du hen?</h1>

                <section class="progress-bar-container">
                    <div class="progress-bar-titles">
                        <p class="bold">By</p>
                        <p>Dage</p>
                        <p>Kategorier</p>
                    </div>
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                </section>

                <section class="choose-city">
                    <input placeholder="Indtast din destination" onkeyup="searchCities(this.value)">
                    <section class="city-list"></section>
                </section>

                <section class="choose-days">
                    <div class="choose-day-container">
                        <h2>Tager afsted:</h2>
                        <input id="startdate" type='date' min="${setMinDate()}" onchange="startDateChanged(this.value)">
                    </div>
                    <div class="choose-day-container">
                        <h2>Tager hjem:</h2>
                        <input id="enddate" type='date' min="${setMinDate()}" onchange="endDateChanged(this.value)">
                    </div>

                    <button class="choose-day-btn" onclick="missingDates()">Næste</button>
                    <p class="error-text"></p>
                </section>

                <section class="choose-categories">
                    vælg aktiviteter
                </section>
            </section>
        </main>
   
        ${Navigation()}
    `;
}