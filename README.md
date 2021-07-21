# MdRzA Ranking

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)

Shows the ranking of teams for 'MdRzA - Mit dem Rad zur Arbeit'.
Users can create a link to share or use himself.

This app is online under [mdrza-ranking.inpercima.net](http://mdrza-ranking.inpercima.net).

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.3.1.

## Prerequisites

### Angular CLI

* `angular-cli 12.1.1` or higher

### Apache and php

* `Apache 2.4` or higher
* `php 7.3` or higher

### Node, npm or yarn

* `node 14.16.1` or higher in combination with
  * `npm 6.14.12` or higher or
  * `yarn 1.22.5` or higher, used in this repository

## Dependency check

Some libraries could not be updated b/c of peer dependencies or knowing issues.

| library    | current version | last version | reason |
| ---------- | --------------- | ------------ | ------ |
| rxjs       | 6.6.0           | 7.2.0        | "@angular/common@12.1.1" has incorrect peer dependency "rxjs@^6.5.3" |
| copy-webpack-plugin | 9.0.1  | 9.0.1        | "copy-webpack-plugin@9.0.1" has unmet peer dependency "webpack@^5.1.0 |

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/mdrza-ranking/
cd mdrza-ranking
```

## Usage

### Modules

For the client check [mdrza-ranking - client](./client).

For the server check [mdrza-ranking - api](./api).
