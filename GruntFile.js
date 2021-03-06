module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-babel');

  grunt.initConfig({
    'babel': {
      options: {        
        'optional': [ 'es7.asyncFunctions', 'runtime' ],        
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: [ '**/*.js' ],
          dest: 'dist'
        }]        
      }
    }
  });
};