"use strict"

function renderCoffee(coffee) {
    // Changed element structure from table to divs and added bootstrap grid to layout in columns
    let html = '<div class="coffee col-12 col-lg-6 mb-2">';
    html += '<div class="d-flex justify-content-center align-items-baseline">'
    html += '<h1 class="mx-2">' + coffee.name + '</h1>';
    html += '<p class="text-muted fs-5">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    // Reversed loop direction to sort in ascending order
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let nameInput = nameSelectionInput.value;
    // console.log(nameInput)
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === 'all' && nameInput === '') {
            filteredCoffees.push(coffee);
        }
    });
    coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let coffeeDiv = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let nameSelectionInput = document.querySelector('#coffee-name')

coffeeDiv.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
