+++
title = "termcolors"
date = "2015-03-05"
author = "George Czabania"
image = "/assets/termcolors/color-columns.jpg"
+++

[Github](https://github.com/stayradiated/termcolors)

There are lots of different terminal emulators avaiable, and each use their own
custom config format.

However, they all tend to used the same common format of 16 user defineable
colours, as well as foreground and background.

Many tools that work with terminal colours need to write their own
importing/exporting code. This library aims to handle that for them.

The termcolors library currently supports a wide range of terminals, and it's
pretty easy to add more.

It's a lot easier to write an exporting function compared to an importing one.
Mainly because when parsing some input you have to handle a bunch of
variations.

The `Xresources` importer is pretty good, and has been throughouly tested with
a wide range of inputs. It also handles C's `#define`.

The library also comes with a simple command line executable: `termcolors`.

You can install it with nodejs using `npm install -g termcolors`.

Usage is quite straight forward, just set the input and output formats and pipe
some data in to it.

    $ cat ~/.Xresources | termcolors -i xresources -o iterm

You can also list all the avaiable formats:

    $ termcolors -l
    chromeshell  [export]
    gnome        [export]
    guake        [export]
    iterm        [export] [import]
    json         [export] [import]
    konsole      [export]
    linux        [export]
    mintty       [export]
    putty        [export]
    st           [export]
    termite      [export] [import]
    terminator   [export]
    terminalapp  [export] [import]
    text         [export]
    textmate     [export]
    xfce         [export]
    xresources   [export] [import]

## Behind the Scenes

TermColors is written using JavaScript.

It can run in nodejs and the browser, which is very useful for web apps. I've
consisdered rewriting it in Go a couple times, but I think having it able to
run in the browser is too useful to give up.

It uses the `dot` templating library, which is quite quick and simple to use.

Regular expressions are used to parse input when importing terminals.

