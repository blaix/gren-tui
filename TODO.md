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
* [X] Add Tui.exit that returns a task that undoes formatting and shows the cursor
* [X] Add UI module with elm-ui inspired row/col elements
* [X] Fix unit tests
* [X] Fix?: Compile failures return 0 status, making things hard to test
* [X] unit tests with gren-test
* [X] TODO comments
* [ ] Don't expose any custom types (e.g. Input variants). Use functions instead, to avoid breaking changes when adding new ones (like Escape).
    * [ ] Input module with Input.escape, Input.arrowUp, etc...
* [ ] defineProgram withOptions or similar for things like exitOnEscape, etc.?
* [ ] ^ related? some kind of Tick option for updating components (select, etc)?
* [ ] ^ see `Pages.Script.Spinner` `withStep` and `runSteps` functions and similar from elm-pages
* [ ] easy way for people to try to test/break UI and open issues (releast alpha?)
* [ ] Update CHANGELOG
* [ ] Overhaul the README for v3
    * [ ] UI module
    * [ ] "other packages" section not needed?
    * [ ] more?
* [ ] == Release 3.0 ==
* [ ] Start a branching strategy for major version upgrades that keeps main code and docs compatible with latest published version
* [ ] Update README and examples to use UI module
* [ ] Starter repo or project initializer (add `gren run` instead of publishing separate npm package?)
* [ ] Demos with [asciinema][2] or [freeze][3]
  * [ ] animation example: rotating ascii art in center of screen
* [ ] Publish post or video making a dungeon crawler. Look at the UI of Robin's elm-warrior :)
* [ ] Look into performance on paint example. Think it's input handling. See [[#performance-notes]]
* [ ] Take another pass at reviewing lipgloss and bubbles
    * [ ] Replace CharGrid with Table? https://github.com/charmbracelet/lipgloss?tab=readme-ov-file#rendering-tables
    * [ ] List or similar tracking selected item
    * [ ] Consider wiring effects/messages into elements (recreate classic counter example in terminal)
* [ ] More Attributes:
    * [ ] padding
    * [ ] margin
    * [ ] centered, centerX, centerY
    * [ ] alignRight, alignLeft, alignTop, alignBottom
* [ ] More borders (see lipgloss and https://en.wikipedia.org/wiki/Box-drawing_characters#Box_Drawing)
    * [ ] doubled
    * [ ] dotted
    * [ ] dashed
    * [ ] ascii (`+--+`)
    * [ ] custom borders
    * [ ] grid/table with cell borders
* [ ] borderLeft, Top, etc? (for dungeon walls?)
* [ ] More colors. 256 support?
* [ ] Built-in UI components (will require update calls, see [Bubbles][1] source code for reference):
    * [ ] Tabs (see lipgloss)
    * [ ] Prompt
    * [ ] Choice
    * [ ] LoadingSpinner
    * [ ] Animation
* [ ] Consider width, minWidth, maxWidth (what about wrapping, overflow?)
* [ ] Try gren-tui for prettynice cli again (with load spinner widgets...?)
* [ ] Test an app that has a conditional subscription
* [ ] How to make log messages visible (Debug.log won't work with gren-tui views)? add file logging?
* [ ] How to have a nice way to read a whole line of input, even in raw mode?
    * [ ] readline support?
* [ ] Can/should I clean up the background color "move over the closing character" logic?
   * [ ] Maybe use some sentinel characters to stand in for bg color until final rendering? https://www.unicode.org/faq/private_use.html
* [ ] Is this anything? https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter
* [ ] Ongoing: See https://github.com/blaix/gren-tui/issues

## Performance notes

Profile with: `node --inspect` then open `chrome://inspect`

Compare benchmarks by creating two small programs (or one program with command line flags) to exercise different implementations and compare with:
`hyperfine 'node app snippetA' 'node app snippetB'`

Things to try:

* [ ] buffer inputs, on each tick, compress sequentially-repeating inputs, then process
* [ ] don't check cursorReport every input?
* [ ] look for other places I'm doing heavy string/array interactions
* [ ] https://www.textualize.io/blog/7-things-ive-learned-building-a-modern-tui-framework/
* [ ] https://github.com/janjelinek/elm-performance-debugging/tree/master

[1]: https://github.com/charmbracelet/bubbles
[2]: https://docs.asciinema.org/getting-started/
[3]: https://github.com/charmbracelet/freeze
