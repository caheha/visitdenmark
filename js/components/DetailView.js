// Import data to find activity
import { data } from '../router.js';

// Export component
export default function DetailView(activityId) {

    // Find activity
    let activity = data.activities.find(activity => activity.Id == activityId);
    
    // Figure out what image to show
    let img = activity.Files.length > 0 ? `<img src="${activity.Files[0].Uri}" alt="${activity.Name}">` : `<img src="/img/aarhus.png" alt="Aarhus">`;

    // Figure out what description text to use
    let descriptionText = activity.Descriptions.length == 6 ? activity.Descriptions[5].Text : activity.Descriptions[0].Text;

    // Compile address html
    let address = /*html*/ `
        <address>
            ${activity.Address.AddressLine1}<br>
            ${activity.Address.PostalCode}, ${activity.Address.City}
        </address>
    `;

    // Return component HTML
    return /*html*/`
        <section class="intro">
            <div>
                ${img}
                <h1 class="yellow">${activity.Name}</h1>
            </div>
            <p>${descriptionText}</p>
            ${address}
        </section>
    `;
}