module.exports = function (grunt) {
    
    grunt.loadNpmTasks('grunt-replace');
        
    // Project configuration.
    grunt.initConfig({
        replace: {
            local: {
                options: {
                    patterns: [{
                            json: grunt.file.readJSON('./config/environments/local.json')
                        }]
                },
                files: [{
                        expand: true,
                        flatten: true,
                        src: './config/tpl/config.js',
                        dest: './config/'
                    }
                ]
            },
        }
    });


    grunt.registerTask('deploy:local', ['replace:local']);
};


