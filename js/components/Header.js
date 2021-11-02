import Link from "../utils/Link.js"
import GoBack from "../utils/GoBack.js"

export default function Header(props){
    const BackBtn = props && props.backBtn === true ? GoBack() : '';
    
    return /*html*/`
        <header>
        
            ${BackBtn}
            Logo
            
        </header>
    `;
}