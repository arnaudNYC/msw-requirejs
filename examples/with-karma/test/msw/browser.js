define(function (require) {
  "use strict";

  var msw = require("msw-requirejs");
  var setupWorker = msw.setupWorker;

  var handlers = require("./handlers");

  return setupWorker.apply(void 0, handlers);
});
