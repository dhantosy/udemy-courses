/*
BEFORE BROWSERIFY
-------------------*/

/* CALL ALL REQRUIRED FUNCTION */
// var gulp = require('gulp');
// var react = require('gulp-react');
// var concat = require('gulp-concat');

/* CREATE GULP FUNCTION */
// gulp.task('default',function(){

	/* get all the files within src folder */
	//return gulp.src('src/**')
		/* convert jsx to js */
		//.pipe(react())
		/* join all the files together - called application.js */
		//.pipe(concat('application.js'))
		/* save the file in the working directory */
		//.pipe(gulp.dest('./'))

//});

/*
AFTER BROWSERIFY
-------------------*/
// skeleton and build process
var gulp = require('gulp');
// console logging build process for debugging
var gutil = require('gulp-util');
// convert the readable stream you get from browserify into a vinyl stream that is what gulp is expecting to get
var source = require('vinyl-source-stream');
// responsible handling file dependency and order load correctly
var browserify = require('browserify');
// automate gulp file when code changes
var watchify = require('watchify');
// handle converting jsx to js in conjuction with browserify
var reactify = require('reactify');

gulp.task('default',function(){
	/* create bundler */
	var bundler = watchify(browserify({
		/* get parent component file */
		entries: ['./src/app.jsx'],
		/* tells browserify to transform jsx to js */
		transform: [reactify],
		/* list extension to transform */
		extensions: ['.jsx'],
		/* to show error message */
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	/* execute bundler */
	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			/* bundle init */
			.bundle()
			/* log error message */
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			/* which file to look */
			.pipe(source('main.js'))
			/* destination folder to save the file */
			.pipe(gulp.dest('./'));
	};
	/* when execute gulp in command line */
	/* build init */
	build();
	/* update build */
	bundler.on('update', build)

});








