import gulp from 'gulp';
import babel from 'babelify';
import watchify from 'watchify';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import ugly from 'gulp-uglify';

const SRC_DIR = './src';
const OUTPUT_DIR = './dist/';

const compile = ( watch ) => {
    const bundler = watchify(
        browserify(
            `${SRC_DIR}/watercolor.js`,
            {
                debug: true,
                presets: ['es2015'],
                plugins: ['babel-plugin-transform-es2015-spread', 'babel-plugin-transform-object-rest-spread']
            }
        ).transform( babel ) );

    const rebundle = () => {
        bundler.bundle()
            .on( 'error', ( err ) => {
                console.log( `error: ${err }` );
            })
            .pipe( source( 'watercolor.js' ) )
            .pipe( buffer() )
            // .pipe( ugly() )
            .pipe( gulp.dest( OUTPUT_DIR ) );
    }

    if( watch ) {
        bundler.on( 'update', () => {
            console.log( 'bundling' );
            rebundle();
        });
    }

    rebundle();
};

const watch = () => {
    return compile( true );
}

gulp.task( 'build', () => {
    return compile();
});

gulp.task( 'watch', () => {
    return watch();
});

gulp.task( 'default', ['watch'] );
