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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    require('load-grunt-tasks')(grunt);


    var paths = {
        app: 'app'
    };

    grunt.initConfig({
        config: paths,
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }, files: ['<%= paths.app %>/**/*.html', '<%= paths.app %>/**/*.js']
            }
        }, connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname: (process.env.HOSTNAME || 'localhost')
            }, test: {
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
                        return [connect().use('/bower_components', connect.static('./bower_components')), connect.static(paths.app)

                        ];
                    }
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
                }, files: {
                    src: ['app/**/*.js', 'test/**/*.js', '!bower_components/**/*.js']
                }
            }, verify: {
                options: {
                    jshintrc: true, reporter: 'checkstyle', reporterOutput: 'target/jshint.xml'
                }, files: {src: ['app/**/*.js', 'test/**/*.js', '!bower_components/**/*.js']}
            }
        }
    });

    grunt.registerTask('serve', ['connect:livereload', 'watch']);

    grunt.registerTask('verify', ['jshint:verify', 'karma:unit']);

    grunt.registerTask('test:dev', ['karma:dev']);

    grunt.registerTask('default', ['serve']);
};
