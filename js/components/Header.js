// Import utilities
import Link from "../utils/Link.js"
import GoBack from "../utils/GoBack.js"

// Export component
export default function Header(props) {
    
    // Insert back button if { backBtn = true }
    const BackBtn = props && props.backBtn === true ? GoBack() : '';
    
    // Return component HTML
    return /*html*/`
        <header class="header">
            ${BackBtn}
            ${Link('#/', /*html*/ `<img class="logo" src="/img/logo_blue.png" alt="Logo" title="VisitDenmark Logo">`)}
        </header>
    `;
}