const mongoose = require('mongoose')

const password= 'Abcd1234'
const dbname = 'transakcijaaaa'
const url = 'mongodb+srv://petravucic:${password}@cluster0.cl799.mongodb.net/${dbname}?retryWrites=true&w=majority'

const porukaSchema = new mongoose.Schema({
    opis: {
        type: String,
        minlength: 5
      },
      datum: {
        type: Date,
        required: true
      },
      iznos: {
        type: Number,
        require:true
      },
      vrsta: {
        type: String,
        minlength: 5,
        required: true
      },
    
})

porukaSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = doc._id.toString()
      delete ret._id
      delete ret.__v
      return ret
    }
  })
  
  module.exports = mongoose.model('Poruka', porukaSchema, 'poruke')