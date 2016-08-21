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

	var _LabelFirstGroup = __webpack_require__(528);

	var _LabelFirstGroup2 = _interopRequireDefault(_LabelFirstGroup);

	var _Input = __webpack_require__(530);

	var _Input2 = _interopRequireDefault(_Input);

	var _Select = __webpack_require__(532);

	var _Select2 = _interopRequireDefault(_Select);

	var _Checkbox = __webpack_require__(534);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Radio = __webpack_require__(536);

	var _Radio2 = _interopRequireDefault(_Radio);

	var _Button = __webpack_require__(538);

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

	      socket.emit('get state');

	      socket.on('state', function (data) {
	        _this2.setState({
	          participantId: data.participantId,
	          condition: data.condition,
	          taskAlias: data.taskAlias
	        });
	      });
	    }
	  }, {
	    key: 'startSession',
	    value: function startSession() {
	      // socket.emit('create study', {
	      //   participantId: this.state.participantId,
	      //   condition: currentTask.condition,
	      //   taskAlias: currentTask.taskAlias
	      // })

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
	      // socket.emit('kill study')

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

/***/ 528:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _LabelFirstGroup = __webpack_require__(529);

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

/***/ 529:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LabelFirstGroup":"LabelFirstGroup__LabelFirstGroup___n_Y6N","LabelFirstGroup__label":"LabelFirstGroup__LabelFirstGroup__label___LUwmT","LabelFirstGroup__input":"LabelFirstGroup__LabelFirstGroup__input___2icsC","LabelFirstGroup__error":"LabelFirstGroup__LabelFirstGroup__error___1iSY7"};

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

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _Radio = __webpack_require__(537);

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

/***/ 537:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Radio":"Radio__Radio___MguEh"};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2xheW91dHMvRmxleC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvVUkvSW5wdXRHcm91cC9JbnB1dEdyb3VwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvSW5wdXRHcm91cC9JbnB1dEdyb3VwLmNzcyIsIndlYnBhY2s6Ly8vc3JjL1VJL0lubGluZUdyb3VwL0lubGluZUdyb3VwLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvSW5saW5lR3JvdXAvSW5saW5lR3JvdXAuY3NzIiwid2VicGFjazovLy9zcmMvVUkvTGFiZWxGaXJzdEdyb3VwL0xhYmVsRmlyc3RHcm91cC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL0xhYmVsRmlyc3RHcm91cC9MYWJlbEZpcnN0R3JvdXAuY3NzIiwid2VicGFjazovLy9zcmMvVUkvSW5wdXQvSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9VSS9JbnB1dC9JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvU2VsZWN0L1NlbGVjdC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9VSS9DaGVja2JveC9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzcyIsIndlYnBhY2s6Ly8vc3JjL1VJL1JhZGlvL1JhZGlvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvVUkvUmFkaW8vUmFkaW8uY3NzIiwid2VicGFjazovLy9zcmMvVUkvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1VJL0J1dHRvbi9CdXR0b24uY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCAnLi9yZXNldC5jc3MnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcblxuUmVhY3RET00ucmVuZGVyKChcbiAgPEFwcCAvPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0dWR5QXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Jlc2V0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcHAuY3NzJ1xuXG5pbXBvcnQgRmxleCBmcm9tICcuLi8uLi9sYXlvdXRzL0ZsZXgnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vLi4vbGF5b3V0cy9CbG9jaydcblxuaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnLi4vLi4vVUkvSW5wdXRHcm91cCdcbmltcG9ydCBJbmxpbmVHcm91cCBmcm9tICcuLi8uLi9VSS9JbmxpbmVHcm91cCdcbmltcG9ydCBMYWJlbEZpcnN0R3JvdXAgZnJvbSAnLi4vLi4vVUkvTGFiZWxGaXJzdEdyb3VwJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL1VJL0lucHV0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi8uLi9VSS9TZWxlY3QnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vLi4vVUkvQ2hlY2tib3gnXG5pbXBvcnQgUmFkaW8gZnJvbSAnLi4vLi4vVUkvUmFkaW8nXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL1VJL0J1dHRvbidcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHBzOi8vdmR6aXViYWsuY29tLycsIHtwYXRoOiAnL2Rlc2lnbkZpeGF0aW9uU2VydmVyJ30pXG5cbmNvbnN0IFRBU0tfMSA9ICdjb25zZXJ2YXRvcnknXG5jb25zdCBUQVNLXzIgPSAncGxhbmV0YXJpdW0nXG5jb25zdCBUQVNLXzMgPSAnY2FycydcbmNvbnN0IENPTkRJVElPTl8xID0gJ3N5c3RlbSdcbmNvbnN0IENPTkRJVElPTl8yID0gJ2Jhc2VsaW5lJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhcnRTZXNzaW9uID0gdGhpcy5zdGFydFNlc3Npb24uYmluZCh0aGlzKVxuICAgIHRoaXMuZW5kU2Vzc2lvbiA9IHRoaXMuZW5kU2Vzc2lvbi5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Vzc2lvbkFjdGl2ZTogZmFsc2UsXG4gICAgICBwYXJ0aWNpcGFudElkOiAnJyxcbiAgICAgIGNvbmRpdGlvbjogQ09ORElUSU9OXzEsXG4gICAgICB0YXNrQWxpYXM6IFRBU0tfMVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBzb2NrZXQuZW1pdCgnZ2V0IHN0YXRlJylcblxuICAgIHNvY2tldC5vbignc3RhdGUnLCAoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhcnRpY2lwYW50SWQ6IGRhdGEucGFydGljaXBhbnRJZCxcbiAgICAgICAgY29uZGl0aW9uOiBkYXRhLmNvbmRpdGlvbixcbiAgICAgICAgdGFza0FsaWFzOiBkYXRhLnRhc2tBbGlhc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgc3RhcnRTZXNzaW9uICgpIHtcbiAgICAvLyBzb2NrZXQuZW1pdCgnY3JlYXRlIHN0dWR5Jywge1xuICAgIC8vICAgcGFydGljaXBhbnRJZDogdGhpcy5zdGF0ZS5wYXJ0aWNpcGFudElkLFxuICAgIC8vICAgY29uZGl0aW9uOiBjdXJyZW50VGFzay5jb25kaXRpb24sXG4gICAgLy8gICB0YXNrQWxpYXM6IGN1cnJlbnRUYXNrLnRhc2tBbGlhc1xuICAgIC8vIH0pXG5cbiAgICBjb25zb2xlLmxvZyh7XG4gICAgICBwYXJ0aWNpcGFudElkOiB0aGlzLnN0YXRlLnBhcnRpY2lwYW50SWQsXG4gICAgICBjb25kaXRpb246IHRoaXMuc3RhdGUuY29uZGl0aW9uLFxuICAgICAgdGFza0FsaWFzOiB0aGlzLnN0YXRlLnRhc2tBbGlhc1xuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlc3Npb25BY3RpdmU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZW5kU2Vzc2lvbiAoKSB7XG4gICAgLy8gc29ja2V0LmVtaXQoJ2tpbGwgc3R1ZHknKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZXNzaW9uQWN0aXZlOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxuICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICA8SW5wdXRHcm91cFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFydGljaXBhbnQgTmFtZVwiXG4gICAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlc3Npb25BY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhcnRpY2lwYW50SWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gdGhpcy5zZXRTdGF0ZSh7cGFydGljaXBhbnRJZDogdn0pfSAvPlxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXBcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmRpdGlvblwiXG4gICAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IENPTkRJVElPTl8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IENPTkRJVElPTl8xXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogQ09ORElUSU9OXzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogQ09ORElUSU9OXzJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbmRpdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuc2Vzc2lvbkFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB0aGlzLnNldFN0YXRlKHtjb25kaXRpb246IHZ9KX0gLz5cbiAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUYXNrXCJcbiAgICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogVEFTS18xLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFRBU0tfMVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFRBU0tfMixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBUQVNLXzJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBUQVNLXzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogVEFTS18zXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50YXNrQWxpYXN9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLnNlc3Npb25BY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gdGhpcy5zZXRTdGF0ZSh7dGFza0FsaWFzOiB2fSl9IC8+XG4gICAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlc3Npb25BY3RpdmVcbiAgICAgICAgICAgICAgPyA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgdGV4dD1cIkVuZCBTZXNzaW9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmVuZFNlc3Npb259IC8+XG4gICAgICAgICAgICAgIDogPEJ1dHRvblxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgdGV4dD1cIlN0YXJ0IFNlc3Npb25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhcnRTZXNzaW9ufSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFwcFwiOlwiQXBwX19BcHBfX19sQkVYSVwiLFwiRm9ybVwiOlwiQXBwX19Gb3JtX19fMS03ME1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuY3NzXG4gKiogbW9kdWxlIGlkID0gNTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBmbGV4RGlyZWN0aW9uID0gJ3JvdycsXG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2xheW91dHMvRmxleC9GbGV4LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBCbG9jayA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvbGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dEdyb3VwLmNzcydcblxuY29uc3QgSW5wdXRHcm91cCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvcixcbiAgaW5wdXRcbn0pID0+IHtcbiAgbGV0IGVycm9yRWwgPSAnJ1xuICBpZiAoZXJyb3IpIHtcbiAgICBlcnJvckVsID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dEdyb3VwX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLklucHV0R3JvdXB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dEdyb3VwX19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0R3JvdXBfX2lucHV0fT5cbiAgICAgICAge2lucHV0fVxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvbGFiZWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0lucHV0R3JvdXAvSW5wdXRHcm91cC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dEdyb3VwXCI6XCJJbnB1dEdyb3VwX19JbnB1dEdyb3VwX19fMXhHaTZcIixcIklucHV0R3JvdXBfX2xhYmVsXCI6XCJJbnB1dEdyb3VwX19JbnB1dEdyb3VwX19sYWJlbF9fXzM4SWhsXCIsXCJJbnB1dEdyb3VwX19pbnB1dFwiOlwiSW5wdXRHcm91cF9fSW5wdXRHcm91cF9faW5wdXRfX18xdTRWWVwiLFwiSW5wdXRHcm91cF9fZXJyb3JcIjpcIklucHV0R3JvdXBfX0lucHV0R3JvdXBfX2Vycm9yX19fRnRXWUhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9VSS9JbnB1dEdyb3VwL0lucHV0R3JvdXAuY3NzXG4gKiogbW9kdWxlIGlkID0gNTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmxpbmVHcm91cC5jc3MnXG5cbmNvbnN0IElubGluZUdyb3VwID0gKHtcbiAgbGFiZWwsXG4gIGVycm9yLFxuICBpbnB1dFxufSkgPT4ge1xuICBsZXQgZXJyb3JFbCA9ICcnXG4gIGlmIChlcnJvcikge1xuICAgIGVycm9yRWwgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklubGluZUdyb3VwX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLklubGluZUdyb3VwfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5saW5lR3JvdXBfX2lucHV0fT5cbiAgICAgICAge2lucHV0fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5saW5lR3JvdXBfX2xhYmVsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmxpbmVHcm91cF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIHtlcnJvckVsfVxuICAgICAgPC9kaXY+XG4gICAgPC9sYWJlbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmxpbmVHcm91cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0lubGluZUdyb3VwL0lubGluZUdyb3VwLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIklubGluZUdyb3VwXCI6XCJJbmxpbmVHcm91cF9fSW5saW5lR3JvdXBfX18yMmZxY1wiLFwiSW5saW5lR3JvdXBfX2xhYmVsXCI6XCJJbmxpbmVHcm91cF9fSW5saW5lR3JvdXBfX2xhYmVsX19fdlZEUTBcIixcIklubGluZUdyb3VwX19pbnB1dFwiOlwiSW5saW5lR3JvdXBfX0lubGluZUdyb3VwX19pbnB1dF9fXzNwV2x6XCIsXCJJbmxpbmVHcm91cF9fZXJyb3JcIjpcIklubGluZUdyb3VwX19JbmxpbmVHcm91cF9fZXJyb3JfX18yVEQ5MVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL1VJL0lubGluZUdyb3VwL0lubGluZUdyb3VwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGFiZWxGaXJzdEdyb3VwLmNzcydcblxuY29uc3QgTGFiZWxGaXJzdEdyb3VwID0gKHtcbiAgbGFiZWwsXG4gIGVycm9yLFxuICBpbnB1dCxcbiAgbGFiZWxXaWR0aCA9ICc4cmVtJ1xufSkgPT4ge1xuICBsZXQgZXJyb3JFbCA9ICcnXG4gIGlmIChlcnJvcikge1xuICAgIGVycm9yRWwgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhYmVsRmlyc3RHcm91cF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5MYWJlbEZpcnN0R3JvdXB9PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e3dpZHRoOiBsYWJlbFdpZHRofX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTGFiZWxGaXJzdEdyb3VwX19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhYmVsRmlyc3RHcm91cF9faW5wdXR9PlxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHtlcnJvckVsfVxuICAgICAgPC9kaXY+XG5cbiAgICA8L2xhYmVsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsRmlyc3RHcm91cFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0xhYmVsRmlyc3RHcm91cC9MYWJlbEZpcnN0R3JvdXAuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGFiZWxGaXJzdEdyb3VwXCI6XCJMYWJlbEZpcnN0R3JvdXBfX0xhYmVsRmlyc3RHcm91cF9fX25fWTZOXCIsXCJMYWJlbEZpcnN0R3JvdXBfX2xhYmVsXCI6XCJMYWJlbEZpcnN0R3JvdXBfX0xhYmVsRmlyc3RHcm91cF9fbGFiZWxfX19MVXdtVFwiLFwiTGFiZWxGaXJzdEdyb3VwX19pbnB1dFwiOlwiTGFiZWxGaXJzdEdyb3VwX19MYWJlbEZpcnN0R3JvdXBfX2lucHV0X19fMmljc0NcIixcIkxhYmVsRmlyc3RHcm91cF9fZXJyb3JcIjpcIkxhYmVsRmlyc3RHcm91cF9fTGFiZWxGaXJzdEdyb3VwX19lcnJvcl9fXzFpU1k3XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvVUkvTGFiZWxGaXJzdEdyb3VwL0xhYmVsRmlyc3RHcm91cC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0LmNzcydcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgY2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsZW1lbnQudmFsdWVcbiAgICBjb25zdCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgb25DaGFuZ2UodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgdHlwZSA9ICd0ZXh0JyxcbiAgICAgIHBsYWNlaG9sZGVyID0gJycsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgZXJyb3IgPSBudWxsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5JbnB1dF1cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSW5wdXRfZXJyb3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfVxuICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZX0gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9VSS9JbnB1dC9JbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dFwiOlwiSW5wdXRfX0lucHV0X19fMXNNd1pcIixcIklucHV0X2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfZXJyb3JfX18yaUs3Z1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL1VJL0lucHV0L0lucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDUzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0LmNzcydcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbGVtZW50LnZhbHVlXG4gICAgY29uc3Qge29uQ2hhbmdlfSA9IHRoaXMucHJvcHNcblxuICAgIG9uQ2hhbmdlKHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zLFxuICAgICAgZXJyb3IsXG4gICAgICB2YWx1ZSxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9ucy5maWx0ZXIobyA9PiBvLnZhbHVlID09PSB2YWx1ZSlbMF1cbiAgICBjb25zdCBpbnB1dExhYmVsID0gc2VsZWN0ZWRPcHRpb24gPyBzZWxlY3RlZE9wdGlvbi5sYWJlbCA6IG9wdGlvbnNbMF0ubGFiZWxcblxuICAgIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5TZWxlY3RdXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlNlbGVjdF9kaXNhYmxlZClcbiAgICB9XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlNlbGVjdF9lcnJvcilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9faW5wdXR9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlfT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PlxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17by52YWx1ZX0+e28ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWxlY3RfX2Zha2V9PntpbnB1dExhYmVsfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL1NlbGVjdC9TZWxlY3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VsZWN0XCI6XCJTZWxlY3RfX1NlbGVjdF9fXzNqNG1NXCIsXCJTZWxlY3RfX2Zha2VcIjpcIlNlbGVjdF9fU2VsZWN0X19mYWtlX19fMXRyd1dcIixcIlNlbGVjdF9faW5wdXRcIjpcIlNlbGVjdF9fU2VsZWN0X19pbnB1dF9fX2M0RVdYXCIsXCJTZWxlY3RfZGlzYWJsZWRcIjpcIlNlbGVjdF9fU2VsZWN0X2Rpc2FibGVkX19fM3NsUjZcIixcIlNlbGVjdF9lcnJvclwiOlwiU2VsZWN0X19TZWxlY3RfZXJyb3JfX18xcllMR1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL1VJL1NlbGVjdC9TZWxlY3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnXG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuQ2hlY2tib3h9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNoZWNrYm94XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX18xbDI4WlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzc1xuICoqIG1vZHVsZSBpZCA9IDUzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmFkaW8uY3NzJ1xuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLlJhZGlvfVxuICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9VSS9SYWRpby9SYWRpby5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJSYWRpb1wiOlwiUmFkaW9fX1JhZGlvX19fTWd1RWhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9VSS9SYWRpby9SYWRpby5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIHRleHQsXG4gIG9uQ2xpY2ssXG4gIHRoZW1lLFxuICBmdWxsV2lkdGggPSBmYWxzZSxcbiAgZGlzYWJsZWQgPSBmYWxzZVxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuQnV0dG9uXVxuICBpZiAoZnVsbFdpZHRoKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CdXR0b25fZnVsbClcbiAgfVxuICBpZiAodGhlbWUgPT09ICdhY2NlbnQxJykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQnV0dG9uX2FjY2VudDEpXG4gIH0gZWxzZSBpZiAodGhlbWUgPT09ICdhY2NlbnQyJykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQnV0dG9uX2FjY2VudDIpXG4gIH0gZWxzZSBpZiAodGhlbWUgPT09ICdlcnJvcicpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJ1dHRvbl9lcnJvcilcbiAgfSBlbHNlIGlmICh0aGVtZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CdXR0b25fc3VjY2VzcylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9Pnt0ZXh0fTwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL1VJL0J1dHRvbi9CdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQnV0dG9uXCI6XCJCdXR0b25fX0J1dHRvbl9fXzNPdEgzXCIsXCJCdXR0b25fZnVsbFwiOlwiQnV0dG9uX19CdXR0b25fZnVsbF9fXzNOWXozXCIsXCJCdXR0b25fYWNjZW50MVwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50MV9fXzJLMUVEXCIsXCJCdXR0b25fYWNjZW50MlwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50Ml9fXzI3dnlDXCIsXCJCdXR0b25fc3VjY2Vzc1wiOlwiQnV0dG9uX19CdXR0b25fc3VjY2Vzc19fXzJud253XCIsXCJCdXR0b25fZXJyb3JcIjpcIkJ1dHRvbl9fQnV0dG9uX2Vycm9yX19fNmdpNmFcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9VSS9CdXR0b24vQnV0dG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBOzs7Ozs7O0FDVEE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTkE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFqQkE7QUFxQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBckJBO0FBMEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXJFQTtBQUhBO0FBREE7QUErRUE7Ozs7QUF0SUE7QUFDQTtBQXdJQTs7Ozs7OztBQ2xLQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUhBO0FBTEE7QUFZQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFZQTtBQUNBOzs7Ozs7OztBQy9CQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQXRDQTtBQUNBO0FBd0NBOzs7Ozs7O0FDN0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFlQTs7OztBQWpEQTtBQUNBO0FBbURBOzs7Ozs7O0FDeERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQWZBO0FBQ0E7QUFpQkE7Ozs7Ozs7QUN0QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBZkE7QUFDQTtBQWlCQTs7Ozs7OztBQ3RCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9