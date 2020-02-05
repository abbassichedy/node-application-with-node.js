const fs = require('fs')

function addingNote(title,body){
var note = {
    title,
    body
}
fs.writeFileSync("notes.txt", note)
};



module.exports={
    addingNote
}






// console.log('starting note')


// var add=(x,y)=>{
//     return x+y
// }
// var sub=(x,y)=>{
//     return x-y
// }
// module.exports={
//     add,sub
// }