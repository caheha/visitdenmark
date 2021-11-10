// Go back button in header utility
export default function GoBack() {
    // Return component HTML
    return /*html*/`
        <a class="go-back" onclick="event.preventDefault(); window.history.back()">
            <span class="material-icons">chevron_left</span>
        </a>
    `;
}