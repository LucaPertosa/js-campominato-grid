// Creo variabile per selezionare il div.grid
const grid = document.querySelector(".grid");
// Creo variabile del bottone PLAY
const createGridButton = document.getElementById('create-grid');
// Creo variabile per selezionare il menu a tendina della difficoltà
const difficultySelect = document.getElementById('difficulty-level');


// Assegno al bottone l'event listener con la funzione creata per creare la griglia
createGridButton.addEventListener('click', createGrid)


function createGrid() {
    // Creo variabile per ottenere value selezionato dal menu a tendina
    const difficultyLevel = parseInt(difficultySelect.value);
    let numberOfCell = difficultyLevel;

    // Creo ciclo for per creare dinamicamente le box in base al numberOfCells
    if (grid.childElementCount !== numberOfCell) {
        grid.innerHTML = '';
        for (let i = 1; i <= numberOfCell; i++) {
            const currentNumber = i;
            // inserisco il numero all'interno dello span utilizzando la funzione creata in precedenza
            const newItem = generateGridItem(currentNumber);
            // Assegno event listener per colorare il background al click
            newItem.addEventListener("click", handleItemClick)
            grid.append(newItem);
            // Assegno al menu a tendina l'event listener per gestire i grid-item presenti in una riga
            difficultySelect.addEventListener('change', function() {
                // Seleziona la radice del documento
                const root = document.documentElement;
            
                // Modifica il valore della variabile CSS in base alla selezione
                if (this.value === '100') {
                    root.style.setProperty('--number-of-cell', '10');
                    grid.innerHTML = '';
                } else if (this.value === '81') {
                    root.style.setProperty('--number-of-cell', '9');
                    grid.innerHTML = '';
                } else if (this.value === '49') {
                    root.style.setProperty('--number-of-cell', '7');
                    grid.innerHTML = '';
                }
            });
        };   
    };
};
  
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
