'use strict';

var _cosntants = require('./cosntants');

_cosntants.app.get('/v1/articles', article.index);
_cosntants.app.post('/v1/articles', article.create);
_cosntants.app.get('/v1/articles/:id', article.read);
_cosntants.app.put('/v1/articles/:id', article.update);