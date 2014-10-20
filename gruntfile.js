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
          style: 'expanded'
        },
        files: {
          './stylesheets/style.css': './stylesheets/style.scss'
        }
      }
    },

    watch: {
      files: [
        './stylesheets/**/*.scss',
        './_layouts/*.html',
        './*.html',
        './_posts/*.md'
      ],
      tasks: ['sass', 'jekyll'],
      options: {
        spawn: false,
      },
      options: {
        livereload: true,
      },
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
    }
  });

  grunt.loadNpmTasks('grunt-localscreenshots');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['localscreenshots']);
  grunt.registerTask('build', ['sass', 'jekyll']);
  grunt.registerTask('serve', ['build', 'concurrent']);
};
