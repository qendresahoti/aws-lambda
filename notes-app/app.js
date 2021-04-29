const yargs = require('yargs');
const chalk = require('chalk')
const notes = require('./notes.js')

// create add command
yargs.command({
   command: 'add',
   describe: 'Add a new note',
   builder: {
     title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
     },
     body: {
        describe: 'Note body here',
        demandOption: true,
        type: 'string'
     }
   },
   handler(argv) {
      notes.addNote(argv.title, argv.body)
   }
})

// create remove commannd
yargs.command({
   command: 'remove',
   describe: 'remove the note',
   builder: {
      title: {
         describe: 'Note title to be removed',
         demandOption: true,
         type: 'string'
      },
   },
   handler(argv) {
      notes.removeNotes(argv.title)
   }
})

// create list command
yargs.command({
   command: 'list',
   describe: 'Listing my notes: ',
   handler() {
      notes.listNotes()
   }
})

// create read command
yargs.command({
   command: 'read',
   describe: 'read the notes',
   builder: {
      title: {
         describe: 'Read node command',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notes.readNotes(argv.title)
   }
})
console.log(yargs.argv);