// Creo variabile per selezionare il div.grid
const grid = document.querySelector(".grid");
// Creo variabile del bottone PLAY
const createGridButton = document.getElementById('create-grid');
// Assegno al bottone l'event listener con la funzione creata per creare la griglia
createGridButton.addEventListener('click', createGrid)


function createGrid() {
    // Creo ciclo for per creare dinamicamente le box in base al numero indicato e inserisco al loro interno il numero corrispondente
    if (document.querySelector('.grid').childElementCount > 0) {
        alert('ATTENZIONE! La griglia è già stata creata!');
    } else {
        for (let i = 1; i <= 100; i++) {
            const currentNumber = i;
            // inserisco il numero all'interno dello span utilizzando la funzione creata in precedenza
            const newItem = generateGridItem(currentNumber);
            // Assegno event listener per colorare il background al click
            newItem.addEventListener("click", handleItemClick)
            grid.append(newItem);
    }
}}    
// FUNCIONS

// DOM related functions

// Creazione funzione per inserire testo all'interno del grid-item
function generateGridItem(text) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-item");
    newSquare.innerHTML = `<span>${text}</span>`;
    return newSquare;
};

// Funzione click play-button
function handleItemClick() {
    this.classList.toggle("clicked");
};
