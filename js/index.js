var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var drumAudio = [//9 drum elements with src attribute for audio element
{ id: 'kit & hat', padLetter: 'Q', keyCode: 81, src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', type: 'audio/mp3' },
{ id: 'Bld H1', padLetter: 'W', keyCode: 87, src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', type: 'audio/mp3' },
{ id: 'Dry Ohh', padLetter: 'E', keyCode: 69, src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', type: 'audio/mp3' },
{ id: 'Punchy Kick', padLetter: 'A', keyCode: 65, src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', type: 'audio/mp3' },
{ id: 'Side Stick', padLetter: 'S', keyCode: 83, src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', type: 'audio/mp3' },
{ id: 'Heater 1', padLetter: 'D', keyCode: 68, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', type: 'audio/mp3' },
{ id: 'Brk Snr', padLetter: 'Z', keyCode: 90, src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', type: 'audio/mp3' },
{ id: 'Heater 2', padLetter: 'X', keyCode: 88, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', type: 'audio/mp3' },
{ id: 'Heater 3', padLetter: 'C', keyCode: 67, src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', type: 'audio/mp3' }];var


DrumPad = function (_React$Component) {_inherits(DrumPad, _React$Component);function DrumPad() {var _ref;var _temp, _this, _ret;_classCallCheck(this, DrumPad);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DrumPad.__proto__ || Object.getPrototypeOf(DrumPad)).call.apply(_ref, [this].concat(args))), _this), _this.














    handleKeyDown = function (event) {
      if (event.keyCode === _this.props.padLetter.charCodeAt()) {
        _this.audio.play();
        _this.audio.currentTime = 0; //set time audio should play at (0 seconds)
        _this.props.handleDisplay(_this.props.id);
      }
    }, _this.

    handleClick = function () {
      _this.audio.play();
      _this.audio.currentTime = 0; //set time audio should play at (0 seconds)
      _this.props.handleDisplay(_this.props.id); //changes value of parameter used in display function
    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(DrumPad, [{ key: 'componentDidMount', //method invoked immediately after component mounted using event listener
    value: function componentDidMount() {document.addEventListener('keydown', this.handleKeyDown); //window.focus()//set focus to the current window
    } //method for when component to be removed from DOM
  }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener('keydown', this.handleKeyDown);} //method to handle a key down event from keyboard - play HTML audio and change display
    //no need to state actual keyCode
    //method to handle a click event on any of the 8 drum pads
  }, { key: 'render', //render letters on pads
    value: function render() {var _this2 = this;var _props = this.props,id = _props.id,src = _props.src,padLetter = _props.padLetter;return React.createElement('div', { className: 'drum-pad', id: id, onClick: this.handleClick }, React.createElement('h1', null, padLetter),
        React.createElement('audio', { ref: function ref(_ref2) {return _this2.audio = _ref2;}, className: 'clip', src: src, id: padLetter }));


    } }]);return DrumPad;}(React.Component);
//end of class
var
App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this3.






    handleDisplay = function (display) {return _this3.setState({ display: display });};_this3.state = { display: '' };return _this3;} //changes state of display according to value of this.props.id in handleClick method
  _createClass(App, [{ key: 'render',
    //render all 9 drum pads with padLetters & show display state
    //map method used to invoke function for each drum pad
    value: function render() {var _this4 = this;
      return (
        React.createElement('div', { id: 'drum-machine' },
          React.createElement('div', null,
            React.createElement('h1', { style: { textAlignVertical: "center", textAlign: "center" } }, 'DRUM KIT')),

          React.createElement('div', { id: 'display' },
            this.state.display),

          React.createElement('div', { id: 'drum-pads' },
            drumAudio.map(function (d) {return (
                React.createElement(DrumPad, { id: d.id, padLetter: d.padLetter, src: d.src, handleDisplay: _this4.handleDisplay }));})))


        //end of drum-machine div
      );
    } //end of render()
  }]);return App;}(React.Component); //end of class App

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));