## Next

* Add `escape`, `prefix`, `moveTo`, and `getCursorReport` to `Ansi` module.
* Add `CursorReport` variant to `Tui.Input`.
* Rendering overhaul:
  * Redrawing the screen now uses initial cursor position and accounts for scrolling. Fixes https://github.com/blaix/gren-tui/issues/1
  * Decouple rendering from update. Render at 60 fps like a game loop instead.

## 1.0.0 (2024-03-25)

* Initial release
