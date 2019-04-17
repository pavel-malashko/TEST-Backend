import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import ArticleController from './controllers/ArticleController';
import cors  from 'cors';


const port = 8080,
      app = express(),
      article = new ArticleController();

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/v1/articles', article.index);
app.post('/v1/articles', article.create);
app.get('/v1/articles/:id', article.read);
app.put('/v1/articles/:id', article.update);

app.listen(port);