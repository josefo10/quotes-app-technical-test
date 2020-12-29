const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://quotes-db-app:josefo1234@cluster0.zdi2k.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));