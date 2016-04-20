(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _randomNumberBetween = require('./utilities/randomNumberBetween');

var _randomNumberBetween2 = _interopRequireDefault(_randomNumberBetween);

var _randomCoordinatesBetween = require('./utilities/randomCoordinatesBetween');

var _randomCoordinatesBetween2 = _interopRequireDefault(_randomCoordinatesBetween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** Blot Class */

var Blot = function () {
    /**
     * Represents a large Blot of watercolor on the <canvas>.
     * @constructor
     * @param canvas { DOM node }
     */

    function Blot(canvas) {
        _classCallCheck(this, Blot);

        this._canvas = canvas;
        this._ctx = this._canvas.getContext('2d');
        this._canvasDimensions = this._canvas.getBoundingClientRect();
    }

    /**
     * Destroys the Blot instance.
     */


    _createClass(Blot, [{
        key: 'destroy',
        value: function destroy() {
            this._canvas = null;
            this._ctx = null;
            this._canvasDimensions = null;
        }
    }]);

    return Blot;
}();

;

exports.default = Blot;

},{"./utilities/randomCoordinatesBetween":2,"./utilities/randomNumberBetween":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = randomCoordinatesBetween;

var _randomNumberBetween = require('./randomNumberBetween');

var _randomNumberBetween2 = _interopRequireDefault(_randomNumberBetween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomCoordinatesBetween() {
    var xMin = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var xMax = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    var yMin = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
    var yMax = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    return {
        x: Math.round((0, _randomNumberBetween2.default)(xMin, xMax)),
        y: Math.round((0, _randomNumberBetween2.default)(yMin, yMax))
    };
} /**
   * Returns a random set of x and y coordinates.
   * @function
   * @param xMin { number } - The lowest possible x value.
   * @param xMax { number } - The highest possible x value.
   * @param yMin { number } - The lowest possible y value.
   * @param yMax { number } - The highest possible y value.
   * @return coordinates { object }
   */

},{"./randomNumberBetween":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomNumberBetween;
/**
 * Returns a random number between min and max.
 * @function
 * @param min { number } - The lowest value possible.
 * @param max { number } - The highest value possible.
 * @return { number }
 */
function randomNumberBetween() {
  var min = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var max = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  return Math.round(Math.random() * (max - min) + min);
}

},{}],4:[function(require,module,exports){
'use strict';

var _Blot = require('./lib/Blot');

var _Blot2 = _interopRequireDefault(_Blot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Blot = _Blot2.default;

},{"./lib/Blot":1}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbGliL0Jsb3QuanMiLCJzcmMvbGliL3V0aWxpdGllcy9yYW5kb21Db29yZGluYXRlc0JldHdlZW4uanMiLCJzcmMvbGliL3V0aWxpdGllcy9yYW5kb21OdW1iZXJCZXR3ZWVuLmpzIiwic3JjL3dhdGVyY29sb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHTTs7Ozs7OztBQU1GLGFBTkUsSUFNRixDQUFhLE1BQWIsRUFBc0I7OEJBTnBCLE1BTW9COztBQUNsQixhQUFLLE9BQUwsR0FBZSxNQUFmLENBRGtCO0FBRWxCLGFBQUssSUFBTCxHQUFZLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBeUIsSUFBekIsQ0FBWixDQUZrQjtBQUdsQixhQUFLLGlCQUFMLEdBQXlCLEtBQUssT0FBTCxDQUFhLHFCQUFiLEVBQXpCLENBSGtCO0tBQXRCOzs7Ozs7O2lCQU5FOztrQ0FlUTtBQUNOLGlCQUFLLE9BQUwsR0FBZSxJQUFmLENBRE07QUFFTixpQkFBSyxJQUFMLEdBQVksSUFBWixDQUZNO0FBR04saUJBQUssaUJBQUwsR0FBeUIsSUFBekIsQ0FITTs7OztXQWZSOzs7QUFvQkw7O2tCQUVjOzs7Ozs7OztrQkNmUzs7QUFGeEI7Ozs7OztBQUVlLFNBQVMsd0JBQVQsR0FBNEU7UUFBekMsNkRBQU8saUJBQWtDO1FBQS9CLDZEQUFPLGlCQUF3QjtRQUFyQiw2REFBTyxpQkFBYztRQUFYLDZEQUFPLGlCQUFJOztBQUN2RixXQUFPO0FBQ0gsV0FBRyxLQUFLLEtBQUwsQ0FBWSxtQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsQ0FBWixDQUFIO0FBQ0EsV0FBRyxLQUFLLEtBQUwsQ0FBWSxtQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0IsQ0FBWixDQUFIO0tBRkosQ0FEdUY7Q0FBNUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDSlM7Ozs7Ozs7O0FBQVQsU0FBUyxtQkFBVCxHQUFtRDtNQUFyQiw0REFBTSxpQkFBZTtNQUFaLDREQUFNLG1CQUFNOztBQUM5RCxTQUFPLEtBQUssS0FBTCxDQUFZLElBQUUsQ0FBSyxNQUFMLE1BQWtCLE1BQU0sR0FBTixDQUFsQixHQUFrQyxHQUFwQyxDQUFuQixDQUQ4RDtDQUFuRDs7Ozs7QUNQZjs7Ozs7O0FBRUEsT0FBTyxJQUFQIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCByYW5kb21OdW1iZXJCZXR3ZWVuIGZyb20gJy4vdXRpbGl0aWVzL3JhbmRvbU51bWJlckJldHdlZW4nO1xuaW1wb3J0IHJhbmRvbUNvb3JkaW5hdGVzQmV0d2VlbiBmcm9tICcuL3V0aWxpdGllcy9yYW5kb21Db29yZGluYXRlc0JldHdlZW4nO1xuXG4vKiogQmxvdCBDbGFzcyAqL1xuY2xhc3MgQmxvdCB7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhIGxhcmdlIEJsb3Qgb2Ygd2F0ZXJjb2xvciBvbiB0aGUgPGNhbnZhcz4uXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIGNhbnZhcyB7IERPTSBub2RlIH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvciggY2FudmFzICkge1xuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuX2N0eCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG4gICAgICAgIHRoaXMuX2NhbnZhc0RpbWVuc2lvbnMgPSB0aGlzLl9jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIEJsb3QgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fY2FudmFzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY3R4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY2FudmFzRGltZW5zaW9ucyA9IG51bGw7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvdDtcbiIsIi8qKlxuICogUmV0dXJucyBhIHJhbmRvbSBzZXQgb2YgeCBhbmQgeSBjb29yZGluYXRlcy5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHhNaW4geyBudW1iZXIgfSAtIFRoZSBsb3dlc3QgcG9zc2libGUgeCB2YWx1ZS5cbiAqIEBwYXJhbSB4TWF4IHsgbnVtYmVyIH0gLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSB4IHZhbHVlLlxuICogQHBhcmFtIHlNaW4geyBudW1iZXIgfSAtIFRoZSBsb3dlc3QgcG9zc2libGUgeSB2YWx1ZS5cbiAqIEBwYXJhbSB5TWF4IHsgbnVtYmVyIH0gLSBUaGUgaGlnaGVzdCBwb3NzaWJsZSB5IHZhbHVlLlxuICogQHJldHVybiBjb29yZGluYXRlcyB7IG9iamVjdCB9XG4gKi9cbmltcG9ydCByYW5kb21OdW1iZXJCZXR3ZWVuIGZyb20gJy4vcmFuZG9tTnVtYmVyQmV0d2Vlbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzQmV0d2VlbiggeE1pbiA9IDAsIHhNYXggPSAwLCB5TWluID0gMCwgeU1heCA9IDAgKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogTWF0aC5yb3VuZCggcmFuZG9tTnVtYmVyQmV0d2VlbiggeE1pbiwgeE1heCApICksXG4gICAgICAgIHk6IE1hdGgucm91bmQoIHJhbmRvbU51bWJlckJldHdlZW4oIHlNaW4sIHlNYXggKSApXG4gICAgfVxufVxuIiwiLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiBhbmQgbWF4LlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0gbWluIHsgbnVtYmVyIH0gLSBUaGUgbG93ZXN0IHZhbHVlIHBvc3NpYmxlLlxuICogQHBhcmFtIG1heCB7IG51bWJlciB9IC0gVGhlIGhpZ2hlc3QgdmFsdWUgcG9zc2libGUuXG4gKiBAcmV0dXJuIHsgbnVtYmVyIH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZG9tTnVtYmVyQmV0d2VlbiggbWluID0gMCwgbWF4ID0gMTAwICkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCAoIE1hdGgucmFuZG9tKCkgKiAoIG1heCAtIG1pbiApICkgKyBtaW4gKTtcbn1cbiIsImltcG9ydCBCbG90IGZyb20gJy4vbGliL0Jsb3QnO1xuXG53aW5kb3cuQmxvdCA9IEJsb3Q7XG4iXX0=
