# TODO
 
* [X] Clear and redraw screen on update
* [X] onKeyPress event
* [X] Only clear printed lines by default
* [o] How to show/hide cursor automatically?:
  * [X] Add escape sequences
  * [ ] How to send the "show" sequence on exit?
* [ ] `Tui.UI.fullscreen`
* [ ] Exit on ctrl-c
* [ ] Background on ctrl-z
* [ ] Other signals to handle automatically?
* [ ] Cross platform considerations? (e.g. is `clearScreen` ok on win?)
* [ ] Handle TODO comments in codebase
* [ ] Built-in UI components (see [Bubbles][1] source code for reference):
    * [ ] Prompt
    * [ ] Choice
    * [ ] LoadingSpinner
* [ ] [asciinema][2] demos

[1]: https://github.com/charmbracelet/bubbles
[2]: https://docs.asciinema.org/getting-started/

# Escape Codes
 
* `"\u{001b}[F"`  -– move cursor to the beginning of the previous line
* `"\u{001b}[A"`  -– move cursor up one line
* `"\u{001b}[H"`  -- move cursor to home
* `"\u{001b}[2J"` -- clear screen

https://en.wikipedia.org/wiki/ANSI_escape_code
