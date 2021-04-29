const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added'));
    } else {
        console.log(chalk.red.inverse('Note title is taken'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    console.log(notes)

    const notesArr = notes.filter((note) => note.title !== title)

    if (notes.length > notesArr.length) {
        console.log(chalk.green.inverse('Note was removed'));
        saveNotes(notesArr);
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}

const listNotes = () => {
    const allNotes = loadNotes()
    allNotes.forEach(note => console.log(chalk.green.inverse(note.title)))
}

const readNotes = (title) => {
    const allNotes = loadNotes()
    const note = allNotes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
     console.log(chalk.red.inverse('No notes found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
};