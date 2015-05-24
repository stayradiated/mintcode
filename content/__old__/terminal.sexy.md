+++
author = "George Czabania"
date = "2015-02-25"
title = "terminal.sexy"
link = "Github"
image = "/assets/terminal.sexy/screenshot.jpg"

[commits]
  first = "2014-04-10"
  total = "113"

[links]
  Github = "https://github.com/stayradiated/terminal.sexy"
  Site = "https://terminal.sexy"
  Blog-Post = "/blog/terminal.sexy"
+++

Create, view and edit terminal colorschemes. Supports importing and exporting
configuration files between many different. My favorite feature is that you can
import a buffer output from tmux and it will display it in the browser using
your custom color scheme.

A lot of the code I wrote for this project was put into external libraries on
npm, so that they could be used for other projects as well. These libraries
include:

- [colr](https://github.com/stayradiated/colr) - convert between color formats
  (rgb, hsl, etc.)
- [termio](https://github.com/stayradiated/termio) - convert ansi escape codes
  into html
- [termcolors](https://github.com/stayradiated/termcolors) - import and export
  between multiple terminal color scheme formats
- [react-ranger](https://github.com/stayradiated/react-ranger) - column browser
  (used for the scheme and template file browser)
- [react-colorpicker](https://github.com/stayradiated/react-colorpicker) -
  simple colorpicker for react

Other dependencies that were used include:

- [React](https://www.npmjs.com/package/react) - a JavaScript library for
  building user interfaces.
- [Golden Layout](https://www.npmjs.com/package/golden-layout) - The ultimate
  JavaScript layout manager 
- [Bluebird](https://www.npmjs.com/package/bluebird) - Full featured
  Promises/A+ implementation with exceptionally good performance
- [Reflux](https://www.npmjs.com/package/reflux) - A simple library for
  uni-directional dataflow application architecture inspired by ReactJS Flux
- [Lodash](https://www.npmjs.com/package/lodash) - Function utilities
- [HUSL](https://www.npmjs.com/package/husl) - Replacement for the HSL color
  space
