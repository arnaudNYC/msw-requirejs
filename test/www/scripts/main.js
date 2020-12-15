requirejs(["./msw-requirejs"], function (MockServiceWorker) {
  var rest = MockServiceWorker.rest;
  var setupWorker = MockServiceWorker.setupWorker;

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
