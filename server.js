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

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});

const Article = mongoose.model('Article', articleSchema);

app.get('/articles', (req, res) => {
    Article.find((err, docs) => {
        if(err){
            console.error(err);
        } else {
            res.send(docs);
        }
    });
});

app.post('/articles', (req, res) => {
    console.log(req.body.title);
    console.log(req.body.content);
});

app.get('/', (req, res) => {
    res.render('home');
});
















const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});