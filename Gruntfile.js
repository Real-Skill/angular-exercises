/*jshint camelcase:false*/

module.exports = function (grunt)
{
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  require('load-grunt-tasks')(grunt);


  var config = {
    app: 'app'
  };

  grunt.initConfig({
    config: config,
    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      unit: {
        singleRun: true
      },
      dev: {
        singleRun: false
      }
    },
    jshint: {
      default: {
        options: {
          jshintrc: true
        },
        files: {
          src: ['app/**/*.js', 'test/**/*.js', '!app/bower_components/**/*.js']
        }
      },
      verify: {
        options: {
          jshintrc: true,
          reporter: 'checkstyle',
          reporterOutput: 'target/jshint.xml'
        },
        files: {src: ['app/**/*.js', 'test/**/*.js', '!app/bower_components/**/*.js']}
      }
    }
  });

  grunt.registerTask('verify', ['jshint:verify', 'karma:unit']);

  grunt.registerTask('test:dev', ['karma:dev']);

  grunt.registerTask('default', ['verify']);
};
