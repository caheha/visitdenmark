import Link from '../utils/Link.js'

export default function Nav(active){
    return /*html*/ `
        <nav class="navigation">

            ${Link('#/', /*html*/ `<span class="material-icons">home</span>Hjem`)}

            ${Link('#/search', /*html*/ `<span class="material-icons">search</span>Søg`)}

            ${Link('#/calendar', /*html*/ `<span class="material-icons">edit_calendar</span>Kalender`)}

        </nav>
    `;
}