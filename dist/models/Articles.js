"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArticleSchema = new _mongoose.Schema({
    "title": String,
    "body": String
}, {
    timestamps: true
});
var Article = _mongoose2.default.model('Article', ArticleSchema);
exports.default = Article;