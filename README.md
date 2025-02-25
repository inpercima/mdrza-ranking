# MdRzA Ranking

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE.md)
[![Node CI/CD](https://github.com/inpercima/mdrza-ranking/actions/workflows/ci_cd.yml/badge.svg)](https://github.com/inpercima/mdrza-ranking/actions/workflows/ci_cd.yml)

Shows the ranking of teams for 'MdRzA - Mit dem Rad zur Arbeit'.
Users can create a link to share or use himself.

This app is online under [mdrza-ranking.inpercima.net](http://mdrza-ranking.inpercima.net).

This project was generated with [swaaplate](https://github.com/inpercima/swaaplate) version 2.5.3.

## Prerequisites

### Angular CLI

* `@angular/cli 19.1.2` or higher

### Node, npm or pnpm

* `node 22.14.0` or higher in combination with
  * `npm 10.9.2` or higher or
  * `pnpm 9.14.2` or higher, used in this repository

## Getting started

```bash
# clone project
git clone https://github.com/inpercima/mdrza-ranking/
cd mdrza-ranking

# install tools and frontend dependencies
pnpm install
```

Create environment files for `development mode` and `production mode`.

```bash
cp src/environments/environment.ts src/environments/environment.dev.ts
cp src/environments/environment.ts src/environments/environment.prod.ts
```

**Note**: These files will not be under version control but listed in .gitignore.

## Usage

### Recommendation

It is recommanded to use a server to get full access of all angular.
For the other options your app should run on a server which you like.

### Run in development mode

```bash
# build, reachable on http://localhost/app/path/to/dist/
pnpm build:dev

# build and starts a server, rebuild after changes, reachable on http://localhost:4200/
pnpm start
```

### Package

```bash
# build in production mode, compressed
pnpm build:prod
```

### Tests

```bash
# test
ng test

# e2e
ng e2e
```

## Configuration

### General

All options have to been set in the environment files but some of them do not need to be changed.
All defaults refer to the environment file (`environment.ts`), they are prepared in `development mode` (`environment.dev.ts`).
Change for `production mode` the option `production` to `true`.

### Table of contents

* [api](#api)
* [appname](#appname)
* [defaultRoute](#defaultroute)
* [production](#production)
* [theme](#theme)

### `api`

Defines the URL to the backend.

* default: `https://www.mit-dem-rad-zur-arbeit.de/api/teamranking.php?trid=98`
* type: `string`

### `appname`

Applicationwide title of the app, displayed in title and toolbar.

* default: `MdRzA Ranking`
* type: `string`

### `defaultRoute`

The default route and the route to be redirected after a login if no route is stored or if a route does not exist.

* default: `dashboard`
* type: `string`

### `production`

Defines whether the app is in production or not.

* default: `false`
* type: `boolean`
* values: `true`/`false`

### `theme`

Name of a pre-build-theme or a custom theme.

* default: `rose-red`
* type: `string`
* values: `rose-red`/`azure-blue`/`magenta-violet`/`cyan-orange`/`custom`

To modify the custom theme just edit the colors and themes in `themes.scss`.
