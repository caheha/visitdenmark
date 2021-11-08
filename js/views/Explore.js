import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import Link from '../utils/Link.js';

export default function Explore() {
    return /*html*/`
        <header class="header">
            <a class="go-back" onclick="event.preventDefault(); window.navigateTo('#/');">
                <span class="material-icons">chevron_left</span>
            </a>
            ${Link('#/', /*html*/ `<img class="logo" src="/img/logo_blue.png" alt="Logo" title="VisitDenmark Logo">`)}
        </header>

        <main>
            <section class="explore-section">
                <h1 class="text-centered">Danmark</h1>
                <p>Tryk et sted på kortet for at se detaljer om det område.</p>
                <img src="/img/map.png" alt="Kort">
            </section>

            <section class="explore-section">
                <h2 class="text-centered">De 4 store</h2>
                <p>Småt men godt, er nok det, der beskriver de største danske byer bedst.</p>
                <section class="grid">
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2020-05/Nyhavn_photo_christian-moller.jpg?h=6a2d0933&itok=OTP1vNUY" alt="København">
                        <div>København</div>
                    </article>
                    ${Link('#/aarhus', /*html*/ `<article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2019-09/aarhus_photo_robin_skjoldborg_10.jpg?h=98c7bbf1&itok=yCQ4udhI" alt="Aarhus">
                        <div>Aarhus</div>
                    </article>`)}
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2019-10/Odense-Old-Quarter-Christmas_visitodense.jpg?h=8abcec71&itok=Qz6oJ3gN" alt="Odense">
                        <div>Odense</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_small/public/2020-09/Utzon_Rasmus%20Hjortsh%C3%B8j.jpg?h=36c6c889&itok=f9rsNo5u" alt="Aalborg">
                        <div>Aalborg</div>
                    </article>
                </section>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Følelsen af Danmark</h2>
                <p>Oplev hvert smukke og unikke hjørne af Danmark.</p>
                <section class="slider">
                    <article class="category">
                        <img src="/img/food1.png" alt="Mad">
                        <div>Mad</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_big/public/2020-05/Sams%C3%B8_Jeanette%20Phillipsen_VisitSams%C3%B8.jpg?h=858274ae&itok=qje9IVfT" alt="Natur">
                        <div>Natur</div>
                    </article>
                    <article class="category">
                        <img src="/img/royal.png" alt="Amalienborg">
                        <div>Kongefamilien</div>
                    </article>
                </section>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Hvad rejser du for?</h2>
                <p>Oplev nogle af landets mest smukke og unikke natur.</p>
                <section class="slider">
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_medium/public/2019-05/Aeroe-Aeroeskoebing.JPG?h=9994641b&itok=F4O9CA-m" alt="Historien">
                        <div>Brostensbelagte veje</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_big/public/2019-02/Ribe%20VikingeCenter_27890.jpg?h=96a96008&itok=bCq2MOVH" alt="Lego">
                        <div>Historien</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_medium/public/2019-03/copenhagen%20harbour%20goboat_0.jpg?h=1b4d3fe0&itok=Q87eWBWF" alt="Oplevelser">
                        <div>Oplevelser</div>
                    </article>
                </section>
            </section>

            <section class="explore-section">
                <h2 class="text-centered">Sæsonerne</h2>
                <p>Hvis du opsøger sæsonbaseret oplevelser er de alle sammen fyldt med gode oplevelser. Bare tag et kig.</p>
                <section class="grid">
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/two_component_hero_reversed_left/public/2019-05/copenhagen-bispebjerg-cherry%20blossoms.JPG?h=d0c676f3&itok=Sfb1LGLT" alt="Forår">
                        <div>Forår</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/two_component_hero_reversed_left/public/2020-03/Tisvildeleje-beach_%C2%A9Daniel%20Overbeck_VisitNordsj%C3%A6lland_0.jpg?h=170ba4b8&itok=wo6A9Ukd" alt="Sommer">
                        <div>Sommer</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/tile_big/public/2019-05/Halloween-Tivoli.jpg?h=65190c8b&itok=gJnkZIqw" alt="Efterår">
                        <div>Efterår</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.dk/sites/visitdenmark.com/files/styles/two_component_hero_reversed_left/public/2019-11/Winter-landscape-Fjerritslev_%C2%A9Christian%20Faber.jpg?h=17f55adf&itok=kCuWkaW6" alt="Vinter">
                        <div>Vinter</div>
                    </article>    
                </section>
            </section>
            
            <section class="explore-section">
                <h2 class="text-centered">Rejseguide</h2>
                <p>Nej, vi bruger ikke euroen. Ja, vi får varme sommerdage. Få svar på alle dine Danmarks relaterede spørgsmål!</p>
                <section class="slider">
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_small/public/2019-04/copenhagen-metro-driverless_0.jpg?h=011ff8b0&itok=R4PpTevV" alt="Transport">
                        <div>Transport</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_big/public/2019-08/Smileyfield.jpg?h=d11bc30c&itok=2OcgyDLQ" alt="Sjove fakta om Danmark">
                        <div>Sjove fakta</div>
                    </article>
                    <article class="category">
                        <img src="https://www.visitdenmark.com/sites/visitdenmark.com/files/styles/tile_small/public/2020-03/81ec421dcfa3bae27f4d5faf592d4e7ac5588bf20d066bcf93c063e2b4a7706c.jpg?h=9bf18b20&itok=f9ij087B" alt="Hvor skal jeg starte?">
                        <div>Hvor skal jeg starte?</div>
                    </article>
                </section>
            </section>

        </main>

        ${Navigation()}
    `;
}
