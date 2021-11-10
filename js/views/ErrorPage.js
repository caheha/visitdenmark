// Import components
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import Link from '../utils/Link.js';

// Export ErrorPage view
export default function ErrorPage() {
    // Return view HTML
    return /*html*/ `
        ${Header( {backBtn: true} )}

        <main>
            <section class="error-page">
                <h1 class="text-centered">Hov... det ser ud til, at du er faret vild</h1>
                <img src="/img/404.svg" alt="404 billede">
                <h2 class="text-centered error-h2">Lad os hjælpe dig med at komme på det rette spor</h2>
                
                ${Link('#/', /*html*/ `<button class="error-btn bold"><span class="material-icons">chevron_left</span>Tilbage</button>`)}
            </section>
        </main>

        ${Navigation()}
    `;
}