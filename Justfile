green := '\033[0;32m'
nc := '\033[0m' # No Color

example NAME:
  @just header "RUNNING EXAMPLE: {{NAME}}"
  cd examples/v4/{{NAME}} && gren make src/Main.gren && node app

examples:
  for example in `ls examples/v4 | grep -v README`; do just example $example || exit 1; done

test:
  cd tests/unit && gren make src/Main.gren && node app

header MSG:
  @echo -e "\n{{green}}{{MSG}}{{nc}}"

gen-spinner-variants:
  node scripts/gen-spinner-variants.js > src/UI/Spinner/Variant.gren

docs:
  npx gren-packages
