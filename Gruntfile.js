/*jshint camelcase:false*/

module.exports = function (grunt)
{
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
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
                        },
                        files: ['<%= paths.app %>/**/*.html', '<%= paths.app %>/**/*.js']
                    }
                },

                connect: {
                    options: {
                        port: 9000,
                        livereload: 35729,
                        hostname: (process.env.HOSTNAME || 'localhost')
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
                                return [connect().use('/bower_components', connect.static('./bower_components')), connect.static(paths.app)

                                ];
                            }
                        }
                    }
                },
                protractor_webdriver: {
                    driver: {
                        options: {
                            path: 'node_modules/.bin/',
                            command: 'webdriver-manager start',
                            keepAlive: true
                        }
                    }
                },
                protractor: {
                    options: {
                        configFile: 'test/protractor.conf.js',
                        keepAlive: false,
                        noColor: false
                    },
                    chrome: {
                        options: {
                            args: {
                                browser: 'chrome'
                            }
                        }
                    },
                    firefox: {
                        options: {
                            args: {
                                browser: 'firefox'
                            }
                        }
                    },
                    phantomjs: {
                        options: {
                            args: {
                                browser: 'phantomjs'
                            }
                        }
                    },
                    continuous: {
                        options: {
                            keepAlive: true
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
            }
    );

    grunt.registerTask('serve', ['connect:livereload', 'watch']);

    var verityTask = ['jshint:verify', 'connect:test', 'protractor_webdriver', 'protractor:chrome'];
    if (process.env.WEBDRIVER_RUNNIG) {
        verityTask.splice(verityTask.indexOf('protractor_webdriver'), 1);
    }
    grunt.registerTask('verify', verityTask);

    grunt.registerTask('test:dev', ['karma:dev']);

    grunt.registerTask('test:e2e', ['connect:test', 'protractor_webdriver', 'protractor:chrome']);

    grunt.registerTask('default', ['serve']);
};
