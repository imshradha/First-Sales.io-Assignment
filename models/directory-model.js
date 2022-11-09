import mongoose from 'mongoose';

const directorySchema = new mongoose.Schema({
  name: String
})

const directory = mongoose.model('Directory', directorySchema)

export default directory;