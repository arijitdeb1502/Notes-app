const yargs=require('yargs');
const notes = require('./notes.js');


//Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe : 'Note Title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe : 'Note Body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }   
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe : 'Note Title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }   
})

//Create List command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        notes.getNotes();
    }   
})

//Create Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note!');
    }   
})


yargs.parse();


// console.log(yargs.argv);