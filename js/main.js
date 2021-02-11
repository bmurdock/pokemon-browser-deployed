// predefine all of our DOM elements
const cardMain = document.getElementById('cardMain');
const pokemonName = document.getElementById('pokemonName');
const pokemonImg = document.getElementById('pokemonImg');
const typesBar = document.getElementById('typesBar');
const heightElement = document.getElementById('heightElement');
const weightElement = document.getElementById('weightElement');
const refreshButton = document.getElementById('refreshButton');

// create a function to get a pokemon
const getAPokemon = (event) =>
{
    // this is going to be attached to the click even for
    // the refresh button, and the event argument
    // is going to be that click event

    const baseRoute = 'https://pokeapi.co/api/v2/';
    let index = Math.floor(Math.random() * 890) + 1;
    console.log('looking for: ', index);
    let append = `pokemon/${index}`;


    fetch(baseRoute + append)
    .then((candy) =>
    {
    // do some error handling just in case there is no json response
        return candy.json();
    })
    .then((data) =>
    {
        pokemonName.textContent = data.name.toUpperCase();
        pokemonImg.setAttribute('src', data.sprites.front_default);
    })
    .catch((err) =>
    {
        console.log('A promise error!: ', err);
    });
}
console.log('button: ', refreshButton);
refreshButton.addEventListener('click', getAPokemon);
