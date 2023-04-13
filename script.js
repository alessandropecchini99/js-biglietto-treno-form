// BUTTON
const check = document.querySelector('#check');



// EVENTO
check.addEventListener('click', function() {

    // var
    const user = document.querySelector('#name');
    const km = document.querySelector('#km');
    const age = document.querySelector('#age').value;

    // calcolo prezzi
    let normal = (km.value * 0.21);                // normale
    const minore = (ticket - (ticket * 20 / 100)); // minore
    const over = (ticket - (ticket * 40 / 100));   // over

    // controllo sconto
    if (age == 'maggiorenne') {
        console.log(`maggiorenne`);
        document.getElementById('prezzo').innerHTML = normal.toFixed(2) + '€';
    }
    if (age == 'minorenne') {
        console.log(`minorenne`);
        document.getElementById('prezzo').innerHTML = minore.toFixed(2) + '€';
    } 
    if (age == 'over') {
        console.log(`over`);
        document.getElementById('prezzo').innerHTML = over.toFixed(2) + '€';
    }
    if (isNaN(age)) {
        document.getElementById('prezzo').innerHTML = 'Error';
    }

    document.getElementById('txtname').innerHTML = user.value;
});



// ELEMENTI E CLASSI
// macro card
const form = document.getElementById('form');
form.className = form.classList + 'form-div';

const ticket = document.getElementById('ticket');
ticket.className = ticket.classList + 'ticket-div';