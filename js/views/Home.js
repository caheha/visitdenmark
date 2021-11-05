import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import Link from '../utils/Link.js'

export default function Home() {
    return /*html*/ `
        ${Header()}

        <main>
        ${Link('#/createplan', /*html*/ `<button>Planlæg din tur</button>`)}
        ${Link('#/search', /*html*/ `<button>Gennemsøg alle aktiviteter</button>`)}
        </main>

        ${Navigation()}
    `;
}
