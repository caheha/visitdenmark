// Import components
import Navigation from '../components/Navigation.js';
import Link from '../utils/Link.js';

// Export Aarhus view
export default function Aarhus() {
    // Return view HTML
    return /*html*/ `
        <header class="header">
            <a class="go-back" onclick="event.preventDefault(); window.navigateTo('#/explore');">
                <span class="material-icons">chevron_left</span>
            </a>
            ${Link('#/', /*html*/ `<img class="logo" src="/img/logo_blue.png" alt="Logo" title="VisitDenmark Logo">`)}
        </header>

        <main>
            <section class="intro">
                <div>
                    <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/hero/public/2021-06/Your%20rainbow%20panorama%2C%202011%2C%20Olafur%20Eliasson%20ARoS%20Aarhus%20Kunstmuseum%20Foto_Anders_Tr%C3%A6rup%3B%20Aarhus%20media%20center.jpg?h=10d202d3&itok=BX63066r" alt="Aarhus">
                    <h1>Aarhus</h1>
                </div>
                <p>Befinder du dig i Aarhusregionen, bliver du mødt af en god kombination af store skove, kyster med fine strande og travle og spændende byer såsom Ebeltoft og Grenaa. Med et væld af kulturoplevelser og lækre caféer og restauranter er Aarhus et godt udgangspunkt for at udforske dette område.</p>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Tag hånd om mulighederne</h2>
                <p>Her kan du gennemsøge alt, hvad Aarhus har at tilbyde.</p>
                <section class="grid">
                    ${Link('#/kategorier', /*html*/ `<article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2019-09/aarhus_photo_robin_skjoldborg_10.jpg?h=98c7bbf1&itok=yCQ4udhI" alt="Aarhus">
                        <div>Gennemsøg kategorier</div>
                    </article>`)}
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2020-05/Nyhavn_photo_christian-moller.jpg?h=6a2d0933&itok=OTP1vNUY" alt="København">
                        <div>Events<br>Lige nu</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2019-10/Odense-Old-Quarter-Christmas_visitodense.jpg?h=8abcec71&itok=Qz6oJ3gN" alt="Odense">
                        <div>Lykkehjul<br>Prøv lykken</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2020-09/Utzon_Rasmus%20Hjortsh%C3%B8j.jpg?h=36c6c889&itok=f9rsNo5u" alt="Aalborg">
                        <div>Aarhus<br>Top 10</div>
                    </article>
                </section>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Ikonerne fra Aarhus</h2>
                <p>Oplev hvert smukke og unikke hjørne af Danmark. Det er måske en intim, hygge-agtig by, men Aarhus slår for alvor et slag, når det kommer til ikonisk arkitektur.</p>
                <section class="slider">
                    <article class="category">
                        <img src="/img/bridge.png" alt="Den uendelige bro">
                        <div>Den uendelige bro</div>
                    </article>
                    <article class="category">
                        <img src="https://fastly.4sqi.net/img/general/200x200/mrLRfb_W7SErdBJPlNlzUvQSpUCZy1RXetRisv0Hh9g.jpg" alt="Regnbuen">
                        <div>Gå igennem regnbuen</div>
                    </article>
                    <article class="category">
                        <img src="/img/isbjerget.png" alt="Isbjerget">
                        <div>Isbjerget</div>
                    </article>
                </section>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Highlights omkring Aarhus</h2>
                <p>Fra Nationalpark Mols Bjerge til det fantastiske Moesgaard Museum, gemt i bakkerne omkring Aarhus, er der et væld af naturlige eventyr, der venter på at blive taget i Aarhus-regionen.</p>
                <section class="slider">
                    <article class="category">
                        <img src="/img/molsbjerge.png" alt="Mols bjerge">
                        <div>Mols Bjerge</div>
                    </article>
                    <article class="category">
                        <img src="https://gdkfiles.visitdenmark.com/files/484/225870_moesgaard-museum-visitaarhus1024.jpg?width=1024" alt="Moesgaard">
                        <div>Mosgaard</div>
                    </article>
                    <article class="category">
                        <img src="/img/gamleby.png" alt="Amalienborg">
                        <div>Den Gamle By</div>
                    </article>
                </section>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Smagen af Aarhus</h2>
                <p>Ja, vi spiser mange mærkelige ting i Danmark, lige fra karamelliserede kartofler til lakrids, og Aarhus er ingen undtagelse. Men de har mange steder, hvor du absolut ville elske at spise!</p>
                <section class="slider">
                    <article class="category">
                        <img src="/img/food2.png" alt="Mad">
                        <div>KÖD</div>
                    </article>
                    <article class="category">
                        <img src="/img/food3.png" alt="Mad">
                        <div>Klokken Aarhus</div>
                    </article>
                    <article class="category">
                        <img src="/img/streetfood.png" alt="Street Food">
                        <div>Street food</div>
                    </article>
                </section>
            </section>

        </main>

        ${Navigation()}
    `;
}