export default function GoBack(){
    return /*html*/`
        <a class="go-back" onclick="event.preventDefault(); window.history.back()">
            <span class="material-icons">chevron_left</span>
        </a>
    `;
}