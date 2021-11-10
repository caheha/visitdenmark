// Import components
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import DetailView from '../components/DetailView.js';

// Import data
import { data } from '../router.js';

// Export categories view
export default function Categories() {

    // Store categories
    let _categories = [];

    // Fetch categories
    async function fetchCategories() {
        let url = "/json/da/categories.json";
        let response = await fetch(url);
        let data = await response.json();
        _categories = data;
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            window.navigateTo('#/aarhus');
        }
        appendCategories(_categories);
    }
    fetchCategories();

    // Append main categories
    function appendCategories(categories) {
        let html = "";
        for (const category of categories) {
            html += /*html*/`
                <article class="category" onclick="chooseCategory(${category.Id})">
                    <img src="${category.ImageUrl}" alt="${category.Name}">
                    <div>${category.Name}</div>
                </article>
            `;
        }
        document.querySelector('.categories-wrapper').innerHTML = html;
    }

    // Onclick event for when a main category is chosen, update DOM
    window.chooseCategory = (categoryId) => {
        let category = _categories.find(category => category.Id == categoryId);

        document.querySelector('.categories-container h1').innerHTML = category.Name;
        document.querySelector('.categories-wrapper').style.display = "none";
        document.querySelector('.subcategories-wrapper').style.display = "grid";
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            goBackToCategories();
        }

        let html = "";
        for (const subcategory of category.Children) {
            html += /*html*/`
                <article class="category" onclick="chooseSubCategory(${subcategory.Id}, '${category.Name}')">
                    <img src="${subcategory.ImageUrl}" alt="${subcategory.Name}">
                    <div>${subcategory.Name}</div> 
                </article>
            `;
        }
        document.querySelector('.subcategories-wrapper').innerHTML = html;
    }

    // Onclick event for when returning to main categories, update DOM
    window.goBackToCategories = () => {       
        document.querySelector('.categories-container h1').innerHTML = "Hvad vil du gerne opleve?";
        document.querySelector('.categories-wrapper').style.display = "block";
        document.querySelector('.subcategories-wrapper').style.display = "none";
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            window.navigateTo('#/aarhus');
        }
    }

    // Onclick event for when a sub category is chosen, update DOM
    window.chooseSubCategory = (categoryId, categoryName) => {
        let foundName = false;
        let currentCategory = {};
        for (const categories of _categories) {
            if (!foundName) {
                if (categories.Children.find(subcategory => subcategory.Id == categoryId)) {
                    currentCategory = categories.Children.find(subcategory => subcategory.Id == categoryId);
                    foundName = true;
                    break;
                }
            }
        }

        document.querySelector('.categories-container h1').innerHTML = currentCategory.Name;
        document.querySelector('.subcategories-wrapper').style.display = "none";
        document.querySelector('.activities-wrapper').style.display = "block";
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            goBackToSubCategories(categoryName);
        }
        
        let activities = data.activities.filter(activity => activity.Category.Id == categoryId);
        
        if (activities.length > 0) {
            let html = "";
            for (const activity of activities) {
                let img = activity.Files.length > 0 ? `<img src="${activity.Files[0].Uri}" alt="${activity.Name}">` : `<img src="/img/aarhus.png" alt="Aarhus">`;
                html += /*html*/`
                    <article class="category" onclick="detailViewActivity(${activity.Id}, '${currentCategory.Name}')">
                        ${img}
                        <div>${activity.Name}</div> 
                    </article>
                `;
            }
            document.querySelector('.activities-wrapper').innerHTML = html;
        } else {
            document.querySelector('.activities-wrapper').innerHTML = "Ingen resultater";
        }
    }

    // Onclick event for when a returning to subcategory view, update DOM
    window.goBackToSubCategories = (categoryName) => {       
        document.querySelector('.categories-container h1').innerHTML = categoryName;
        document.querySelector('.activities-wrapper').style.display = "none";
        document.querySelector('.subcategories-wrapper').style.display = "grid";
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            window.navigateTo('#/aarhus');
        }
    }

    // Onclick event displaying detail view for activity, update DOM
    window.detailViewActivity = (activityId, subcategoryName) => {
        document.querySelector('.categories-container').style.display = "none";
        document.querySelector('.detail-component').style.display = "block";
        document.querySelector('.detail-component').innerHTML = DetailView(activityId);
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            goBackToActivities(subcategoryName);
        }
    }

    // Go back to activites view, update DOM
    window.goBackToActivities = (subcategoryName) => {
        document.querySelector('.categories-container').style.display = "block";
        document.querySelector('.detail-component').style.display = "none";
        // Update go back arrow
        document.querySelector('.go-back').onclick = (event) => {
            event.preventDefault();
            goBackToSubCategories(subcategoryName);
        }
    }

    // Return view HTML
    return /*html*/ `
        ${Header( {backBtn: true} )}
        <main>
            <section class="categories-container">
                <h1 class="text-centered">Hvad vil du gerne opleve?</h1>
                <section class="categories-wrapper"></section>
                <section class="subcategories-wrapper"></section>
                <section class="activities-wrapper"></section>
            </section>
            <section class="detail-component"></section>
        </main>
        ${Navigation()}
    `;
}