## Next

* Update to Gren 0.5
* New `Input` variants: `Backspace` and `Delete`
* New `UI.TextField` component
* Crash with error message if not able to start up properly
* Minor bugfixes

## 3.0.2 (2024-10-05)

* Doc and example updates

## 3.0.0 (2024-10-04)

* Update to gren 0.4.4
* Complete rendering refactor to reduce screen flicker and handle terminal resizes.
* Your `init` now receives `Tui.Environment` which adds terminal column, row, and color support.
* Add `UI` module. Your `view` returns a `UI.Element` instead of `String`
* Add `Escape` variant to `Tui.Input`
* Add `Tui.exit`, `Tui.exitWithCode`, and `Tui.hideCursor`

## 2.0.1 (2024-07-04)

* Doc fixes

## 2.0.0 (2024-07-04)

* Update to gren 0.4 and latest core and node packages
* Move `Ansi` to a [separate package](https://packages.gren-lang.org/package/blaix/gren-ansi/version/latest/overview)
* Complete rendering overhaul
  * Redrawing the screen now uses initial cursor position and accounts for scrolling. Fixes https://github.com/blaix/gren-tui/issues/1
  * Decouple rendering from update. Render at 60 fps like a game loop instead.

## 1.0.0 (2024-03-25)

* Initial release
