define(function () {
  return {
    add: function (a, b) {
      return a + b;
    },
    fetchUser: function () {
      return fetch("/user").then(function (resp) {
        return resp.json();
      });
    },
  };
});
