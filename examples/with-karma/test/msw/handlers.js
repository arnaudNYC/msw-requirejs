define(function (require) {
  "use strict";

  var msw = require("msw-requirejs");
  var rest = msw.rest;

  return [
    rest.get("/user", function (req, res, ctx) {
      return res(
        ctx.status(200),
        ctx.json({
          username: "admin",
        })
      );
    }),
  ];
});
