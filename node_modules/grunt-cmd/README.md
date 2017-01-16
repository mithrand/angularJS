# grunt-cmd

> CMD Module Compiler.

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cmd --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cmd');
```

## The "cmd" task

### Overview
In your project's Gruntfile, add a section named `cmd` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
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
});
```

### Options

#### options.base
Type: `String`
Default value: `''`

same to `base` in seajs.config

#### options.shim
Type: `Object`
Default value: `{}`

same to `alias` in seajs.config

### Usage Examples
```js
grunt.initConfig({
  cmd: {
    options: {
      base: 'tmp/src',
      shim: {
      	'jquery': 'tmp/lib/jquery.js'
      }
    },
    all: {
      src: ['tmp/src/**/*.js'],
      ignores: ['tmp/src/**/*.min.js'],
      dest: 'tmp/compiled'
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
