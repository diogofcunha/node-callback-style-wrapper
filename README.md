# node-callback-style-wrapper

[![npm version](https://badge.fury.io/js/node-callback-style-wrapper.svg)](https://badge.fury.io/js/node-callback-style-wrapper)

Node callback style (also know as error first callback) was great, it arrived as the perfect match with the idea of creating non-blocking software, the win of callbacks over event handlers was instrumental in the growth of modern JS development.

Nowadays the solution is too coupled with the imperative programming paradigm, in 2017 we want to write more declarative code, we don't want to add if statements to check if our callback threw an error.

Promises came to rescue us from the callback nightmare!

The best way to write this declarative code is to use promises, promises belong to the 3rd generation of async programming and they represent the eventual result of an asynchronous operation.

**This small module is just a Promisse wrapper for your callbacks.**

### Install

```
yarn add -D node-callback-style-wrapper
```

### Example of Usage

```Javascript
const wrapper = require('node-callback-style-wrapper');
const fs = require('fs');

wrapper(fs.readdir, './path/to/my/dir')
   .then((x) => { doStuff(x) })
   .catch((err) => { console.error("Unexpected error", err) })
   
```
