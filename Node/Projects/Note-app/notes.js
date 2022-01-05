const fs = require('fs')

const getNotes = () => "My notes are here...";

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)

        console.log('Added succesfully')
    } else {
        console.log('Note title taken..')
    }
    
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString()
        return JSON.parse(jsonData)
    } catch (e) {
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}