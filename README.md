

# Brief introduction

This is common project for my Angular related hobby apps and libs in a multi-project fashion.

# Modules
## ngx-smart-ui
This is a demo library for common UI elements can be used by additional projects.
### Build
Run `ng build` to build the lib, since this is the default Angular project defined in `angular.json`.

### Storybook

Storybook is chosed as an interactive UI component showcase and documentation tool.
Run `npm run storybook` command to compile and run Storybook server locally. This will open `http://localhost:6006` when ready.

Note: All changes in the library triggers an auto-build in Storybook to reflect changes, so no cold restart required during development just a refresh in the browser.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Note: No headless browser has been configured yet (TODO).
