# babel-async-test

This library uses babel to test ES7 async/await Javascript functionality.  This library tests a common problem, of reading a directory of files and reading the contents of each file. There are two examples

1. promises.js is a promised based implementation
2. aysnc.js is an async/await based implementation

##Getting Started

Clone the repo
```bash
git clone https://github.com/bmancini55/babel-async-test.git
```

Install all modules
```bash
npm install
```

Transpile src ES6/ES7 code to ES5. This will place the output of `src` into `dist`.
```bash
grunt babel
```

Run the application
```bash
npm start
```


