import Link from '../utils/Link.js'

export default function Nav(active){

    return /*html*/ `
        <nav>
            <ul>
                <li>
                    ${Link('#/', /*html*/ `
                        Home
                    `)}
                </li>
                <li>
                    ${Link('#/search', /*html*/ `
                        Find aktiviteter
                    `)}
                </li>
                <li>
                    ${Link('#/map', /*html*/ `
                        Kort
                    `)}
                </li>
            </ul>
        </nav>
    `;
}