# apache-md5
[Node.js](http://nodejs.org/) package for Apache style password encryption using md5.

[![build](https://github.com/gevorg/apache-md5/workflows/build/badge.svg)](https://github.com/gevorg/apache-md5/actions/workflows/build.yml)

## Installation

Via git (or downloaded tarball):

```bash
$ git clone git://github.com/gevorg/apache-md5.git
```
Via [npm](http://npmjs.org/):

```bash
$ npm install apache-md5
```

## Usage

```javascript
const md5 = require("apache-md5");

// Encrypting password using apache's md5 algorithm.
const encryptedPassword = md5("mypass");

// Should print true.
console.log(md5("mypass", encryptedPassword) == encryptedPassword);
// Should print false.
console.log(md5("notmypass", encryptedPassword) == encryptedPassword);
```

## Running tests

It uses [mocha](https://mochajs.org/), so just run following command in package directory:

```bash
$ npm test
```

## License

The MIT License (MIT)