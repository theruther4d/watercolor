/**
 * Returns a random number between min and max.
 * @function
 * @param min { number } - The lowest value possible.
 * @param max { number } - The highest value possible.
 * @return { number }
 */
export default function randomNumberBetween( min = 0, max = 100 ) {
    return Math.round( ( Math.random() * ( max - min ) ) + min );
}
