# Metamorphic
HTML templating languages can be lovely, but it's often a pain to rewrite raw HTML into their particular syntax. Metamorphic lets you do 99% of the work with a simple command-line tool.

## Install
Metamorphic is written using Node.js and distributed as an NPM package. Once you've [installed NPM](http://nodejs.org/download/), copy the following into your Terminal:

`npm install metamorphic`

## Usage
To convert a HTML file into [HAML](http://haml.info):

`metamorphic haml index.html`

Metamorphic supports several templating languages:

* [HAML](http://haml.info) as `metamorphic haml <file>`
* [Jade](http://jade-lang.com) as `metamorphic jade <file>`
* [Slim](http://slim-lang.com) as `metamorphic slim <file>`
* [Compojure](https://github.com/weavejester/compojure) as `metamorphic compojure <file>`

## Contribute
Metamorphic was built by [Michael Mokrysz](https://46bit.com) at the very end of 2012, and is openly licensed under two-clause BSD.

I'd love contributions (whether code refactoring, new templating languages, or fixes) - fork the repo on [Github](https://github.com/46Bit/metamorphic) and get hacking.
