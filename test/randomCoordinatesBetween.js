import assert from 'chai/assert';
import randomCoordinatesBetween from '../src/lib/utilities/randomCoordinatesBetween';

describe( 'randomCoordinatesBetween', () => {
    it( 'should return a value between 1 and 100', () => {
        const coordinates = randomCoordinatesBetween( 4, 100, 10, 200 );
        assert( coordinates.x ).least( 4 );
        assert( coordinates.x ).most( 100 );
        assert( coordinates.y ).least( 10 );
        assert( coordinates.y ).most( 200 );
    })
});
