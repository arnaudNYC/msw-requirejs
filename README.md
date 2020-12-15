# msw-requirejs

A version of [msw](https://github.com/mswjs/msw) for [Require.js](https://requirejs.org/).

As of version 0.24.2, msw does not export a version suitable for Require.JS. The umd version of the package [meant to be used with a CDN](https://mswjs.io/docs/recipes/usage-with-cdn) does not work in the browser [as described here](https://github.com/mswjs/msw/issues/507). A pull request for an iife version [has been opened](https://github.com/mswjs/msw/pull/509) and while that would somewhat work by providing a global variable, it is not an AMD compatible package like Require.JS prefers.

This package is a simple wrapper around msw which re-exports the bundle in a UMD format that will work with Require.JS. There is no logic, just re-packaging. For msw help and assistance, visit https://mswjs.io/

Using msw with Karma+Require.js is a good use case for this package, as well as any application using Require.js.

## Usage

```javascript
define(function (require) {
  var msw = require("msw-requirejs");
  var rest = msw.rest;
  var setupWorker = msw.setupWorker;

  var handlers = [
    rest.get("/user", function (req, res, ctx) {
      return res(
        ctx.status(200),
        ctx.json({
          username: "admin",
        })
      );
    }),
  ];

  var worker = setupWorker.apply(void 0, handlers);
  var p = worker.start();

  function doFetch() {
    return fetch("/user")
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log("Data:", data);
      });
  }

  p.then(doFetch);
});
```

## Examples

Two examples are provided, a browser based application, and an application using karma, mocha and msw

### Browser based example

Run `npm run test` and open the console to see msw in action

### Karma, mocha, requirejs and msw

```bash
$ cd examples/with-karma
$ npm install
$ npm run test
```

Open the console, or click on the "Debug" button to see an example of mocking a fetch call in a requirejs application.
