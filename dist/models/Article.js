'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require('mongoose-paginate');

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleSchema = new _mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true }
}, {
    timestamps: true
});

ArticleSchema.plugin(_mongoosePaginate2.default);

var Article = _mongoose2.default.model('Article', ArticleSchema);

exports.default = Article;