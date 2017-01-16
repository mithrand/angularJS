/*
 * grunt-cmd
 * https://github.com/csbun/grunt-cmd
 *
 * Copyright (c) 2014 Hans Chan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp/compiled'],
    },

    // Configuration to be run (and then tested).
    cmd: {
      options: {
        base: 'tmp/src',
        shim: {}
      },
      all: {
        src: ['tmp/src/**/*.js'],
        ignores: [],
        dest: 'tmp/compiled'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'cmd']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
