# Migration from 0.4.5


## Split into packages
From 1.x, we will split original `markdown-translator` into following packages:
- @markdown-translator/core which you can directly use as a module
- @markdown-translator/cli extact CLI implemention

## Move all the settings to the CLI options
Previously we use addition `config.json` with `set`/`get` command to store tokens. Now you can specify all settings through CLI options

## Add Translate Service Implemention based on ChatGPT
Translation by ChatGPT is more context sensitive and is used by default.

## `@markdown-translator/core` Accept text instead of filepath
It seems useless and cause chaos in codes to accept filepath as params in `@markdown-translator/core`

## No longer support use as a binary
Redundant since it will bundle additional node engine
