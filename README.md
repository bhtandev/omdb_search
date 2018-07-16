# OMDB Search

Simple React OMDB Search client. Powered by Redux.

## Details

* ES6, React, Redux, Webpack, ava, enzyme.
* Modern styling using styled-components.
* Results show up in responsive grid.
* Search result pagination achieved from infinite scrolling. Further fetches executed as user scrolls down further.
* Simple input validation. At least 2 characters required.
* Backend API - http://omdbapi.com/ .
* Mobile friendly.
* Test with Chrome only (Version 64.0.3282.167)


## Installing

```
npm install
```

## Running the app 

```
npm start
```

## Running the tests

You may need to install ava globally. 

```
npm install --global ava
```

To run,

```
npm test
```

## DEMO

[Link](https://bhtandev.github.io/omdb_search/)



## Further improvements

* Autocomplete search input ( must be throttled or debounced for smoother use )
* Maybe Search bar to start in the center of page when first load. After search it will move up via some nice animation.
* More unit tests.


## Authors

* **Boon Hui Tan**


