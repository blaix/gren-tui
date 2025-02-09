# Gren TUI

Write purely functional, type-safe terminal apps using [The Elm Architecture](https://guide.elm-lang.org/architecture/).
Easily create complex, responsive UIs with an interface inspired by [elm-ui](https://package.elm-lang.org/packages/mdgriffith/elm-ui/latest/).
All in the very pleasant [Gren programming language](https://gren-lang.org/).

## Examples

![menu example](https://github.com/blaix/gren-tui/raw/main/media/menu-example.gif)

[source](https://github.com/blaix/gren-tui/blob/main/examples/v3/menu/src/Main.gren)

---

![progress bar example](https://github.com/blaix/gren-tui/raw/main/media/progress-bar-example.gif)

[source](https://github.com/blaix/gren-tui/blob/main/examples/v3/progress-bar/src/Main.gren)

---

![game example](https://github.com/blaix/gren-tui/raw/main/media/game-example.gif)

[source](https://github.com/blaix/gren-tui/blob/main/examples/v3/game/src/Main.gren)

---

You can find [all the example apps here](https://github.com/blaix/gren-tui/blob/main/examples/v3).

## Usage

If you haven't already, [install node](https://nodejs.org/en), [install gren](https://gren-lang.org/install),
and take a look at [the book](https://gren-lang.org/book/) if you want to get up to speed with the language.

Then create a gren node application:

```
mkdir myapp
cd myapp
gren init --platform=node
```

Install the `gren-tui` package:

```
gren package install blaix/gren-tui
```

Then create a `src/Main.gren` file. For a starting point, see:

* The example above.
* The [examples/](https://github.com/blaix/gren-tui/tree/main/examples) directory.

Then compile and run with:

```
gren make src/Main.gren
node app
```

## Now what?

Check out the [API docs](https://packages.gren-lang.org/package/blaix/gren-tui) and start writing your app!

Feel free to reach out if you need help, or to show off what you're building.
I'd love to see it!
See below for contact info.

## Working on this package

This project uses [devbox](https://www.jetify.com/devbox).
If you install devbox and start a `devbox shell`
(or set up [direnv](https://www.jetify.com/docs/devbox/ide_configuration/direnv/) - highly recommended!),
you will have the correct version of `gren` on your path,
you can run tests with `just test`,
and you can run examples with `just [example-name]`.

If you don't want to use devbox,
see `devbox.json` for a list of dependencies if you will need to install.

## Getting Help or Updates

If you have questions, suggestions, find a bug, or want to follow updates to the package, you can:

* Follow me on mastodon at [@blaix@hachyderm.io](https://hachyderm.io/@blaix).
* Join the [`#gren-tui`](https://discord.gg/etMAVy2YKf) channel on the gren discord.
* File an [issue](https://github.com/blaix/gren-tui/issues) on github.
