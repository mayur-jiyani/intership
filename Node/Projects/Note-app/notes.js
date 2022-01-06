const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => "My notes are here...";

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
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



const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString()
        return JSON.parse(jsonData)
    } catch (e) {
        return []
    }

}

const removeNotes = function (title) {
    const notes = loadNotes();
    const toKeep = notes.filter(function (note) {
        return note.title !== title
    })

    if (notes.length > toKeep.length) {
        saveNotes(toKeep);
        console.log(chalk.green.inverse('Note removed succesfully'))
    } else {
        console.log(chalk.red.inverse('No record found'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes
}