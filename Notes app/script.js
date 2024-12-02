const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
        notes = document.querySelectorAll(".input-box");
        addKeyupListeners();
    }
}

function updateStorage() {
    localStorage.setItem('notes', notesContainer.innerHTML);
}

function addKeyupListeners() {
    notes.forEach(note => {
        note.addEventListener('keyup', () => {
            updateStorage();
        });
    });
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute("contenteditable", 'true');
    img.src = "images/delete.png";
    img.alt = "Delete Note";
    notesContainer.appendChild(inputBox).appendChild(img);
    
    // Update references and storage
    notes = document.querySelectorAll('.input-box');
    addKeyupListeners();
    updateStorage();
});

notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});

// Initialize app
showNotes();
