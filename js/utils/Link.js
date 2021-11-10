// Create link with path and content parameter
export default function Link(path, content){
    // Return component HTML
    return /*html*/`
        <a onclick="event.preventDefault(); window.navigateTo('${path}')">
            ${content}
        </a>
    `;
}