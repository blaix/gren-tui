# Gren TUI

Build terminal user interfaces and games using [The Elm Architecture](https://guide.elm-lang.org/architecture/) (Model/View/Update)

Track state in your model, listen for user input to update that state, and render your UI as a string representation of the current state.
gren-tui will handle re-drawing only the lines you've output when your model changes.

Uses the purely functional, very pleasant [gren](https://gren-lang.org/) programming language.

## Example

```elm
module Main exposing (main)

import Init
import Node
import Task
import Time
import Tui

main : Tui.Program Model Msg
main =
    Tui.defineProgram
        { init = init
        , update = update
        , view = view
        , subscriptions = subscriptions
        , onInput = GotInput
        }

type alias Model =
    { ticks : Int }

init : Node.Environment -> Init.Task { model : Model, command : Cmd Msg }
init env =
    Node.startProgram
        { model = { ticks = 0 }
        , command = Cmd.none
        }

type Msg
    = Tick Time.Posix
    | GotInput Tui.Input

update : Msg -> Model -> { model : Model, command : Cmd Msg }
update msg model =
    case msg of
        Tick _ ->
            { model = { model | ticks = model.ticks + 1 }
            , command = Cmd.none
            }

        GotInput input ->
            { model = model
            , command = 
                case input of
                    Tui.KeyChar "q" -> Task.execute Node.exit
                    _ -> Cmd.none
            }

view : Model -> String
view model =
    String.join ""
        [ "How high can I count? Let's see: "
        , String.fromInt model.ticks
        , "\nPress q to quit."
        ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Time.every 1000 Tick
```

## Usage

If you haven't already, [install gren](https://gren-lang.org/install) and create a gren node application:

```
mkdir myapp
cd myapp
gren init --platform=node
```

Install the `gren-tui` package:

```
gren package install blaix/gren-tui
```

Then create a `src/Main.gren` file like the one above,
or see the [examples/](https://github.com/blaix/gren-tui/tree/main/examples)
and [api docs](https://packages.gren-lang.org/package/blaix/gren-tui) for help creating your own.
Then compile and run with:

```
gren make src/Main.gren
node app
```

## Other helpful packages

These packages are useful in a gren-tui application:

* [gren-ansi](https://packages.gren-lang.org/package/blaix/gren-ansi/version/latest/overview) for controlling the cursor and text-styling
* [gren-array2d](https://packages.gren-lang.org/package/blaix/gren-array2d/version/latest/overview) to manipulate your view as a 2-D grid.

See [the game example](https://github.com/blaix/gren-tui/tree/main/examples/v2/game) for an app that uses both of these.
