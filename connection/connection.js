const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/bioko_farms'

mongoose.connect(mongoURI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
).then(() => console.log("Mongo Connection is successful"))
