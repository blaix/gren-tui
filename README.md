# Gren TUI

Build terminal user interfaces with a Model/View/Update architecture and helpers to control the screen, cursor, and text.

Track state in your model, listen for user input to update that state, and render your UI as a string.
gren-tui will handle re-drawing only the lines you've output when your model changes.

Uses the purely functional, very pleasant [gren](https://gren-lang.org/) programming language.

## Example

```elm
module Main exposing (main)

import Ansi
import Init
import Node
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
                    Tui.KeyChar "q" -> Node.exit
                    _ -> Cmd.none
            }

view : Model -> String
view model =
    String.join ""
        [ "How high can I count? Let's see: "
        , String.fromInt model.ticks
        , Ansi.wrapColor Ansi.Yellow "\nPress q to quit."
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

Then create a `src/Main.gren` file like the one above, or
see the [examples/](https://github.com/blaix/gren-tui/tree/main/examples) and [api docs](https://packages.gren-lang.org/package/blaix/gren-tui) for help creating your own.
Then compile and run with:

```
gren make src/Main.gren
node app
```

