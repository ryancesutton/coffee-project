"use strict"

function renderCoffee(coffee) {
    // Changed element structure from table to divs and added bootstrap grid to layout in columns
    let html = '<div class="coffee col-12 col-lg-6 mb-2">';
    html += '<div class="d-flex justify-content-center justify-content-md-start align-items-baseline">'
    html += '<h1 class="mx-2">' + coffee.name + '</h1>';
    html += '<p class="fs-5">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    let html = '';
    // Reversed loop direction to sort in ascending order
    for (let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let filteredCoffees = filterCoffees(coffees);
    if (filteredCoffees.length === 0) {
        coffeeDiv.innerHTML = "<h3>No results for those criteria!</h3>"
    } else {
        coffeeDiv.innerHTML = renderCoffees(filteredCoffees);
    }

}

function filterCoffees(coffeeArr) {
    let selectedRoast = roastSelection.value;
    let nameInput = nameSelectionInput.value;
    let filteredCoffees = [];
    coffeeArr.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === 'all') && nameInput === '') {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'all' && coffee.name.toLowerCase().includes(nameInput.toLowerCase())) {
            filteredCoffees.push(coffee);
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(nameInput.toLowerCase()) && !filteredCoffees.includes(coffee)) {
            filteredCoffees.push(coffee);
        } else {
            return filteredCoffees;
        }
    });
    return filteredCoffees;
}

function addCoffee(e) {
    e.preventDefault();
    let coffeeToAdd = {
        id: coffees.length + 1,
        name: addNameInput.value,
        roast: addRoastSelection.value
    }
    coffees.push(coffeeToAdd);
    addNameInput.value = '';
    updateCoffees(e);
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
let addSubmitButton = document.querySelector('#add-submit');
let roastSelection = document.querySelector('#roast-selection');
let nameSelectionInput = document.querySelector('#coffee-name')
let addRoastSelection = document.querySelector('#add-roast');
let addNameInput = document.querySelector('#add-name')

coffeeDiv.innerHTML = renderCoffees(coffees);


// Adding listeners
addSubmitButton.addEventListener('click', addCoffee)
roastSelection.addEventListener('change', updateCoffees)
nameSelectionInput.addEventListener('keyup', updateCoffees)


