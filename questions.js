const questions = {
  javascript: [
    {
      question: "Which of the following is correct about JavaScript?",

      choices: [
        "JavaScript has object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
        "Both the <head> section and the <body> section are correct",
        " The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.",
        "All of the above.",
      ],
      answer: 3,
    },

    {
      question:
        "Which of the following type of variable is visible everywhere in your JavaScript code?",
      choices: [
        "global variable",
        "local variable",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 0,
    },

    {
      question: "Which built-in method returns the length of the string?",
      choices: ["length()", "size()", "index()", "None of the above."],

      answer: 0,
    },

    {
      question: "Which of the following code creates an object?",
      choices: [
        "var book = Object();",
        "var book = new Object();",
        "var book = new OBJECT();",
        "var book = new Book();",
      ],

      answer: 1,
    },

    {
      question:
        "Which of the following function of Number object defines how many total digits to display of a number?",
      choices: [
        "toExponential()",
        "toFixed()",
        "toLocaleString()",
        "toPrecision()",
      ],

      answer: 3,
    },

    {
      question:
        " Which of the following function of String object extracts a section of a string and returns a new string?",
      choices: ["slice()", "split()", "replace()", "search()"],

      answer: 0,
    },
  ],

  html: [
    {
      question: "What does HTML stands for?",

      choices: [
        "Hypertext Machine language.",
        "Hypertext and links markup language.",
        "Hypertext Markup Language",
        "Hightext machine language.",
      ],
      answer: 2,
    },

    {
      question: "How is document type initialized in HTML5.?",
      choices: [
        "</DOCTYPE HTML>",
        "local variable",
        "</DOCTYPE>",
        "</DOCTYPE html>",
      ],
      answer: 2,
    },

    {
      question:
        "Which of the following HTML Elements is used for making any text bold ?",
      choices: ["<p>", "<i>", "<li>", "<b>"],

      answer: 3,
    },

    {
      question:
        "Which of the following HTML element is used for creating an unordered list?",
      choices: ["<ui>", "<i>", "<em>", "<ul>"],

      answer: 3,
    },

    {
      question: "Which of the following characters indicate closing of a tag?",
      choices: [".", "/", "]", "!"],

      answer: 1,
    },

    {
      question: "What is the font-size of the h1 heading tag?",
      choices: ["3.5 em", "2.17 em", "2 em", "1.5 em"],

      answer: 2,
    },
  ],

  css: [
    {
      question:
        "Which of the following defines a relative measurement for the height of a font in em spaces?",

      choices: ["%", "cm", "em", "ex"],
      answer: 2,
    },

    {
      question: "Which of the following defines a measurement in millimeters?",

      choices: ["in", "mm", "pc", "pt"],
      answer: 1,
    },

    {
      question:
        "Which of the following property is used to set the background color of an element?",

      choices: [
        "background-color",
        "background-image",
        "background-repeat",
        "background-position",
      ],
      answer: 0,
    },

    {
      question:
        "Which of the following property is used to add or subtract space between the words of a sentence?",

      choices: [
        "text-indent",
        "text-align",
        "text-decoration",
        "text-transform",
      ],
      answer: 0,
    },

    {
      question:
        "Which of the following property is used to set the text shadow around a text?",

      choices: [
        "white-space",
        "text-shadow",
        "text-decoration",
        "text-transform",
      ],
      answer: 1,
    },

    {
      question:
        "Which of the following property is used to set the text shadow around a text?",

      choices: [
        "white-space",
        "text-shadow",
        "text-decoration",
        "text-transform",
      ],
      answer: 1,
    },
  ],

  react: [
    {
      question: "Everything in React is a _____________",

      choices: ["Module", "Component", "Package", "Class"],
      answer: 1,
    },

    {
      question: "In which directory React Components are saved?",

      choices: [
        "Inside js/components/",
        "Inside vendor/components/",
        "Inside vendor/components/",
        "Inside vendor/",
      ],
      answer: 0,
    },

    {
      question: "What is Babel?",

      choices: [
        "A transpiler.",
        "An interpreter",
        "A Compiler",
        "Both Compiler and Transpilar",
      ],
      answer: 3,
    },

    {
      question: "How many elements does a react component return?",

      choices: [
        "1 Element",
        "2 Elements",
        "Multiple Elements",
        "None of the above",
      ],
      answer: 2,
    },

    {
      question: "What is ReactJS?",

      choices: [
        "Server-side Framework",
        "User-interface framework",
        "A Library for building interaction interfaces",
        "None of the Above",
      ],
      answer: 2,
    },

    {
      question: "What are the limitations of ReactJS?",

      choices: [
        "React is only for view layer of the app so we still need the help of other technologies to get a complete tooling set for development",
        "React is using inline templating and JSX. This can seem awkward to some developers",
        "The library of react is too large",
        "All of these",
      ],
      answer: 3,
    },
  ],

  nodejs: [
    {
      question: "Which of the following is true about Node.JS?",

      choices: [
        "Node.JS is used to delevop I/O intensive web applications like video streaming sites, single page applications and other web application.",
        "Node.js is open source and is completely free to use.",
        "Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.",
        "All of the above.",
      ],
      answer: 3,
    },

    {
      question: "What is use of Underscore Variable in REPL session?",

      choices: [
        "to get the last command used.",
        "to get the last result.",
        "to store the result.",
        "None of the above.",
      ],
      answer: 1,
    },

    {
      question: "Which of the following is true with respect to Node. >",

      choices: [
        "Every API of Node js are asynchronous.",
        "Node being a single thread, and uses async function calls to maintain the concurrency.",
        " Node thread keeps an event loop and whenever any task get completed, it fires the corresponding event which signals the event listener function to get executed.",
        "All of the above.",
      ],
      answer: 1,
    },

    {
      question: "Which of the following is true about Chaining streams?",

      choices: [
        "Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations.",
        "Chanining is normally used with piping operations.",
        " Both of the above.",
        "None of the above.",
      ],
      answer: 2,
    },

    {
      question: "Which method of fs module is used to remove a directory?",

      choices: [
        "fs.deleteDirectory(path[, mode], callback)",
        "fs.rmdir(path, callback)",
        "fs.removeDirectory(path[, mode], callback)",
        "None of the above.",
      ],
      answer: 1,
    },

    {
      question:
        "Which of the following module is required for path specific operations?",

      choices: ["os module", "fs module", "path module", "None of the above."],
      answer: 2,
    },
  ],

  angularjs: [
    {
      question: "What is controller in MVC?",

      choices: [
        "It is a software Code that stores the data.",
        "It is a software Code that renders the user interface.",
        "It is a software Code that controls the interactions between the Model and View.",
        "None of the above.",
      ],
      answer: 2,
    },

    {
      question: "Which of the following is true about currency filter?",

      choices: [
        "Currency filter formats text in a currency format.",
        "Currency filter is a function which takes text as input.",
        "Both of the above.",
        "None of the above.",
      ],
      answer: 1,
    },

    {
      question: "Angular Js is based on>",

      choices: [
        "MVC Architecture",
        "Decorator pattern",
        "MVVM Architectural pattern",
        "Observer Pattern",
      ],
      answer: 2,
    },

    {
      question: "AngularJS expressions are written using",

      choices: [
        "(expression)",
        "{{expression}}",
        "{{{expression}}}",
        "[expression]",
      ],
      answer: 1,
    },

    {
      question: "What is correct way to apply multiple filters in AngularJs.",

      choices: [
        " {{ expression | filter1 | filter2 | ... }}",
        "{ expression | {filter1} | {filter2} | ... }}",
        "{ expression - {filter1} - {filter2} - ... }}",
        "{{ {filter1} | {filter2} | ...-expression}}",
      ],
      answer: 0,
    },

    {
      question: "Which directive initializes an AngularJS application?",

      choices: ["ng-init", "ng-app", "ngSrc", "ng-start"],
      answer: 2,
    },
  ],

  php: [
    {
      question: "PHP is a ............",

      choices: [
        "Open Source Laguage",
        "Widely Used Language",
        "Server side scripting language",
        "All of the above",
      ],
      answer: 3,
    },

    {
      question: "Which of following is not a Superglobals in PHP?",

      choices: ["$_SERVER", "$_ENV", "$_FILES", "$_PUT"],
      answer: 3,
    },

    {
      question:
        "Which function is used to get ASCII value of a character in PHP ?",

      choices: ["asc()", "chr()", "ascii()", "val()"],
      answer: 1,
    },

    {
      question: " ______ is used to unset a variable in PHP ?",

      choices: ["delete()", "unset()", "unlink()", "delete();"],
      answer: 1,
    },

    {
      question: "How many error levels are available in PHP ?",

      choices: ["20", "4", "19", "16"],
      answer: 3,
    },

    {
      question:
        "Which of the following PHP functions accepts any number of parameters?",

      choices: [
        "func_get_args()",
        "func_get_argv()",
        "get_argv()",
        "get_argc()",
      ],
      answer: 0,
    },
  ],

  csharp: [
    {
      question: "Which of the following is a contextual keyword in C#?",

      choices: ["get", "set", "add", "All of the above."],
      answer: 3,
    },

    {
      question:
        "Which of the following converts a type to a single Unicode character, where possible in C#?",

      choices: ["ToSingle", "ToByte", "ToChar", "ToDateTime"],
      answer: 2,
    },

    {
      question:
        "Which of the following converts a type (integer or string type) to date-time structures in C#?",

      choices: ["ToString", "ToSingle", "ToChar", "ToDateTime"],
      answer: 3,
    },

    {
      question:
        "Which of the following operator returns the size of a data type in C#?",

      choices: ["sizeof", "typeof", "&</a>", "*"],
      answer: 0,
    },

    {
      question:
        "Which of the following access specifier in C# allows a child class to access the member variables and member functions of its base class?",

      choices: ["Public", "Private", "Protected", "Internal"],
      answer: 2,
    },

    {
      question: "Which of the following is true about C# structures?",

      choices: [
        "Structures can have methods, fields, indexers, properties, operator methods, and events.",
        "Structures can have defined constructors, but not destructors.",
        "You cannot define a default constructor for a structure. The default constructor is automatically defined and cannot be changed.",
        "All of the above.",
      ],
      answer: 3,
    },
  ],
};
