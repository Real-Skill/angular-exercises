/*jshint camelcase:false*/
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt)
{

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-angular-gettext');
    grunt.loadNpmTasks('grunt-karma');

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
                hostname: 'localhost'
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
            },
            unitSingleRun: {
                singleRun: true
            }
        }

    });

    grunt.registerTask('serve', function ()
    {
        grunt.task.run([
            'connect:livereload', 'watch'
        ]);
    });

    grunt.registerTask('test', ['karma:unitSingleRun']);

    grunt.registerTask('default', ['serve']);
};
