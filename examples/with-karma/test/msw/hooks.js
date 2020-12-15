define(["./browser"], function (worker) {
  "use strict";
  return worker.start({
    quiet: true,
  });
});
