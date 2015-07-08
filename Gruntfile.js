module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/** \n* Package: <%= pkg.name %> - version <%= pkg.version %> \n* Author: <%= pkg.author.name %> \n* Build Time: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>  \n*/\n',
		clean: ["src/css", "dist"],
		csslint: {
			options: {
				"import": 2,
				"important": false,
				"ids": false,
				"adjoining-classes": false,
				"qualified-headings": false,
				"overqualified-elements": false,
				"unique-headings": false,
				"duplicate-background-images": false,
				"compatible-vendor-prefixes": false,
				"gradients": false
			}, // close .options
			build: {
				src: ['src/css/*.css']
			} // close .build
		}, // close csslint
		cssmin: {
			build: {
				files: [{
					cwd: 'src/css',
					expand: true,
					src: ['*.css'],
					dest: 'dist/css/',
					ext: '.min.css'
				}]
			}, // close .build
		}, // close cssmin
		less: {
			build: {
				files: [{
					cwd: 'src/less',
					expand: true,
					src: ['less-burger-menu.less'],
					dest: 'src/css/',
					ext: '.css'
				}]
			}, // close .build
		}, // close less
		watch: {
			css: {
				files: 'src/less/*.less',
				tasks: ['less','cssmin','usebanner:css'],
				options: {
					interrupt: true,
				},
			}
		},

		usebanner: {
	    css: {
	      options: {
	        position: 'top',
	        banner: '<%= banner %>',
	        linebreak: true
	      },
	      files: {
	        src: ['dist/css/less-burger-menu.min.css']
	      }
	    }
	  },
		bump: {
	    options: {
	      files: ['package.json', 'bower.json'],
	      updateConfigs: [],
	      commit: true,
	      commitMessage: 'Release v%VERSION%',
	      commitFiles: ['package.json', 'bower.json'],
	      createTag: true,
	      tagName: '%VERSION%',
	      tagMessage: 'Version %VERSION%',
	      push: true,
	      pushTo: 'origin',
	      gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
	      globalReplace: false,
	      prereleaseName: false,
	      regExp: false
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-bump');

	// Default task(s).
	grunt.registerTask('default', ['build', 'watch']);
	grunt.registerTask('build', ['clean','less','csslint','cssmin','usebanner']);
};
