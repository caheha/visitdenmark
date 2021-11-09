import { data } from '../router.js';

export default function DetailView(activityId) {

    let activity = data.activities.find(activity => activity.Id == activityId);

    console.log(activity);
    
    let img = activity.Files.length > 0 ? `<img src="${activity.Files[0].Uri}" alt="${activity.Name}">` : `<img src="/img/aarhus.png" alt="Aarhus">`;

    let descriptionText = activity.Descriptions.length == 6 ? activity.Descriptions[5].Text : activity.Descriptions[0].Text;

    let address = /*html*/ `
        <address>
            ${activity.Address.AddressLine1}<br>
            ${activity.Address.PostalCode}, ${activity.Address.City}
        </address>
    `;

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