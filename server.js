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
    // GET request is sent by POSTMAN App which should be installed
    // locally. You should send a GET request using the app. Details
    // on how to send a GET request in provided on README.md.

    // Alternatively, just typing "http://localhost:3000/articles" on your browser search bar
    // will fire up the GET request as well.

    Article.find((err, docs) => {
        if(err){
            console.error(err);
        } else {
            res.send(docs);
        }
    });
});

app.post('/articles', (req, res) => {
    // POST request is sent by POSTMAN App which should be installed
    // locally. You should send a POST request using the app. Details
    // on how to send a POST request in provided on README.md.
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(err => {
        if(err){
            console.error(err);
            // Sends this response to the POSTMAN App
            res.send("There has been a problem. Please contact admin.");
        } else {
            // Sends this response to the POSTMAN App
            res.send("Successfully added a new article.");
        }
    });
});

app.delete('/articles', (req, res) => {
    // DELETE request is sent by POSTMAN App which should be installed
    // locally. You should send a DELETE request using the app. Details
    // on how to send a DELETE request in provided on README.md.

    Article.deleteMany((err) => {
        if(err){
            console.error(err);
            // Sends this response to the POSTMAN App
            res.send("There has been a problem. Please contact admin.");
        } else {
            // Sends this response to the POSTMAN App
            res.send("Successfully deleted article(s).");
        }
    });
});

app.get('/', (req, res) => {
    res.render('home');
});
















const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});