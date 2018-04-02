## Objectives

1. Introduce the JavaScript library p5
2. Create a basic p5 sketch

## What is p5

[p5][p5-home] is a library, or collection of code, that makes it easier to quickly create visual experiences in the browser. It accomplishes this by [abstracting][abstraction] certain technologies and interfaces that can be cumbersome to work with as a burgeoning programmer. Perhaps most notably, p5 makes it quick and easy to work with the HTML `<canvas>` element. `<canvas>` works just as it is named: we describe precisely which lines and shapes should be drawn within the element.

## Incorporating the p5 Library

Luckily for us, p5 is freely available and we could [download it directly][dl-p5]. For use in our websites, we will incorporate a `<script>` tag that will automatically pull the whole library from the internet! This is convenient because it:
  - Reduces the burden on us, as programmers, to store the library itself
  - Ensures we are using the current version of p5

This script tag will be all we need to make sure p5 is loaded:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
```

## Using p5

Let's get started and have some fun with p5! In this directory you will find two source files: `index.html` and `myFirstSketch.js`. Take a look at both of them and work on the following:
  - Make sure both `p5` as well as `myFirstSketch` are being loaded by `index.html` with `<script>` tags
  - Follow the prompts in `myFirstSketch.js` to get started in creating a basic p5 sketch



[p5-home]: "https://p5js.org/"
[dl-p5]: "https://p5js.org/download/"
[abstraction]: "https://en.wikipedia.org/wiki/Abstraction_(software_engineering)"
