let notes = [
    { id: 1, title: 'Sacar la basura', text: 'Mi mamá me va a retar si no lo hago', done: false },
    { id: 2, title: 'Comprar leche', text: 'No olvides la leche', done: false },
    { id: 3, title: 'Comprar pan', text: 'No olvides el pan', done: false },
    { id: 4, title: 'Comprar arrroz', text: 'No olvides el arroz', done: false },
];
let idGlobal = notes.length ? notes[notes.length - 1].id : 0;

function notas() {
    let container = document.getElementById('notas-container');
    container.innerHTML = '';

    if (notes.length === 0) {
        container.innerHTML = '<p class="no-notas">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notes.forEach(note => {
        let card = document.createElement('div');
        card.className = 'note-card';
        if (note.done) {
            card.classList.add('done');
        }
        card.innerHTML = `
        <div class="tarjeta">
        <div class=inicio>
            <input type="checkbox" onclick="hecho(${note.id})" ${note.done ? 'checked' : ''}>
            <h3>${note.title}</h3>
        </div>
        <div class="final">
            <p>${note.text}</p>
            <button onclick="borrarnotas(${note.id})">Borrar Nota</button>
        </div>
    </div>
        `;
        container.appendChild(card);
    });
}

function guardarnota() {
    let title = document.getElementById('note-title').value.trim();
    let text = document.getElementById('note-text').value.trim();

    if (title && text) {
        idGlobal++;
        notes.push({ id: idGlobal, title, text, done: false });
        notas();
        borrarespacios();
    } 
}

function borrarespacios() {
    document.getElementById('note-title').value = '';
    document.getElementById('note-text').value = '';
}

function borrarnotas(id) {
    notes = notes.filter(note => note.id !== id);
    notas();
}

function hecho(id) {
    let note = notes.find(note => note.id === id);
    if (note) {
        note.done = !note.done;
        notas();
    }
}

function filtros() {
    let buscartexto = document.getElementById('buscartexto').value.trim().toLowerCase();
    let filtrar = document.getElementById('filtrar').checked;

    let filtrarnota = notes;

    if (buscartexto) {
        filtrarnota = filtrarnota.filter(note =>
            note.title.toLowerCase().includes(buscartexto) || note.text.toLowerCase().includes(buscartexto)
        );
    }

    if (filtrar) {
        filtrarnota = filtrarnota.filter(note => note.done);
    }

    filtrarnotas(filtrarnota);
}

function filtrarnotas(filtrarnota) {
    let container = document.getElementById('notas-container');
    container.innerHTML = '';

    if (filtrarnota.length === 0) {
        container.innerHTML = '<p class="no-notes">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    filtrarnota.forEach(note => {
        let card = document.createElement('div');
        card.className = 'note-card';
        if (note.done) {
            card.classList.add('done');
        }
        card.innerHTML = `
            <div class="tarjeta">
        <div class=inicio>
            <input type="checkbox" onclick="hecho(${note.id})" ${note.done ? 'checked' : ''}>
            <h3>${note.title}</h3>
        </div>
        <div class="final">
            <p>${note.text}</p>
            <button onclick="borrarnotas(${note.id})">Borrar Nota</button>
        </div>
    </div>
        `;
        container.appendChild(card);
    });
}
notas();
