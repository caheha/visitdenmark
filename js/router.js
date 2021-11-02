// Views
import ErrorPage from './views/ErrorPage.js';
import Home from './views/Home.js';
import NewPage from './views/Page.js';

// Routes
const routes = [
    {
        path: '#/',
        view: Home,
        title: 'Forside'
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
    window.history. pushState(null, null, path);
    render(data);
}

// History 
window.onpopstate = () => render();

// First load
window.onload = () => render();