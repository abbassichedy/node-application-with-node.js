console.log('starting node')
const fs=require('fs')
const yargs=require('yargs')
const note=require('./note.js')

var argv=yargs.argv
console.log(yargs.argv)

var body=yargs.argv.body
var title=yargs.argv.title
var commande=yargs.argv._[0]
// console.log(title,body,commande)

if(commande ==="add"){
console.log( "adding note")
}
else if (commande === "remove"){
    console.log("removing note")
}
else if (commande === "read"){
    console.log("reading note")
}
else if (commande === "list"){
    console.log("list note")
}
else {
    console.log("unkon")
}



// console.log("Process",process.argv)
// console.log( "yargs",yargs.argv)

// console.log( note.add(2,6))
// console.log (note.sub(8,4))