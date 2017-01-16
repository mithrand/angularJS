module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'controllers/*.js', 'app.js'],
      options: {
        globals: { jQuery: true },
        reporterOutput: ''
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    concat:{
      dist:{
        src:["controllers/AlumnoController.js","controllers/AlumnosController.js"],
        dest:"unidos.js"
      }
    },
    uglify:{
      dist:{
        src:"unidos.js",
        dest:"build/MyAppAngularJS.min.js"
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint','concat','uglify']);

};