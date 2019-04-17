'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Article = require('../models/Article');

var _Article2 = _interopRequireDefault(_Article);

require('@babel/polyfill');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArticleController = function () {
    function ArticleController() {
        _classCallCheck(this, ArticleController);
    }

    _createClass(ArticleController, [{
        key: 'index',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
                var pageNumber, limit, articles;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pageNumber = req.query.page || 1;
                                limit = req.query.limit || 10;
                                _context.next = 4;
                                return _Article2.default.find().sort({ createdAt: -1 });

                            case 4:
                                articles = _context.sent;


                                try {

                                    res.json({
                                        count: articles.length,
                                        page: pageNumber,
                                        limit: limit,
                                        articles: articles
                                    });
                                } catch (error) {
                                    res.send(error);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function index(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return index;
        }()
    }, {
        key: 'create',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
                var data, article;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = req.body, article = new _Article2.default({
                                    title: data.title,
                                    body: data.body
                                });
                                _context2.prev = 1;
                                _context2.next = 4;
                                return article.save(article);

                            case 4:
                                res.json({ article: article });

                                _context2.next = 10;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](1);

                                res.send(err);

                            case 10:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 7]]);
            }));

            function create(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return create;
        }()
    }, {
        key: 'read',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
                var id, valid, article;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                id = req.params.id, valid = _mongoose2.default.Types.ObjectId.isValid(id);

                                if (!valid) {
                                    _context3.next = 15;
                                    break;
                                }

                                _context3.prev = 2;
                                _context3.next = 5;
                                return _Article2.default.findOne({ _id: id });

                            case 5:
                                article = _context3.sent;

                                res.json(article);

                                _context3.next = 13;
                                break;

                            case 9:
                                _context3.prev = 9;
                                _context3.t0 = _context3['catch'](2);

                                res.status(404).send({
                                    errors: [{
                                        "field": "id",
                                        "error": "Not Found"
                                    }]
                                });
                                throw _context3.t0;

                            case 13:
                                _context3.next = 16;
                                break;

                            case 15:

                                res.status(404).send({
                                    errors: [{
                                        "field": "id",
                                        "error": "Not Found"
                                    }]
                                });

                            case 16:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[2, 9]]);
            }));

            function read(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return read;
        }()
    }, {
        key: 'update',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _Article2.default.findByIdAndUpdate(req.params.id, { $set: req.body });

                            case 2:
                                _context4.prev = 2;
                                _context4.next = 5;
                                return _Article2.default.findByIdAndUpdate(req.params.id, { $set: req.body });

                            case 5:
                                res.json({ status: 'update article is OK' });

                                _context4.next = 11;
                                break;

                            case 8:
                                _context4.prev = 8;
                                _context4.t0 = _context4['catch'](2);

                                res.send(_context4.t0);

                            case 11:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[2, 8]]);
            }));

            function update(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return update;
        }()
    }]);

    return ArticleController;
}();

exports.default = ArticleController;