// Import components
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

// Import data
import { data } from '../router.js';

// Export create plan view
export default function CreatePlan() {

    // Store cities
    let _cities = [];

    // Store current choices
    let choices = {
        city: '',
        startDate: '',
        endDate: '',
        categories: []
    }

    // Fetch cities
    async function fetchCities() {
        const url = "/json/da/cities.json";
        let response = await fetch(url);
        let data = await response.json();
        _cities = data;
        document.querySelector('.progress').style.width = "calc(100% / 3)";
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            window.navigateTo('#/');
        }
        appendCities(_cities);
    }

    fetchCities()

    // Append cities to view, update DOM
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

    // Search for cities, update DOM with results
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

    // Onclick event for returning to start of flow
    window.goBackToStart = () => {       
        document.querySelector('.create-plan h1').innerHTML = "Hvor skal du hen?";
        document.querySelector('.choose-days').style.display = "none";
        document.querySelector('.choose-city').style.display = "block";
        document.querySelector('.progress').style.width = "calc(100% / 3)";
        document.querySelector('.progress-bar-titles p:nth-child(2)').classList.remove('bold');
        document.querySelector('.progress-bar-titles p:first-child').classList.add('bold');
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            window.navigateTo('#/');
        }
    }

    // Onclick event for when a city is chosen, update DOM
    window.chooseCity = (city) => {
        choices.city = city;
        document.querySelector('.create-plan h1').innerHTML = "Hvornår skal du afsted?";
        document.querySelector('.choose-city').style.display = "none";
        document.querySelector('.choose-days').style.display = "block";
        document.querySelector('.progress').style.width = "calc(100% / 3 * 2)";
        document.querySelector('.progress-bar-titles p:first-child').classList.remove('bold');
        document.querySelector('.progress-bar-titles p:last-child').classList.remove('bold');
        document.querySelector('.progress-bar-titles p:nth-child(2)').classList.add('bold');
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            goBackToStart();
        }
    }


    // Return current date
    window.setMinDate = () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        dd = dd < 10 ? '0' + dd : dd;

        mm = mm < 10 ? '0' + mm : mm;

        today = yyyy + '-' + mm + '-' + dd;
        return today;
    }

    // Bools to check if date range has changed
    let startChanged = false;
    let endChanged = false

    // Event for start date changing, update bool
    window.startDateChanged = (date) => {
        document.getElementById('enddate').setAttribute('min', date);
        startChanged = true;
        updateButton();
    }

    // Event for end date changing, update bool
    window.endDateChanged = (date) => {
        document.getElementById('startdate').setAttribute('max', date);
        endChanged = true;
        updateButton();
    }

    // If user tries to proceed, tell them to fill in dates
    window.missingDates = () => {
        document.querySelector('.error-text').innerHTML = "Du skal udfylde datoerne før du kan gå videre";
    }

    // Update proceed button if date range has been set
    function updateButton() {
        if (startChanged && endChanged) {
            // Update go back arrow
            document.querySelector('.choose-days button').onclick = (event) => {
                event.preventDefault();
                chooseDays();
                appendCategories();
            }
            document.querySelector('.choose-days button').style.backgroundColor = "var(--red)";
            document.querySelector('.error-text').innerHTML = "";
        }
    }

    // Update DOM when date range has been chosen
    window.chooseDays = () => {
        choices.startDate = document.getElementById('startdate').value
        choices.endDate = document.getElementById('enddate').value;
        
        document.querySelector('.create-plan h1').innerHTML = "Hvad interesserer dig?";
        document.querySelector('.choose-days').style.display = "none";
        document.querySelector('.choose-categories').style.display = "block";
        document.querySelector('.progress').style.width = "calc(100% / 3 * 3)";
        document.querySelector('.progress-bar-titles p:nth-child(2)').classList.remove('bold');
        document.querySelector('.progress-bar-titles p:last-child').classList.add('bold');
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            chooseCity(choices.city);
            document.querySelector('.choose-categories').style.display = "none";
            document.querySelector('.progress-bar-titles p:last-child').classList.remove('bold');
        }
    }

    // Append subcategories to view
    window.appendCategories = () => {
        let attractionsHTML = "";
        for (const category of data.categories[0].Children) {
            attractionsHTML += getCategoryHTML(category);
        }
        document.querySelector('.attractions-list').innerHTML = attractionsHTML;

        let activitiesHTML = "";
        for (const category of data.categories[1].Children) {
            activitiesHTML += getCategoryHTML(category);
        }
        document.querySelector('.activities-list').innerHTML = activitiesHTML;

        let eventsHTML = "";
        for (const category of data.categories[2].Children) {
            eventsHTML += getCategoryHTML(category);
        }
        document.querySelector('.events-list').innerHTML = eventsHTML;

        let foodAndDrinksHTML = "";
        for (const category of data.categories[3].Children) {
            foodAndDrinksHTML += getCategoryHTML(category);
        }
        document.querySelector('.food-and-drinks-list').innerHTML = foodAndDrinksHTML;
    }

    // Return HTML for categories
    function getCategoryHTML(category) {
        return /*html*/`
            <article class="category" id="id-${category.Id}" onclick="addRemoveCategory(${category.Id})">
                <img src="${category.ImageUrl}" alt="${category.Name}">
                <div>${category.Name}</div>
            </article>
        `;
    }

    // Add/remove category from choices, update DOM
    window.addRemoveCategory = (id) => {
        let container = document.querySelector(`#id-${id} div`);

        if (!choices.categories.find(category => category == id)) {
            choices.categories.push(id);
            container.style.color = "var(--green)";
            container.style.borderColor = "var(--green)";
        } else {
            choices.categories = choices.categories.filter(category => category != id);
            container.style.color = "var(--white)";
            container.style.borderColor = "var(--white)";
        }

        if (choices.categories.length > 0) {
            document.querySelector('.pick-activities-btn').style.display = "flex";
        } else {
            document.querySelector('.pick-activities-btn').style.display = "none";
        }
    }

    // Onclick event for when subcategories have been selected, update DOM
    window.chooseCategories = () => {        
        document.querySelector('.create-plan h1').innerHTML = `Aktiviteter i ${choices.city}`;
        document.querySelector('.choose-categories').style.display = "none";
        document.querySelector('.choose-activities').style.display = "block";
        document.querySelector('.progress-bar-container').style.display = "none";
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            chooseDays();
            document.querySelector('.progress-bar-container').style.display = "block";
            document.querySelector('.choose-activities').style.display = "none";
        }
        window.scrollTo( {top: 0} )

        // Since we only have data for Aarhus, only append the data if Aarhus has been selected
        if (choices.city == "Aarhus") {
            appendActivities(choices.categories);
        } else {
            document.querySelector('.activities-wrapper').innerHTML = `Der er ingen aktiviteter for ${choices.city}`;
        }
        appendActivities(choices.categories);
    }

    // Append activities within selected subcategories
    function appendActivities(categoryIDs) {
        let html = "";
        let activities = [];
        for (const categoryID of categoryIDs) {
            activities = data.activities.filter(activity => activity.Category.Id == categoryID);

            let foundName = false;
            let currentCategory = {};
            for (const categories of data.categories) {
                if (!foundName) {
                    if (categories.Children.find(subcategory => subcategory.Id == categoryID)) {
                        currentCategory = categories.Children.find(subcategory => subcategory.Id == categoryID);
                        foundName = true;
                        break;
                    }
                }
            }
            html += /*html*/`
                <h3>${currentCategory.Name}</h3>
                <section>
                    ${getActivityHTML(activities)}
                </section>
            `;
        }
        document.querySelector('.activities-wrapper').innerHTML = html;
    }

    // Return HTML for one supcategory
    function getActivityHTML(activities) {
        let html = "";
        for (const activity of activities) {
            html += /*html*/`
                <article class="activity">
                    <img src="${activity.Files[0].Uri}" alt="${activity.Files[0].AltText}">
                    <div>${activity.Name}</div>
                </article>
            `;
        }
        return html;
    }

    // Return view HTML
    return /*html*/ `
        ${Header( {backBtn: true} )}
        <main>
            <section class="create-plan">
                <h1 class="text-centered">Hvor skal du hen?</h1>

                <section class="progress-bar-container">
                    <div class="progress-bar-titles">
                        <p class="bold">By</p>
                        <p>Dage</p>
                        <p>Aktiviteter</p>
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
                    <h2>Attraktioner</h2>
                    <section class="attractions-list"></section>
                    <h2>Aktiviteter</h2>
                    <section class="activities-list"></section>
                    <h2>Begivenheder</h2>
                    <section class="events-list"></section>
                    <h2>Mad og drikke</h2>
                    <section class="food-and-drinks-list"></section>

                    <button onclick="chooseCategories()" class="pick-activities-btn">Gå videre<span class="material-icons">chevron_right</span></button>
                </section>


                <section class="choose-activities">
                    <section class="activities-wrapper"></section>
                </section>
            </section>
        </main>
   
        ${Navigation()}
    `;
}