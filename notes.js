const fs=require('fs');
const chalk=require('chalk');


const getNotes = function(){ return `get Notes....`};

const addNote = (title,body)=>{

    const notes=loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title===title);

    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes);

        console.log(chalk.green.inverse('New Note Added'));
    } else {
        console.log(chalk.red.inverse('Note Title Already exists!!!'));

    }
    
}

const removeNote = (title)=>{

    const notes=loadNotes();
    const notesAfterDelete=notes.filter((note)=>note.title!==title);

    if(notesAfterDelete.length!==notes.length){
        
        saveNotes(notesAfterDelete);

        console.log(chalk.green.inverse('Note Deleted'));

    } else {
        console.log(chalk.red.inverse('No such note exists'));

    }
}

const saveNotes = (notes)=>{
    const dataJson=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJson);
}

const loadNotes = ()=>{

    try{

        const dataBuffer=fs.readFileSync('notes.json');
        const dataJson=dataBuffer.toString();
        return JSON.parse(dataJson);
    
    }catch(e){

        return [];

    }
    
}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}