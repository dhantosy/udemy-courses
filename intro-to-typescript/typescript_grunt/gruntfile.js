module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-ts');


	grunt.initConfig({
		ts: {
			main: {
				src: ['typescript/*.ts'],
				//to concanate:
				out: 'js/main.js'
				// dest: 'js/'
			}
		}
	})

	grunt.registerTask('default', ['ts']);

}