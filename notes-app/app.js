const yargs = require('yargs');
const chalk = require('chalk')
const getNotes = require('./notes.js')

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
   handler: function (argv) {
      console.log('Title: ' + argv.title);
      console.log('Body: ' + argv.body);
   }
})

// create remove commannd
yargs.command({
   command: 'remove',
   describe: 'remove the note',
   handler: function () {
      console.log('Removing the note')
   }
})

// create list command

yargs.command({
   command: 'list',
   describe: 'list the notes',
   handler: function () {
      console.log('Listing the notes')
   }
})

// create read command

yargs.command({
   command: 'read',
   describe: 'read the notes',
   handler: function () {
      console.log(' Read the notes');
   }
})
console.log(yargs.argv);