## Next

* Add `Escape` variant to `Tui.Input`

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
