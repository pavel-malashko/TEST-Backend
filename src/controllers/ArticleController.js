import Article from '../models/Article';
import "@babel/polyfill";
import mongoose from 'mongoose';


class ArticleController {

    async index(req, res) {        
  
        let pageNumber = req.query.page || 1,
            limit = req.query.limit || 10,
            articles = await Article.find().sort({createdAt: -1});

        try {

            res.json({ 
                count: articles.length,
                page: pageNumber,
                limit: limit,
                articles: articles
            });

        }

        catch (error) {
            res.send(error);
        }
           
    }


    async create(req, res) {    

        let data = req.body,
              article = new Article({
                title: data.title,
                body: data.body
              });
        
        try {

            await article.save(article);
            res.json({ article: article });

        }

        catch (error) {
            res.send(err);
        }
                           
    }


    async read(req, res) {

        let id = req.params.id,
            valid = mongoose.Types.ObjectId.isValid(id);

        if (valid) {

            try {
            let article =  await Article.findOne({_id: id});
            res.json(article);

            } 
            catch (error) {
                res.status(404)
                .send({
                    errors: [{
                        "field": "id",
                        "error": "Not Found"
                    }]
                });
                throw(error)
            }
        }

        else {

            res.status(404).send({
                errors: [{
                    "field": "id",
                    "error": "Not Found"
                }]
            });

        }    
                     
    }


    async update(req, res) {       

        await Article.findByIdAndUpdate(req.params.id, {$set: req.body})

            try {

                await Article.findByIdAndUpdate(req.params.id, {$set: req.body})
                res.json({status: 'update article is OK'});

            }
            
            catch (error) {
                res.send(error);
            }   

    }
   
}

export default ArticleController;