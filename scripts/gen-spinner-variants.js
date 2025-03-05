async function main() {
    const response = await fetch('https://raw.githubusercontent.com/sindresorhus/cli-spinners/refs/heads/main/spinners.json');
    const spinners = await response.json();
    //console.log(spinners);
    
    // Remove some spinners that are giving me trouble
    delete spinners.arrow2;
    delete spinners.line2;
    delete spinners.dwarfFortress;
    delete spinners.weather;
    
    console.log(`module UI.Spinner.Variant exposing
    ( Variant
    , ` + Object.keys(spinners).sort().join("\n    , ") + `
    )

{-| These are most of the spinners from
https://github.com/sindresorhus/cli-spinners

See demos at https://jsfiddle.net/sindresorhus/2eLtsbey/embedded/result/

@docs Variant, ` + Object.keys(spinners).sort().join(", ") + `
-}


------------------------------------------------------
------------------------------------------------------
-- THIS IS A GENERATED MODULE!
-- See Justfile and scripts/gen-spinner-variants.js
------------------------------------------------------
------------------------------------------------------


import Dict exposing (Dict)


{-| Type alias for a spinner variant.

\`frames\` is an array of strings to rotate through for the animation.
\`interval\` is the number of milliseconds before advancing to the next frame.
-}
type alias Variant =
    { interval : Int
    , frames : Array String
    }
`);

    for (name in spinners) {
        //console.log(spinners[name]);
        console.log(`
{-|-}
${name} : Variant
${name} =
    { interval = ${spinners[name]['interval']}
    , frames = ${toGrenArray(spinners[name]['frames'])}
    }
`);
    }
    
    console.log(`
all : Dict String Variant
all =
    Dict.empty`);

    for (name in spinners) {
        console.log(`       |> Dict.set "${name}" ${name}`);
    }

    console.log("");
}

function toGrenArray(jsArray) {
    const quoted = jsArray
        .map((a) => a.replace("\\", "\\\\"))
        .map((a) => `"${a}"`);
    return ("[" + quoted.join(",") + "]");
}

main();
