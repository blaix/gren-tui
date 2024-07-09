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
* [X] Use new task-based Stream, etc. to add guarantees (start with Cmd.batch usage where order is important)
* [X] Decouple view from update (just render like a game loop) to reduce complicated sequencing logic and fix rendering bugs
* [X] Pull ansi into separate package
* [X] Move examples under next/ (not bothering with busted v1)
* [X] Publish gren-array2d
* [X] Add arrow-key-movement example (game)
* [X] Remove Ansi from README example (it's a separate package now)
* [X] Replace vendored node/core packages after 6/24 release
* [X] == Release 2.0 ==
* [X] Add `Escape` variant to `Input`
* [ ] Add a `UI` helper: init with `env` and save in your model. `UI.toString` in your view
    * [ ] Work like elm-ui with row, col functions, attributes like backgroundColor, etc
    * [ ] Look at charm.sh libraries (esp. bubbles & lipgloss): https://github.com/charmbracelet/bubbletea?tab=readme-ov-file#libraries-we-use-with-bubble-tea
    * [ ] Look at the font stuff in this SO answer: https://stackoverflow.com/a/33206814
    * [ ] Look at wolfadex/elm-ansi for string terminal width
    * [X] Decide on module vs separate package (leaving in this package for now)
    * [ ] tests
    * [ ] Update README and examples to use UI
* [ ] animation example: rotating ascii art in center of screen
* [ ] Demos with [asciinema][2] or [freeze][3]
* [ ] == Release 3.0 ==
* [ ] Publish post or video making a dungeon crawler. Look at the UI of Robin's elm-warrior :)
* [ ] Try gren-tui for prettynice cli again (with load spinner widgets...?)
* [ ] Test an app that has a conditional subscription
* [ ] How to make log messages visible (Debug.log won't work with gren-tui views)? add file logging?
* [ ] How to have a nice way to read a whole line of input, even in raw mode?
* [ ] readline support?
* [ ] Cross platform considerations? (e.g. is `clearScreen` ok on win?)
* [ ] Built-in UI components (see [Bubbles][1] source code for reference):
    * [ ] Prompt
    * [ ] Choice
    * [ ] LoadingSpinner

[1]: https://github.com/charmbracelet/bubbles
[2]: https://docs.asciinema.org/getting-started/
[3]: https://github.com/charmbracelet/freeze
