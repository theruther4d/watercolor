/**
 * Returns a random set of x and y coordinates.
 * @function
 * @param xMin { number } - The lowest possible x value.
 * @param xMax { number } - The highest possible x value.
 * @param yMin { number } - The lowest possible y value.
 * @param yMax { number } - The highest possible y value.
 * @return coordinates { object }
 */
import randomNumberBetween from './randomNumberBetween';

export default function randomCoordinatesBetween( xMin = 0, xMax = 0, yMin = 0, yMax = 0 ) {
    return {
        x: Math.round( randomNumberBetween( xMin, xMax ) ),
        y: Math.round( randomNumberBetween( yMin, yMax ) )
    }
}
