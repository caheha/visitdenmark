// Views
import ErrorPage from './views/ErrorPage.js';
import Home from './views/Home.js';
import CreatePlan from './views/CreatePlan.js';
import NewPage from './views/Page.js';

// Routes
const routes = [
    {
        path: '#/',
        view: Home,
        title: 'Forside'
    },
    {
        path: '#/createplan',
        view: CreatePlan,
        title: 'Opret tid'
    },
    {
        path: '#/newpage',
        view: NewPage,
        title: 'NewPage'
    }
]

// Root
const root = document.getElementById('root');

// Render view
function render(data) {
    let route = routes.find(route => route.path === location.hash);

    if (!location.hash) route = routes[0];
    if (route === undefined){
        root.innerHTML = ErrorPage();
        document.title = "Der opstod en fejl";
    } else {
        root.innerHTML = route.view(data);
        document.title = route.title;
    }
}

// Global navigation
window.navigateTo = (path, data) => {
    window.history.pushState(null, null, path);
    render(data);
}

// History 
window.onpopstate = () => render();

// First load
window.onload = () => render();


// JSON files
const categoriesURL = "./json/da/categories.json";
const activitiesURL = "./json/da/data.json";

// Data collection
export let data = {
    categories: await fetchJSON(categoriesURL),
    activities: await fetchJSON(activitiesURL)
}

// Fetch function
async function fetchJSON(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// Log data
console.log(data);

// Special icons
//let icon = '\u2126 \u007C \u2039 \u00A1 \u00B1';