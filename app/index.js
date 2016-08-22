webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(328);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	__webpack_require__(461);
	
	var _App = __webpack_require__(462);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('studyApp'));

/***/ },

/***/ 461:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _socket = __webpack_require__(463);
	
	var _socket2 = _interopRequireDefault(_socket);
	
	var _App = __webpack_require__(511);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Flex = __webpack_require__(512);
	
	var _Flex2 = _interopRequireDefault(_Flex);
	
	var _Block = __webpack_require__(513);
	
	var _Block2 = _interopRequireDefault(_Block);
	
	var _InputGroup = __webpack_require__(514);
	
	var _InputGroup2 = _interopRequireDefault(_InputGroup);
	
	var _InlineGroup = __webpack_require__(516);
	
	var _InlineGroup2 = _interopRequireDefault(_InlineGroup);
	
	var _LabelFirstGroup = __webpack_require__(518);
	
	var _LabelFirstGroup2 = _interopRequireDefault(_LabelFirstGroup);
	
	var _Input = __webpack_require__(520);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _Select = __webpack_require__(522);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Checkbox = __webpack_require__(524);
	
	var _Checkbox2 = _interopRequireDefault(_Checkbox);
	
	var _Radio = __webpack_require__(526);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	var _Button = __webpack_require__(528);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
	      sessionActive: false,
	      participantId: '',
	      condition: CONDITION_1,
	      taskAlias: TASK_1
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      socket.emit('get study');
	
	      socket.on('study', function (data) {
	        _this2.setState({
	          sessionActive: true,
	          participantId: data.participantId,
	          condition: data.condition,
	          taskAlias: data.taskAlias
	        });
	      });
	    }
	  }, {
	    key: 'startSession',
	    value: function startSession() {
	      socket.emit('create study', {
	        participantId: this.state.participantId,
	        condition: this.state.condition,
	        taskAlias: this.state.taskAlias
	      });
	
	      console.log({
	        participantId: this.state.participantId,
	        condition: this.state.condition,
	        taskAlias: this.state.taskAlias
	      });
	
	      this.setState({
	        sessionActive: true
	      });
	    }
	  }, {
	    key: 'endSession',
	    value: function endSession() {
	      socket.emit('kill study');
	
	      this.setState({
	        sessionActive: false
	      });
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
	            alignItems: 'center',
	            justifyContent: 'center' },
	          _react2.default.createElement(
	            'div',
	            { className: _App2.default.Form },
	            _react2.default.createElement(
	              _Block2.default,
	              null,
	              _react2.default.createElement(_InputGroup2.default, {
	                label: 'Participant Name',
	                input: _react2.default.createElement(_Input2.default, {
	                  disabled: this.state.sessionActive,
	                  value: this.state.participantId,
	                  onChange: function onChange(v) {
	                    return _this3.setState({ participantId: v });
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
	                  disabled: this.state.sessionActive,
	                  onChange: function onChange(v) {
	                    return _this3.setState({ condition: v });
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
	                  disabled: this.state.sessionActive,
	                  onChange: function onChange(v) {
	                    return _this3.setState({ taskAlias: v });
	                  } }) })
	            ),
	            this.state.sessionActive ? _react2.default.createElement(_Button2.default, {
	              fullWidth: true,
	              theme: 'error',
	              text: 'End Session',
	              onClick: this.endSession }) : _react2.default.createElement(_Button2.default, {
	              fullWidth: true,
	              theme: 'accent1',
	              text: 'Start Session',
	              onClick: this.startSession })
	          )
	        )
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	exports.default = App;

/***/ },

/***/ 511:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"App":"App__App___lBEXI","Form":"App__Form___1-70M"};

/***/ },

/***/ 512:
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

/***/ 513:
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

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InputGroup = __webpack_require__(515);
	
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

/***/ 515:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputGroup":"InputGroup__InputGroup___1xGi6","InputGroup__label":"InputGroup__InputGroup__label___38Ihl","InputGroup__input":"InputGroup__InputGroup__input___1u4VY","InputGroup__error":"InputGroup__InputGroup__error___FtWYH"};

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _InlineGroup = __webpack_require__(517);
	
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

