green := '\033[0;32m'
nc := '\033[0m' # No Color

example NAME:
  @just header "RUNNING EXAMPLE: {{NAME}}"
  cd examples/{{NAME}} && gren make src/Main.gren && node app

examples:
  for example in `ls examples`; do just example $example; done

header MSG:
  @echo -e "\n{{green}}{{MSG}}{{nc}}"
