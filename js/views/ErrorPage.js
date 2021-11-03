import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';

export default function ErrorPage(){
    return /*html*/ `
        ${Header( {backBtn: true} )}
        ${Navigation()}
    `;
}
