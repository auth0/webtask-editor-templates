const fs   = require('fs');
const path = require('path');

module.exports = function exec(grunt) {
  const TMPL_PATH = 'webtask-editor/assets';
  const DEV_PATH  = 'webtask-editor/assets/develop';

  const pkg  = require('./package');

  const minor = pkg.version.replace(/\.(\d)*$/, '');
  const major = pkg.version.replace(/\.(\d)*\.(\d)*$/, '');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws_s3: {
      options: {
        accessKeyId:     process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
        bucket:          process.env.S3_BUCKET,
        region:          process.env.S3_REGION,
        uploadConcurrency: 5,
        params: {
          CacheControl: 'max-age=300'
        },
      },
      clean: {
        files: [
          { action: 'delete', dest: `${TMPL_PATH}/templates.json` }
        ]
      },
      publish: {
        files: [
          {
            expand: true,
            cwd: 'release/',
            src: ['templates.json'],
            dest: `${TMPL_PATH}`
          }
        ]
      },
      clean_dev: {
        files: [
          { action: 'delete', dest: `${TMPL_PATH}/templates.json` }
        ]
      },
      publish_dev: {
        files: [
          {
            expand: true,
            cwd: 'release/',
            src: ['templates.json'],
            dest: `${TMPL_PATH}`
          }
        ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-http');

  grunt.registerTask('templates', () => {
    const templates = [];

    fs.readdirSync(path.join('templates')).filter((file) => {
      return file.indexOf('.yaml') >= 0;
    }).map((tmpl) => {
      const template = grunt.file.readYAML(path.join('templates', tmpl));
      templates.push(template);
    });

    grunt.file.write(path.join('release', 'templates.json'), JSON.stringify(templates, null, 2));
  });

  grunt.registerTask('cdn', [
    'templates',
    'aws_s3:clean',
    'aws_s3:publish'
  ]);
};
