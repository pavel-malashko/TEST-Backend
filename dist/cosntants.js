'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.article = exports.app = exports.port = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ArticleController = require('./controllers/ArticleController');

var _ArticleController2 = _interopRequireDefault(_ArticleController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = exports.port = 8080,
    app = exports.app = (0, _express2.default)(),
    article = exports.article = new _ArticleController2.default();