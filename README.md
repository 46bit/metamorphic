# Metamorphic
HTML templating languages can be lovely, but it's often a pain to transfer plain HTML into a simple language like that of [Jade](https://github.com/visionmedia/jade). Metamorphic converts HTML into these templating languages, leaving little work for you to do.

Currently being built by [Michael Mokrysz](https://46bit.com). Openly licensed under two-clause BSD. Please try it, break it, report &amp; fix it.

Convert your HTML documents to Jade templating syntax with a simple `./bin/metamorphic jade http://example.com/your/html/page.html`.

## Install
Metamorphic is written using Node.js and distributed as an NPM package. Once you've [installed NPM](http://nodejs.org/download/), copy the following into your Terminal:

`npm install metamorphic`

## Usage
Metamorphic contains a number of generators, one for each supported templating language. At the present time it supports `haml`, `jade` and `slim`.

To convert HTML into HAML you'd run `metamorphic haml index.html` in the Terminal. Exchange `haml` for `jade` or `slim` to use them.

## Contribute
Metamorphic was built by [Michael Mokrysz](https://46bit.com) at the very end of 2012.

I'd love contributions (whether code refactoring, new templating languages, or fixes) - fork the repo on [Github](https://github.com/46Bit/metamorphic) and get hacking.
