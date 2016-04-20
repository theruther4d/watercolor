import randomNumberBetween from './utilities/randomNumberBetween';
import randomCoordinatesBetween from './utilities/randomCoordinatesBetween';

/** Blot Class */
class Blot {
    /**
     * Represents a large Blot of watercolor on the <canvas>.
     * @constructor
     * @param canvas { DOM node }
     */
    constructor( canvas ) {
        this._canvas = canvas;
        this._ctx = this._canvas.getContext( '2d' );
        this._canvasDimensions = this._canvas.getBoundingClientRect();
    }

    /**
     * Destroys the Blot instance.
     */
    destroy() {
        this._canvas = null;
        this._ctx = null;
        this._canvasDimensions = null;
    }
};

export default Blot;
