# TODO
 
* [X] Clear and redraw screen on update
* [X] onKeyPress event
* [X] Only clear printed lines by default
* [X] More robust inputs (arrow keys, etc)
* [X] Exit on Ctrl-C
* [X] Docs!
* [X] Fonts, Bold, etc.
* [X] Exit on ctrl-c
* [X] Handle TODO comments in codebase
* [X] == release 1.0 ==
* [X] Fix bugs in the 1.0 release: https://github.com/blaix/gren-tui/issues?q=is%3Aissue+is%3Aopen+label%3Abug
* [ ] Use new task-based Stream, etc. to add guarantees (start with Cmd.batch usage where order is important)
* [ ] Change onInput to a Maybe. Let's apps exit if they aren't listening for anything.
 * [ ] What does this mean for raw mode...?
* [ ] How to make log messages visible (Debug.log won't work with gren-tui views)? add file logging?
* [ ] How to have a nice way to read a whole line of input, even in raw mode?
* [ ] readline support?
* [ ] `Tui.UI.fullscreen`
* [ ] Cross platform considerations? (e.g. is `clearScreen` ok on win?)
* [ ] Built-in UI components (see [Bubbles][1] source code for reference):
    * [ ] Prompt
    * [ ] Choice
    * [ ] LoadingSpinner
* [ ] [asciinema][2] demos

[1]: https://github.com/charmbracelet/bubbles
[2]: https://docs.asciinema.org/getting-started/
