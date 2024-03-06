# TODO
 
* [X] Clear and redraw screen on update
* [X] onKeyPress event
* [ ] Only clear printed lines by default
  * Given a view that is N lines long:
    * Use [[#Escape Codes]] to move cursor up N lines
    * Repeat N times:
      * Use carriage return to move cursor to beginning of line
      * Print space Screen.width times, followed by a newline
    * Move cursor up N lines again
    * Print new view
* [ ] Optionally clear whole screen:
  * `"My view" |> Tui.UI.fullscreen`
  * ^ prefixes with [[#Escape Codes]] to clear + move home
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