/***/ 517:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InlineGroup":"InlineGroup__InlineGroup___22fqc","InlineGroup__label":"InlineGroup__InlineGroup__label___vVDQ0","InlineGroup__input":"InlineGroup__InlineGroup__input___3pWlz","InlineGroup__error":"InlineGroup__InlineGroup__error___2TD91"};

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _LabelFirstGroup = __webpack_require__(519);
	
	var _LabelFirstGroup2 = _interopRequireDefault(_LabelFirstGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LabelFirstGroup = function LabelFirstGroup(_ref) {
	  var label = _ref.label;
	  var error = _ref.error;
	  var input = _ref.input;
	  var _ref$labelWidth = _ref.labelWidth;
	  var labelWidth = _ref$labelWidth === undefined ? '8rem' : _ref$labelWidth;
	
	  var errorEl = '';
	  if (error) {
	    errorEl = _react2.default.createElement(
	      'div',
	      { className: _LabelFirstGroup2.default.LabelFirstGroup__error },
	      error
	    );
	  }
	
	  return _react2.default.createElement(
	    'label',
	    { className: _LabelFirstGroup2.default.LabelFirstGroup },
	    _react2.default.createElement(
	      'div',
	      {
	        style: { width: labelWidth },
	        className: _LabelFirstGroup2.default.LabelFirstGroup__label },
	      label
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _LabelFirstGroup2.default.LabelFirstGroup__input },
	      input,
	      errorEl
	    )
	  );
	};
	
	exports.default = LabelFirstGroup;

/***/ },

/***/ 519:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LabelFirstGroup":"LabelFirstGroup__LabelFirstGroup___n_Y6N","LabelFirstGroup__label":"LabelFirstGroup__LabelFirstGroup__label___LUwmT","LabelFirstGroup__input":"LabelFirstGroup__LabelFirstGroup__input___2icsC","LabelFirstGroup__error":"LabelFirstGroup__LabelFirstGroup__error___1iSY7"};

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Input = __webpack_require__(521);
	
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

/***/ 521:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Input":"Input__Input___1sMwZ","Input_error":"Input__Input_error___2iK7g"};

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Select = __webpack_require__(523);
	
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

/***/ 523:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___3j4mM","Select__fake":"Select__Select__fake___1trwW","Select__input":"Select__Select__input___c4EWX","Select_disabled":"Select__Select_disabled___3slR6","Select_error":"Select__Select_error___1rYLG"};

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Checkbox = __webpack_require__(525);
	
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

/***/ 525:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Checkbox":"Checkbox__Checkbox___1l28Z"};

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Radio = __webpack_require__(527);
	
	var _Radio2 = _interopRequireDefault(_Radio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Radio = function (_React$Component) {
	  _inherits(Radio, _React$Component);
	
	  function Radio() {
	    _classCallCheck(this, Radio);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Radio).apply(this, arguments));
	  }
	
	  _createClass(Radio, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var checked = _props.checked;
	      var onChange = _props.onChange;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	
	
	      return _react2.default.createElement('input', { className: _Radio2.default.Radio,
	        type: 'radio',
	        checked: checked,
	        disabled: disabled,
	        onChange: onChange });
	    }
	  }]);
	
	  return Radio;
	}(_react2.default.Component);
	
	exports.default = Radio;

/***/ },

/***/ 527:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Radio":"Radio__Radio___MguEh"};

/***/ },

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(298);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Button = __webpack_require__(529);
	
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

/***/ 529:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Button":"Button__Button___3OtH3","Button_full":"Button__Button_full___3NYz3","Button_accent1":"Button__Button_accent1___2K1ED","Button_accent2":"Button__Button_accent2___27vyC","Button_success":"Button__Button_success___2nwnw","Button_error":"Button__Button_error___6gi6a"};

/***/ }

});
//# sourceMappingURL=index.js.map