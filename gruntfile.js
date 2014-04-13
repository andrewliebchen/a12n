// Get today's date in a useful format
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if( dd<10 ){
  dd = '0' + dd;
}

if( mm<10 ){
    mm = '0' + mm;
}

today = yyyy + '-' + dd + '-' + mm;

// Get on with the Grunt
module.exports = function(grunt) {
  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    localscreenshots: {
      options: {
        path: './images/screenshots/' + today + '/',
        local: {
          path: './_site',
          port: 8080,
        },
        viewport: ['1024x768']
      },
      src: 'index.html'
    },
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-localscreenshots');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['localscreenshots']);
};
