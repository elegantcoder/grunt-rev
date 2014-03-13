'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.rev = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var exists = grunt.file.exists('tmp/9e107d9d.default.txt');
    test.ok(exists, '8 character MD5 hash prefix');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var exists = grunt.file.exists('tmp/2fd4.custom.txt');
    test.ok(exists, '4 character SHA-1 hash prefix');

    test.done();
  },
  international_options: function(test) {
    test.expect(1);

    var exists = grunt.file.exists('tmp/faa07745.international.txt');
    test.ok(exists, '8 character MD5 hash prefix for international content');

    test.done();
  },

  output_options: function (test) {
    test.expect(2);

    var jsonPath = 'tmp/rev-output.json';
    var exists = grunt.file.exists(jsonPath);
    test.ok(exists, 'Output JSON exists');
    var json = JSON.parse(grunt.file.read(jsonPath));

    test.deepEqual(json, {rev:[{original: 'tmp/output.txt', renamed: 'tmp/9e107d9d.output.txt'}]})

    test.done();
  }
};
