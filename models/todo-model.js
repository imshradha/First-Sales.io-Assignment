import mongoose from 'mongoose';
let objectId = mongoose.Schema.Types.ObjectId;

const todoSchema = new mongoose.Schema({
   directory : { type: objectId, ref: 'Directory'},
   title : { type: String , enum:['done','not-done'] },
   todos : [{type: String}],
   
})

const todo = mongoose.model('Todo', todoSchema)

export default todo;