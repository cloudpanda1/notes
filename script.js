const noteBox = document.getElementById('noteInput');
const noteList = document.getElementById('noteList');

function saveNote() {
    const noteBox = document.getElementById('noteInput');
    const noteList = document.getElementById('noteList');

    noteList.innerHTML += `<li>${noteBox.value}</li>`
    localStorage.setItem( (localStorage.length + 1), noteBox.value )

    noteBox.value = ''
}

function deleteNotes() {
    localStorage.clear();
    noteList.innerHTML = '';
}

for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    noteList.innerHTML += `<li>${localStorage.getItem(key)}</li>`
  }
