/*jshint camelcase:false*/

module.exports = function (grunt)
{
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-angular-gettext');
    grunt.loadNpmTasks('grunt-karma');

    require('load-grunt-tasks')(grunt);


    var config = {
        app: 'app'
    };

    grunt.initConfig({
        config: config,
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/**/*.html', '<%= config.app %>/**/*.js'
                ]
            }
        },

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: '127.0.0.1'
            },
            test: {
                options: {
                    base: ['app'],
                    port: 9001
                }
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect)
                    {
                        return [
                            connect().use('/bower_components', connect.static('./bower_components')), connect.static(config.app)

                        ];
                    }
                }
            }
        },
        nggettext_extract: {
            pot: {
                options: {
                    startDelim: '[[',
                    endDelim: ']]'
                },
                files: {
                    'po/pl.pot': ['app/*.html', 'app/*.js']
                }
            }
        },
        nggettext_compile: {
            all: {
                options: {
                    module: 'exerciseApp'
                },
                files: {
                    'app/translations.js': ['po/*.po']
                }
            }
        },
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

    grunt.registerTask('serve', ['connect:livereload', 'watch']);

    grunt.registerTask('verify', ['jshint:verify', 'karma:unit']);

    grunt.registerTask('test:dev', ['karma:dev']);

    grunt.registerTask('default', ['serve']);
};
