define(function (require) {
  var sut = require("src/index");

  describe("#index", function () {
    describe(".add", function () {
      it("should add two numbers", function () {
        expect(sut.add(1, 1)).to.eq(2);
      });
    });
    describe(".fetchUsers", () => {
      it("should fetch a user", function () {
        return sut.fetchUser().then(function (user) {
          expect(user).to.deep.eq({ username: "admin" });
        });
      });
    });
  });
});
