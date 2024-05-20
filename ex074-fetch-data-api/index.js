// fetch = Function used for making HTTP requests to fetch resources. (JSON style data, images, files)
// Simplifies asynchronous data fetching in JavaScript and used for interacting with APIs to retrieve and send data asynchronously over the web.
// fetch(url, {options})


/*
// Estamos pegando um pokemon, de um outro site, e quando o progama ocorrer irá mostrar no console as habilidades do pokemon escolhido
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => console.log(response)) // Se tudo ocorrer bem ele irá mostrar
    .catch(error => console.error(error)); // Caso ocorra algum error
*/

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => console.log(data.weight)) // Podemos usar data.weight, .id e outros para saber certas informações
    .catch(error => console.error(error));
*/

/*
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok) {
            throw new Error("Could not fetch resource"); // Mensagem de error
        }
        return response.json
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));
*/

async function fetchData() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error) {
        console.error(error);
    }
}

