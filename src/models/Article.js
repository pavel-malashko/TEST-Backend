import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';


const ArticleSchema = new Schema(
    
    {
        title: {type: String, required: true},
        body: {type: String, required: true},       
    },

    { 
        timestamps: true
    }

);

ArticleSchema.plugin( mongoosePaginate );

const Article =  mongoose.model('Article', ArticleSchema);

export default Article;