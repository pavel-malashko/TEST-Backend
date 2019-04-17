'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ArticleController = require('./controllers/ArticleController');

var _ArticleController2 = _interopRequireDefault(_ArticleController);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8080,
    app = (0, _express2.default)(),
    article = new _ArticleController2.default();

_mongoose2.default.connect('mongodb://localhost/blog', { useNewUrlParser: true });
_mongoose2.default.set('useFindAndModify', false);

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.get('/v1/articles', article.index);
app.post('/v1/articles', article.create);
app.get('/v1/articles/:id', article.read);
app.put('/v1/articles/:id', article.update);

app.listen(port);