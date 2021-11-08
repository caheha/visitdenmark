import { data } from '../router.js';

export default function DetailView(activityId) {

    let activity = data.activities.find(activity => activity.Id == activityId);
    
    return /*html*/`
        <section class="intro">
            <div>
                <img src="${activity.Files[0].Uri}" alt="Aarhus">
                <h1>${activity.Name}</h1>
            </div>
            <p>Befinder du dig i Aarhusregionen, bliver du mødt af en god kombination af store skove, kyster med fine strande og travle og spændende byer såsom Ebeltoft og Grenaa. Med et væld af kulturoplevelser og lækre caféer og restauranter er Aarhus et godt udgangspunkt for at udforske dette område.</p>
        </section>
    `;
}