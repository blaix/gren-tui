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
* [O] Add a `UI` helper: init with `env` and save in your model. `UI.toString` in your view
    * [X] Work like elm-ui with row, col functions, attributes like backgroundColor, etc
    * [X] Look at charm.sh libraries (esp. bubbles & lipgloss): https://github.com/charmbracelet/bubbletea?tab=readme-ov-file#libraries-we-use-with-bubble-tea
    * [X] Look at wolfadex/elm-ansi for string terminal width
    * [X] Decide on module vs separate package (leaving in this package for now)
    * [X] Merge ui branch
    * [X] Release updates to gren-ansi
    * [X] Emojis?
    * [X] Point ui example at latest published gren-ansi
    * [X] Add more Attribute functions 
    * [X] Fix: newlines in strings between columns breaks layout
    * [X] Fix: underlines and strikethrough weirdness (removed for now)
    * [X] bordered boxes
    * [X] Fix screen flicker (overwrite, don't clear)
    * [X] Fix: responsiveness of paint example
    * [X] test UI.grid nested with rows/cols/bordered
    * [X] Clear screen if resized smaller than view width
    * [ ] ^ Bug: chopping off the "end background color" sequence
    * [ ] ^ Fix: Refactor to use an ansi parser...
        * [ ] Port https://github.com/wolfadex/elm-ansi/blob/main/src/Ansi/Parser.elm
        * [ ] Update my string manipulations to use parser instead
    * [ ] tests
    * [ ] docs
* [ ] Don't expose any custom types (e.g. Input variants). Use functions instead, to avoid breaking changes when adding new ones (like Escape).
    * [ ] Input module with Input.escape, Input.arrowUp, etc...
* [ ] Test in different terminals and on windows and linux
* [ ] easy way for people to try to test/break UI and open issues
* [ ] TODO comments
* [ ] animation example: rotating ascii art in center of screen
* [ ] Should I support moving the cursor with ansi? currently can break things (e.g. see missing bottom lines on text-styling example)
    * [ ] Either fix text-styling example or modify it and document the issue
* [ ] == Release 3.0 ==
* [ ] Update README and examples to use UI module
* [ ] Starter repo or project initializer (add `gren run` instead of publishing separate npm package?)
* [ ] Demos with [asciinema][2] or [freeze][3]
* [ ] Publish post or video making a dungeon crawler. Look at the UI of Robin's elm-warrior :)
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

## Performance notes

Profile with: `node --inspect` then open `chrome://inspect`

Things to try:

* [ ] buffer inputs, on each tick, compress sequentially-repeating inputs, then process
* [ ] don't check cursorReport every input?
* [ ] look for other places I'm doing heavy string/array interactions
* [ ] https://www.textualize.io/blog/7-things-ive-learned-building-a-modern-tui-framework/

[1]: https://github.com/charmbracelet/bubbles
[2]: https://docs.asciinema.org/getting-started/
[3]: https://github.com/charmbracelet/freeze
