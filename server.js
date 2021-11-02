const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('/public'));
app.set('view engine', 'ejs');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});
}

main().catch(err => console.error(err));

app.get('/', (req, res) => {
    res.write('hi!');
    res.send();
});
















const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});