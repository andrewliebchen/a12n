module.exports = function(grunt) {
  "use strict";

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Get today's date in a useful format
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if(dd < 10) {
    dd = '0' + dd;
  };

  if(mm < 10) {
    mm = '0' + mm;
  };

  today = yyyy + '-' + dd + '-' + mm;

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

    jekyll: {
      options: {
        bundleExec: true,
        src : '<%= app %>'
      },
      dist: {
        options: {
          dest: '<%= dist %>',
          config: '_config.yml'
        }
      },
    },

    sass: {
      dist: {
        options: {
          style: 'expanded',
          includePaths: require('node-neat').with('bower_components')
        },
        files: {
          './stylesheets/style.css': './stylesheets/style.scss'
        }
      }
    },

    autoprefixer: {
      sass: {
        src:  './stylesheets/style.css',
        dest: './stylesheets/style.css'
      }
    },

    watch: {
      files: [
        './stylesheets/**/*.scss',
        './_layouts/*.html',
        './*.html',
        '_includes/*.html',
        './_posts/*.md'
      ],
      tasks: ['build'],
      options: {
        spawn: false,
        livereload: true,
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          hostname: 'localhost',
          base: './_site',
          keepalive: true,
          livereload: true
        }
      }
    },

    concurrent: {
      tasks: ['watch', 'connect'],
      options: {
          logConcurrentOutput: true
      }
    },

    availabletasks: {
      tasks: {}
    }
  });

  grunt.registerTask('default', ['availabletasks']);
  grunt.registerTask('screenshot', ['localscreenshots']);
  grunt.registerTask('build', ['sass', 'autoprefixer', 'jekyll']);
  grunt.registerTask('serve', ['build', 'concurrent']);
};
