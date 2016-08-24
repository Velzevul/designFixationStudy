webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(331);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(471);

	var _App = __webpack_require__(472);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

		_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('studyApp'));

/***/ },

/***/ 471:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _socket = __webpack_require__(473);

	var _socket2 = _interopRequireDefault(_socket);

	var _App = __webpack_require__(521);

	var _App2 = _interopRequireDefault(_App);

	var _Flex = __webpack_require__(522);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Block = __webpack_require__(523);

	var _Block2 = _interopRequireDefault(_Block);

	var _InputGroup = __webpack_require__(524);

	var _InputGroup2 = _interopRequireDefault(_InputGroup);

	var _InlineGroup = __webpack_require__(526);

	var _InlineGroup2 = _interopRequireDefault(_InlineGroup);

	var _Input = __webpack_require__(530);

	var _Input2 = _interopRequireDefault(_Input);

	var _Select = __webpack_require__(532);

	var _Select2 = _interopRequireDefault(_Select);

	var _Checkbox = __webpack_require__(534);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Button = __webpack_require__(538);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var socket = (0, _socket2.default)('https://vdziubak.com/', { path: '/designFixationServer' });

	var TASK_1 = 'conservatory';
	var TASK_2 = 'planetarium';
	var TASK_3 = 'cars';
	var CONDITION_1 = 'system';
	var CONDITION_2 = 'baseline';

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App(props) {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

	    _this.startSession = _this.startSession.bind(_this);
	    _this.endSession = _this.endSession.bind(_this);

	    _this.state = {
	      participantId: '',
	      sessionId: null,
	      condition: '',
	      taskAlias: '',
	      training: false,
	      log: []
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      socket.emit('get study');

	      socket.on('study', function (data) {
	        console.log('here');
	        _this2.setState({
	          sessionId: data.sessionId,
	          participantId: data.participantId,
	          condition: data.condition,
	          taskAlias: data.taskAlias,
	          training: data.training,
	          log: [].concat(_toConsumableArray(_this2.state.log), [(data.training ? 'training' : '') + ' session ' + data.sessionId])
	        });
	      });

	      socket.on('confirm kill study', function () {
	        _this2.setState({
	          sessionId: null,
	          log: [].concat(_toConsumableArray(_this2.state.log), ['session killed'])
	        });
	      });

	      socket.on('confirm create example', function (example) {
	        _this2.setState({
	          log: [].concat(_toConsumableArray(_this2.state.log), ['created example \'' + example.imageDescription + '\' for query \'' + example.query + '\''])
	        });
	      });

	      socket.on('confirm create query', function (query) {
	        _this2.setState({
	          log: [].concat(_toConsumableArray(_this2.state.log), ['created query ' + query.query])
	        });
	      });
	    }
	  }, {
	    key: 'startSession',
	    value: function startSession() {
	      socket.emit('create study', {
	        participantId: this.state.participantId,
	        condition: this.state.condition,
	        taskAlias: this.state.taskAlias,
	        training: this.state.training
	      });
	    }
	  }, {
	    key: 'endSession',
	    value: function endSession() {
	      socket.emit('kill study');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      return _react2.default.createElement(
	        'div',
	        { className: _App2.default.App },
	        _react2.default.createElement(
	          _Flex2.default,
	          {
	            flexDirection: 'column',
	            alignItems: 'center',
	            justifyContent: 'center' },
	          _react2.default.createElement(
	            _Block2.default,
	            { n: 2 },
	            _react2.default.createElement(
	              'div',
	              { className: _App2.default.Form },
	              _react2.default.createElement(
	                _Block2.default,
	                null,
	                _react2.default.createElement(_InlineGroup2.default, {
	                  label: 'Testing',
	                  input: _react2.default.createElement(_Checkbox2.default, {
	                    disabled: this.state.sessionId,
	                    checked: this.state.training === true,
	                    onChange: function onChange() {
	                      return _this3.setState({ training: !_this3.state.training });
	                    } }) })
	              ),
	              _react2.default.createElement(
	                _Block2.default,
	                null,
	                _react2.default.createElement(_InputGroup2.default, {
	                  label: 'Participant Name',
	                  input: _react2.default.createElement(_Input2.default, {
	                    disabled: this.state.sessionId,
	                    value: this.state.participantId,
	                    onChange: function onChange(v) {
	                      return _this3.setState({ participantId: v });
	                    } }) })
	              ),
	              _react2.default.createElement(
	                _Block2.default,
	                { n: 2 },
	                _react2.default.createElement(_InputGroup2.default, {
	                  label: 'Task',
	                  input: _react2.default.createElement(_Select2.default, {
	                    options: [{
	                      value: TASK_1,
	                      label: TASK_1
	                    }, {
	                      value: TASK_2,
	                      label: TASK_2
	                    }, {
	                      value: TASK_3,
	                      label: TASK_3
	                    }],
	                    value: this.state.taskAlias,
	                    disabled: this.state.sessionId,
	                    onChange: function onChange(v) {
	                      return _this3.setState({ taskAlias: v });
	                    } }) })
	              ),
	              _react2.default.createElement(
	                _Block2.default,
	                null,
	                _react2.default.createElement(_InputGroup2.default, {
	                  label: 'Condition',
	                  input: _react2.default.createElement(_Select2.default, {
	                    options: [{
	                      value: CONDITION_1,
	                      label: CONDITION_1
	                    }, {
	                      value: CONDITION_2,
	                      label: CONDITION_2
	                    }],
	                    value: this.state.condition,
	                    disabled: this.state.sessionId,
	                    onChange: function onChange(v) {
	                      return _this3.setState({ condition: v });
	                    } }) })
	              ),
	              this.state.sessionId ? _react2.default.createElement(_Button2.default, {
	                fullWidth: true,
	                theme: 'error',
	                text: 'End Session',
	                onClick: this.endSession }) : _react2.default.createElement(_Button2.default, {
	                fullWidth: true,
	                theme: 'accent1',
	                text: 'Start Session',
	                onClick: this.startSession })
	            )
	          ),
	          this.state.log.slice(-5).map(function (l, index) {
	            return _react2.default.createElement(
	              'div',
	              { key: index },
	              l
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

		exports.default = App;

/***/ },

/***/ 521:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"App":"App__App___lBEXI","Form":"App__Form___1-70M"};

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flex = function Flex(_ref) {
	  var _ref$flexDirection = _ref.flexDirection;
	  var flexDirection = _ref$flexDirection === undefined ? 'row' : _ref$flexDirection;
	  var _ref$justifyContent = _ref.justifyContent;
	  var justifyContent = _ref$justifyContent === undefined ? 'flex-start' : _ref$justifyContent;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'center' : _ref$alignItems;
	  var children = _ref.children;

	  var style = {
	    flexDirection: flexDirection,
	    alignItems: alignItems,
	    justifyContent: justifyContent,
	    display: 'flex',
	    width: '100%',
	    height: '100%'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	exports.default = Flex;

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Block = function Block(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    marginBottom: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Block;

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _InputGroup = __webpack_require__(525);

	var _InputGroup2 = _interopRequireDefault(_InputGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputGroup = function InputGroup(_ref) {
	  var label = _ref.label;
	  var error = _ref.error;
	  var input = _ref.input;

	  var errorEl = '';
	  if (error) {
	    errorEl = _react2.default.createElement(
	      'div',
	      { className: _InputGroup2.default.InputGroup__error },
	      error
	    );
	  }

	  return _react2.default.createElement(
	    'label',
	    { className: _InputGroup2.default.InputGroup },
	    _react2.default.createElement(
	      'div',
	      { className: _InputGroup2.default.InputGroup__label },
	      label
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _InputGroup2.default.InputGroup__input },
	      input,
	      errorEl
	    )
	  );
	};

	exports.default = InputGroup;

/***/ },

/***/ 525:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputGroup":"InputGroup__InputGroup___1xGi6","InputGroup__label":"InputGroup__InputGroup__label___38Ihl","InputGroup__input":"InputGroup__InputGroup__input___1u4VY","InputGroup__error":"InputGroup__InputGroup__error___FtWYH"};

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _InlineGroup = __webpack_require__(527);

	var _InlineGroup2 = _interopRequireDefault(_InlineGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InlineGroup = function InlineGroup(_ref) {
	  var label = _ref.label;
	  var error = _ref.error;
	  var input = _ref.input;

	  var errorEl = '';
	  if (error) {
	    errorEl = _react2.default.createElement(
	      'div',
	      { className: _InlineGroup2.default.InlineGroup__error },
	      error
	    );
	  }

	  return _react2.default.createElement(
	    'label',
	    { className: _InlineGroup2.default.InlineGroup },
	    _react2.default.createElement(
	      'div',
	      { className: _InlineGroup2.default.InlineGroup__input },
	      input
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _InlineGroup2.default.InlineGroup__label },
	      _react2.default.createElement(
	        'div',
	        { className: _InlineGroup2.default.InlineGroup__label },
	        label
	      ),
	      errorEl
	    )
	  );
	};

	exports.default = InlineGroup;

/***/ },

/***/ 527:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InlineGroup":"InlineGroup__InlineGroup___22fqc","InlineGroup__label":"InlineGroup__InlineGroup__label___vVDQ0","InlineGroup__input":"InlineGroup__InlineGroup__input___3pWlz","InlineGroup__error":"InlineGroup__InlineGroup__error___2TD91"};

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(531);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input(props) {
	    _classCallCheck(this, Input);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

	    _this.change = _this.change.bind(_this);
	    return _this;
	  }

	  _createClass(Input, [{
	    key: 'change',
	    value: function change() {
	      var value = this._element.value;
	      var onChange = this.props.onChange;


	      onChange(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var value = _props.value;
	      var _props$type = _props.type;
	      var type = _props$type === undefined ? 'text' : _props$type;
	      var _props$placeholder = _props.placeholder;
	      var placeholder = _props$placeholder === undefined ? '' : _props$placeholder;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$error = _props.error;
	      var error = _props$error === undefined ? null : _props$error;


	      var classNames = [_Input2.default.Input];
	      if (error) {
	        classNames.push(_Input2.default.Input_error);
	      }

	      return _react2.default.createElement('input', {
	        className: classNames.join(' '),
	        ref: function ref(el) {
	          _this2._element = el;
	        },
	        value: value,
	        placeholder: placeholder,
	        disabled: disabled,
	        type: type,
	        onChange: this.change });
	    }
	  }]);

	  return Input;
	}(_react2.default.Component);

		exports.default = Input;

/***/ },

/***/ 531:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Input":"Input__Input___1sMwZ","Input_error":"Input__Input_error___2iK7g"};

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(533);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select(props) {
	    _classCallCheck(this, Select);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

	    _this.change = _this.change.bind(_this);
	    return _this;
	  }

	  _createClass(Select, [{
	    key: 'change',
	    value: function change() {
	      var value = this._element.value;
	      var onChange = this.props.onChange;


	      onChange(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var options = _props.options;
	      var error = _props.error;
	      var value = _props.value;
	      var disabled = _props.disabled;


	      var selectedOption = options.filter(function (o) {
	        return o.value === value;
	      })[0];
	      var inputLabel = selectedOption ? selectedOption.label : options[0].label;

	      var classNames = [_Select2.default.Select];
	      if (disabled) {
	        classNames.push(_Select2.default.Select_disabled);
	      }
	      if (error) {
	        classNames.push(_Select2.default.Select_error);
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: classNames.join(' ') },
	        _react2.default.createElement(
	          'select',
	          {
	            className: _Select2.default.Select__input,
	            ref: function ref(el) {
	              _this2._element = el;
	            },
	            value: value,
	            disabled: disabled,
	            onChange: this.change },
	          options.map(function (o, index) {
	            return _react2.default.createElement(
	              'option',
	              { key: index, value: o.value },
	              o.label
	            );
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _Select2.default.Select__fake },
	          inputLabel
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

		exports.default = Select;

/***/ },

/***/ 533:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___3j4mM","Select__fake":"Select__Select__fake___1trwW","Select__input":"Select__Select__input___c4EWX","Select_disabled":"Select__Select_disabled___3slR6","Select_error":"Select__Select_error___1rYLG"};

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(535);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox() {
	    _classCallCheck(this, Checkbox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
	  }

	  _createClass(Checkbox, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var checked = _props.checked;
	      var onChange = _props.onChange;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      return _react2.default.createElement('input', { className: _Checkbox2.default.Checkbox,
	        type: 'checkbox',
	        checked: checked,
	        disabled: disabled,
	        onChange: onChange });
	    }
	  }]);

	  return Checkbox;
	}(_react2.default.Component);

		exports.default = Checkbox;

/***/ },

/***/ 535:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Checkbox":"Checkbox__Checkbox___1l28Z"};

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(539);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Button = function Button(_ref) {
	  var text = _ref.text;
	  var onClick = _ref.onClick;
	  var theme = _ref.theme;
	  var _ref$fullWidth = _ref.fullWidth;
	  var fullWidth = _ref$fullWidth === undefined ? false : _ref$fullWidth;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;

	  var classNames = [_Button2.default.Button];
	  if (fullWidth) {
	    classNames.push(_Button2.default.Button_full);
	  }
	  if (theme === 'accent1') {
	    classNames.push(_Button2.default.Button_accent1);
	  } else if (theme === 'accent2') {
	    classNames.push(_Button2.default.Button_accent2);
	  } else if (theme === 'error') {
	    classNames.push(_Button2.default.Button_error);
	  } else if (theme === 'success') {
	    classNames.push(_Button2.default.Button_success);
	  }

	  return _react2.default.createElement(
	    'button',
	    {
	      disabled: disabled,
	      className: classNames.join(' '),
	      onClick: onClick },
	    text
	  );
	};

	exports.default = Button;

/***/ },

/***/ 539:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Button":"Button__Button___3OtH3","Button_full":"Button__Button_full___3NYz3","Button_accent1":"Button__Button_accent1___2K1ED","Button_accent2":"Button__Button_accent2___27vyC","Button_success":"Button__Button_success___2nwnw","Button_error":"Button__Button_error___6gi6a"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2xheW91dHMvRmxleC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvVUkvSW5wdXRHcm91cC9JbnB1dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvSW5wdXRHcm91cC9JbnB1dEdyb3VwLmNzcyIsIndlYnBhY2s6Ly8vc3JjL1VJL0lubGluZUdyb3VwL0lubGluZUdyb3VwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvSW5saW5lR3JvdXAvSW5saW5lR3JvdXAuY3NzIiwid2VicGFjazovLy9zcmMvVUkvSW5wdXQvSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9VSS9JbnB1dC9JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvU2VsZWN0L1NlbGVjdC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9VSS9DaGVja2JveC9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzcyIsIndlYnBhY2s6Ly8vc3JjL1VJL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9VSS9CdXR0b24vQnV0dG9uLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgJy4vcmVzZXQuY3NzJ1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxBcHAgLz5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHVkeUFwcCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2luZGV4LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZXNldC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA0NzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLmNzcydcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vLi4vbGF5b3V0cy9GbGV4J1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uLy4uL2xheW91dHMvQmxvY2snXG5cbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJy4uLy4uL1VJL0lucHV0R3JvdXAnXG5pbXBvcnQgSW5saW5lR3JvdXAgZnJvbSAnLi4vLi4vVUkvSW5saW5lR3JvdXAnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vVUkvSW5wdXQnXG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uLy4uL1VJL1NlbGVjdCdcbmltcG9ydCBDaGVja2JveCBmcm9tICcuLi8uLi9VSS9DaGVja2JveCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vVUkvQnV0dG9uJ1xuXG5jb25zdCBzb2NrZXQgPSBpbygnaHR0cHM6Ly92ZHppdWJhay5jb20vJywge3BhdGg6ICcvZGVzaWduRml4YXRpb25TZXJ2ZXInfSlcblxuY29uc3QgVEFTS18xID0gJ2NvbnNlcnZhdG9yeSdcbmNvbnN0IFRBU0tfMiA9ICdwbGFuZXRhcml1bSdcbmNvbnN0IFRBU0tfMyA9ICdjYXJzJ1xuY29uc3QgQ09ORElUSU9OXzEgPSAnc3lzdGVtJ1xuY29uc3QgQ09ORElUSU9OXzIgPSAnYmFzZWxpbmUnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGFydFNlc3Npb24gPSB0aGlzLnN0YXJ0U2Vzc2lvbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5lbmRTZXNzaW9uID0gdGhpcy5lbmRTZXNzaW9uLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYXJ0aWNpcGFudElkOiAnJyxcbiAgICAgIHNlc3Npb25JZDogbnVsbCxcbiAgICAgIGNvbmRpdGlvbjogJycsXG4gICAgICB0YXNrQWxpYXM6ICcnLFxuICAgICAgdHJhaW5pbmc6IGZhbHNlLFxuICAgICAgbG9nOiBbXVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBzb2NrZXQuZW1pdCgnZ2V0IHN0dWR5JylcblxuICAgIHNvY2tldC5vbignc3R1ZHknLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2hlcmUnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlc3Npb25JZDogZGF0YS5zZXNzaW9uSWQsXG4gICAgICAgIHBhcnRpY2lwYW50SWQ6IGRhdGEucGFydGljaXBhbnRJZCxcbiAgICAgICAgY29uZGl0aW9uOiBkYXRhLmNvbmRpdGlvbixcbiAgICAgICAgdGFza0FsaWFzOiBkYXRhLnRhc2tBbGlhcyxcbiAgICAgICAgdHJhaW5pbmc6IGRhdGEudHJhaW5pbmcsXG4gICAgICAgIGxvZzogW1xuICAgICAgICAgIC4uLnRoaXMuc3RhdGUubG9nLFxuICAgICAgICAgIGAke2RhdGEudHJhaW5pbmcgPyAndHJhaW5pbmcnIDogJyd9IHNlc3Npb24gJHtkYXRhLnNlc3Npb25JZH1gXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHNvY2tldC5vbignY29uZmlybSBraWxsIHN0dWR5JywgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlc3Npb25JZDogbnVsbCxcbiAgICAgICAgbG9nOiBbXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5sb2csXG4gICAgICAgICAgJ3Nlc3Npb24ga2lsbGVkJ1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBzb2NrZXQub24oJ2NvbmZpcm0gY3JlYXRlIGV4YW1wbGUnLCBleGFtcGxlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsb2c6IFtcbiAgICAgICAgICAuLi50aGlzLnN0YXRlLmxvZyxcbiAgICAgICAgICBgY3JlYXRlZCBleGFtcGxlICcke2V4YW1wbGUuaW1hZ2VEZXNjcmlwdGlvbn0nIGZvciBxdWVyeSAnJHtleGFtcGxlLnF1ZXJ5fSdgXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHNvY2tldC5vbignY29uZmlybSBjcmVhdGUgcXVlcnknLCBxdWVyeSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9nOiBbXG4gICAgICAgICAgLi4udGhpcy5zdGF0ZS5sb2csXG4gICAgICAgICAgYGNyZWF0ZWQgcXVlcnkgJHtxdWVyeS5xdWVyeX1gXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0U2Vzc2lvbiAoKSB7XG4gICAgc29ja2V0LmVtaXQoJ2NyZWF0ZSBzdHVkeScsIHtcbiAgICAgIHBhcnRpY2lwYW50SWQ6IHRoaXMuc3RhdGUucGFydGljaXBhbnRJZCxcbiAgICAgIGNvbmRpdGlvbjogdGhpcy5zdGF0ZS5jb25kaXRpb24sXG4gICAgICB0YXNrQWxpYXM6IHRoaXMuc3RhdGUudGFza0FsaWFzLFxuICAgICAgdHJhaW5pbmc6IHRoaXMuc3RhdGUudHJhaW5pbmdcbiAgICB9KVxuICB9XG5cbiAgZW5kU2Vzc2lvbiAoKSB7XG4gICAgc29ja2V0LmVtaXQoJ2tpbGwgc3R1ZHknKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICA8RmxleFxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtfT5cbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxJbmxpbmVHcm91cFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUZXN0aW5nXCJcbiAgICAgICAgICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2Vzc2lvbklkfVxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudHJhaW5pbmcgPT09IHRydWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3RyYWluaW5nOiAhdGhpcy5zdGF0ZS50cmFpbmluZ30pfSAvPlxuICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXJ0aWNpcGFudCBOYW1lXCJcbiAgICAgICAgICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2Vzc2lvbklkfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhcnRpY2lwYW50SWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB0aGlzLnNldFN0YXRlKHtwYXJ0aWNpcGFudElkOiB2fSl9IC8+XG4gICAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlRhc2tcIlxuICAgICAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVEFTS18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogVEFTS18xXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVEFTS18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogVEFTS18yXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVEFTS18zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogVEFTS18zXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YXNrQWxpYXN9XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2Vzc2lvbklkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gdGhpcy5zZXRTdGF0ZSh7dGFza0FsaWFzOiB2fSl9IC8+XG4gICAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmRpdGlvblwiXG4gICAgICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBDT05ESVRJT05fMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IENPTkRJVElPTl8xXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQ09ORElUSU9OXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBDT05ESVRJT05fMlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29uZGl0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlc3Npb25JZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHRoaXMuc2V0U3RhdGUoe2NvbmRpdGlvbjogdn0pfSAvPlxuICAgICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlc3Npb25JZFxuICAgICAgICAgICAgICAgID8gPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgIHRleHQ9XCJFbmQgU2Vzc2lvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVuZFNlc3Npb259IC8+XG4gICAgICAgICAgICAgICAgOiA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICB0ZXh0PVwiU3RhcnQgU2Vzc2lvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXJ0U2Vzc2lvbn0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmxvZy5zbGljZSgtNSkubWFwKChsLCBpbmRleCkgPT4gPGRpdiBrZXk9e2luZGV4fT57bH08L2Rpdj4pfVxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFwcFwiOlwiQXBwX19BcHBfX19sQkVYSVwiLFwiRm9ybVwiOlwiQXBwX19Gb3JtX19fMS03ME1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gNTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBmbGV4RGlyZWN0aW9uID0gJ3JvdycsXG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2xheW91dHMvRmxleC9GbGV4LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBCbG9jayA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dEdyb3VwLmNzcydcblxuY29uc3QgSW5wdXRHcm91cCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvcixcbiAgaW5wdXRcbn0pID0+IHtcbiAgbGV0IGVycm9yRWwgPSAnJ1xuICBpZiAoZXJyb3IpIHtcbiAgICBlcnJvckVsID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dEdyb3VwX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLklucHV0R3JvdXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dEdyb3VwX19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0R3JvdXBfX2lucHV0fT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0lucHV0R3JvdXAvSW5wdXRHcm91cC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dEdyb3VwXCI6XCJJbnB1dEdyb3VwX19JbnB1dEdyb3VwX19fMXhHaTZcIixcIklucHV0R3JvdXBfX2xhYmVsXCI6XCJJbnB1dEdyb3VwX19JbnB1dEdyb3VwX19sYWJlbF9fXzM4SWhsXCIsXCJJbnB1dEdyb3VwX19pbnB1dFwiOlwiSW5wdXRHcm91cF9fSW5wdXRHcm91cF9faW5wdXRfX18xdTRWWVwiLFwiSW5wdXRHcm91cF9fZXJyb3JcIjpcIklucHV0R3JvdXBfX0lucHV0R3JvdXBfX2Vycm9yX19fRnRXWUhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9VSS9JbnB1dEdyb3VwL0lucHV0R3JvdXAuY3NzXG4gKiogbW9kdWxlIGlkID0gNTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmxpbmVHcm91cC5jc3MnXG5cbmNvbnN0IElubGluZUdyb3VwID0gKHtcbiAgbGFiZWwsXG4gIGVycm9yLFxuICBpbnB1dFxufSkgPT4ge1xuICBsZXQgZXJyb3JFbCA9ICcnXG4gIGlmIChlcnJvcikge1xuICAgIGVycm9yRWwgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklubGluZUdyb3VwX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLklubGluZUdyb3VwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5saW5lR3JvdXBfX2lucHV0fT5cbiAgICAgICAge2lucHV0fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5saW5lR3JvdXBfX2xhYmVsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmxpbmVHcm91cF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHtlcnJvckVsfVxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVHcm91cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0lubGluZUdyb3VwL0lubGluZUdyb3VwLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIklubGluZUdyb3VwXCI6XCJJbmxpbmVHcm91cF9fSW5saW5lR3JvdXBfX18yMmZxY1wiLFwiSW5saW5lR3JvdXBfX2xhYmVsXCI6XCJJbmxpbmVHcm91cF9fSW5saW5lR3JvdXBfX2xhYmVsX19fdlZEUTBcIixcIklubGluZUdyb3VwX19pbnB1dFwiOlwiSW5saW5lR3JvdXBfX0lubGluZUdyb3VwX19pbnB1dF9fXzNwV2x6XCIsXCJJbmxpbmVHcm91cF9fZXJyb3JcIjpcIklubGluZUdyb3VwX19JbmxpbmVHcm91cF9fZXJyb3JfX18yVEQ5MVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL1VJL0lubGluZUdyb3VwL0lubGluZUdyb3VwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXQuY3NzJ1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHtvbkNoYW5nZX0gPSB0aGlzLnByb3BzXG5cbiAgICBvbkNoYW5nZSh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICB0eXBlID0gJ3RleHQnLFxuICAgICAgcGxhY2Vob2xkZXIgPSAnJyxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBlcnJvciA9IG51bGxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLklucHV0XVxuICAgIGlmIChlcnJvcikge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JbnB1dF9lcnJvcilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0lucHV0L0lucHV0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIklucHV0XCI6XCJJbnB1dF9fSW5wdXRfX18xc013WlwiLFwiSW5wdXRfZXJyb3JcIjpcIklucHV0X19JbnB1dF9lcnJvcl9fXzJpSzdnXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvVUkvSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QuY3NzJ1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgY2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsZW1lbnQudmFsdWVcbiAgICBjb25zdCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgb25DaGFuZ2UodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnMsXG4gICAgICBlcnJvcixcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbHRlcihvID0+IG8udmFsdWUgPT09IHZhbHVlKVswXVxuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogb3B0aW9uc1swXS5sYWJlbFxuXG4gICAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLlNlbGVjdF1cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuU2VsZWN0X2Rpc2FibGVkKVxuICAgIH1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuU2VsZWN0X2Vycm9yKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X19pbnB1dH1cbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2V9PlxuICAgICAgICAgIHtvcHRpb25zLm1hcCgobywgaW5kZXgpID0+XG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvLnZhbHVlfT57by5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fZmFrZX0+e2lucHV0TGFiZWx9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvVUkvU2VsZWN0L1NlbGVjdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWxlY3RcIjpcIlNlbGVjdF9fU2VsZWN0X19fM2o0bU1cIixcIlNlbGVjdF9fZmFrZVwiOlwiU2VsZWN0X19TZWxlY3RfX2Zha2VfX18xdHJ3V1wiLFwiU2VsZWN0X19pbnB1dFwiOlwiU2VsZWN0X19TZWxlY3RfX2lucHV0X19fYzRFV1hcIixcIlNlbGVjdF9kaXNhYmxlZFwiOlwiU2VsZWN0X19TZWxlY3RfZGlzYWJsZWRfX18zc2xSNlwiLFwiU2VsZWN0X2Vycm9yXCI6XCJTZWxlY3RfX1NlbGVjdF9lcnJvcl9fXzFyWUxHXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvVUkvU2VsZWN0L1NlbGVjdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NoZWNrYm94LmNzcydcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRpc2FibGVkID0gZmFsc2VcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveH1cbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvVUkvQ2hlY2tib3gvQ2hlY2tib3guanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ2hlY2tib3hcIjpcIkNoZWNrYm94X19DaGVja2JveF9fXzFsMjhaXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvVUkvQ2hlY2tib3gvQ2hlY2tib3guY3NzXG4gKiogbW9kdWxlIGlkID0gNTM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24uY3NzJ1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICB0ZXh0LFxuICBvbkNsaWNrLFxuICB0aGVtZSxcbiAgZnVsbFdpZHRoID0gZmFsc2UsXG4gIGRpc2FibGVkID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLkJ1dHRvbl1cbiAgaWYgKGZ1bGxXaWR0aCkge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQnV0dG9uX2Z1bGwpXG4gIH1cbiAgaWYgKHRoZW1lID09PSAnYWNjZW50MScpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJ1dHRvbl9hY2NlbnQxKVxuICB9IGVsc2UgaWYgKHRoZW1lID09PSAnYWNjZW50MicpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJ1dHRvbl9hY2NlbnQyKVxuICB9IGVsc2UgaWYgKHRoZW1lID09PSAnZXJyb3InKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CdXR0b25fZXJyb3IpXG4gIH0gZWxzZSBpZiAodGhlbWUgPT09ICdzdWNjZXNzJykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQnV0dG9uX3N1Y2Nlc3MpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfT57dGV4dH08L2J1dHRvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9VSS9CdXR0b24vQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX18zT3RIM1wiLFwiQnV0dG9uX2Z1bGxcIjpcIkJ1dHRvbl9fQnV0dG9uX2Z1bGxfX18zTll6M1wiLFwiQnV0dG9uX2FjY2VudDFcIjpcIkJ1dHRvbl9fQnV0dG9uX2FjY2VudDFfX18ySzFFRFwiLFwiQnV0dG9uX2FjY2VudDJcIjpcIkJ1dHRvbl9fQnV0dG9uX2FjY2VudDJfX18yN3Z5Q1wiLFwiQnV0dG9uX3N1Y2Nlc3NcIjpcIkJ1dHRvbl9fQnV0dG9uX3N1Y2Nlc3NfX18ybndud1wiLFwiQnV0dG9uX2Vycm9yXCI6XCJCdXR0b25fX0J1dHRvbl9lcnJvcl9fXzZnaTZhXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTs7Ozs7OztBQ1RBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU5BO0FBY0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQXJCQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFqQkE7QUFzQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBaEZBO0FBREE7QUFzRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExRkE7QUFEQTtBQStGQTs7OztBQTlLQTtBQUNBO0FBZ0xBOzs7Ozs7O0FDeE1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFMQTtBQVlBO0FBQ0E7Ozs7Ozs7O0FDOUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBdENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7QUM3Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFOQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWVBOzs7O0FBakRBO0FBQ0E7QUFtREE7Ozs7Ozs7QUN4REE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBZkE7QUFDQTtBQWlCQTs7Ozs7OztBQ3RCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9