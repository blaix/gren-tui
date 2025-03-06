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
    , all
    )

{-| Spinner variants.

These are _most_ of the spinners from
<https://github.com/sindresorhus/cli-spinners>

See demos at <https://jsfiddle.net/sindresorhus/2eLtsbey/embedded/result/>

@docs Variant, ` + Object.keys(spinners).sort().join(", ") + `, all
-}


------------------------------------------------------
------------------------------------------------------
-- THIS IS A GENERATED MODULE!
-- See Justfile and scripts/gen-spinner-variants.js
------------------------------------------------------
------------------------------------------------------


import Dict exposing (Dict)


{-| A spinner variant is just an array of strings (one string for each frame of the animation)
and an interval specifying the number of milliseconds before advancing a frame.

That means you aren't bound to the variants in this module.
You can create your own! Just pass a record like this to [Spinner.init](UI.Spinner#init).
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
{-| A Dict holding all spinner variants.
-}
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
