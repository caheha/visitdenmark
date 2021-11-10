// Import components
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import Link from '../utils/Link.js'

export default function Home() {
    // Return view HTML
    return /*html*/ `
        ${Header()}

        <main>
            ${Link('#/createplan', /*html*/ `
                <article class="category frontpage">
                    <img src="/img/plan.jpg" alt ="Plan">
                    <div><p>Lav en plan<br><b>for din tur</b><p></div> 
                </article>`)}
            ${Link('#/explore', /*html*/ `
                <article class="category frontpage">
                    <img src="/img/browse.jpg" alt ="Søg">
                    <div><p>Gennemsøg<br><b>alle aktiviteter</b><p></div> 
                </article>`)}
        </main>

        ${Navigation()}
    `;
}
