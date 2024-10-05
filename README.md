# Gren TUI

Write purely functional, type-safe terminal apps using [The Elm Architecture](https://guide.elm-lang.org/architecture/).
Easily create complex, responsive UIs with an interface inspired by [elm-ui](https://package.elm-lang.org/packages/mdgriffith/elm-ui/latest/).
All in the very pleasant [Gren programming language](https://gren-lang.org/).

## Example

A full program showing a running clock with a border in the terminal:

```elm
module Main exposing (main)


import Init
import Node
import Stream exposing (Stream)
import Task
import Time
import Tui
import UI
import UI.Border


main : Tui.Program Model Msg
main =
    Tui.defineProgram
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        , onInput = GotInput
        }


-- MODEL


type alias Model =
    { time : Time.Posix
    , stdout : Stream
    }


init : Tui.Environment -> Init.Task { model : Model, command : Cmd Msg }
init env =
    Node.startProgram
        { model = 
            { time = Time.millisToPosix 0
            , stdout = env.stdout
            }
        , command =
            Tui.hideCursor env.stdout
                |> Task.execute
        }


-- VIEW


view : Model -> UI.Element
view model =
    let
        hour = String.fromInt (Time.toHour Time.utc model.time)
        minute = String.fromInt (Time.toMinute Time.utc model.time)
        second = String.fromInt (Time.toSecond Time.utc model.time)
    in
    UI.bordered [] UI.Border.rounded <|
        UI.text [] (hour ++ ":" ++ minute ++ ":" ++ second)


-- UPDATE


type Msg
    = Tick Time.Posix
    | GotInput Tui.Input


update : Msg -> Model -> { model : Model, command : Cmd Msg }
update msg model =
    case msg of
        Tick time ->
            { model = { model | time = time }
            , command = Cmd.none
            }

        GotInput input ->
            case input of
                Tui.Escape ->
                    { model = model
                    , command = 
                        Tui.exit model.stdout
                            |> Task.execute
                    }

                _ ->
                    { model = model
                    , command = Cmd.none
                    }


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 1000 Tick
```

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
* The [API docs](https://packages.gren-lang.org/package/blaix/gren-tui).

Then compile and run with:

```
gren make src/Main.gren
node app
```

## Getting Help or Updates

If you have questions, suggestions, find a bug, or want to follow updates to the package, you can:

* Follow me on mastodon at [@blaix@hachyderm.io](https://hachyderm.io/@blaix).
* Join the [`#gren-tui`](https://discord.gg/etMAVy2YKf) channel on the gren discord.
* File an [issue](https://github.com/blaix/gren-tui/issues) on github.
