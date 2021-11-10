// Import utilities
import Link from '../utils/Link.js'

// Export component
export default function Nav() {

    // Return component HTML
    return /*html*/ `
        <nav class="navigation">
            ${Link('#/', /*html*/ `<span class="material-icons">home</span>Hjem`)}
            ${Link('#/explore', /*html*/ `<span class="material-icons">search</span>Søg`)}
            ${Link('#/createplan', /*html*/ `<span class="material-icons">edit_calendar</span>Planlæg tur`)}
        </nav>
    `;
}