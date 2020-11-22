# MdRzA Ranking

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Shows the ranking of teams for 'MdRzA - Mit dem Rad zur Arbeit'.

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.1.0.

## Prerequisites

### Angular CLI

* `angular-cli 11.0.1` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Node, npm or yarn

* `node 12.19.0` or higher in combination with
  * `npm 6.14.8` or higher or
  * `yarn 1.22.5` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library             | current version | wanted version | reason |
| ------------------- | --------------- | -------------- | ------ |
| copy-webpack-plugin | 4.6.0           | 6.3.2          | copy-webpack-plugin@6.3.2" has unmet peer dependency "webpack@^4.0.0 || ^5.0.0" |
| typescript          | 4.0.5           | 4.1.2          | @angular-devkit/build-angular@0.1100.2" has incorrect peer dependency "typescript@~4.0.0" |
| zone.js             | 0.10.3          | 0.11.3         | @angular/core@11.0.2" has incorrect peer dependency "zone.js@~0.10.3" |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/mdrza-ranking/
cd mdrza-ranking
```

## Usage

### Modules

For the client check [mdrza-ranking - client](./client).

For the server check [mdrza-ranking - server](./server).
