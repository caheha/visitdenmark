import Link from "../utils/Link.js"
import GoBack from "../utils/GoBack.js"

export default function Header(props) {
    const BackBtn = props && props.backBtn === true ? GoBack() : '';
    
    return /*html*/`
        <header class="header">
        
            ${BackBtn}

            ${Link('#/', /*html*/ `<img class="logo" src="/img/logo_blue.png" alt="Logo" title="VisitDenmark Logo">`)}
            
        </header>
    `;
}