import { getGuests } from './database.js'

export function renderGuests() {
    const guests = getGuests()
    let html = '<div class="guests-container">'
    
    // Create a list of guests
    html += guests.map(guest => `<p>${guest.firstName} ${guest.lastName}</p>`).join('')

    html += '</div>'
    return html
}