(function (global, $) {
  var MyFunc = function (firstName, lastName, language) {
    return new MyFunc.init(firstName, lastName, language);
  };

  MyFunc.prototype = {};

  MyFunc.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";
  };

  MyFunc.init.prototype = MyFunc.prototype;

  global.MyFunc = global.M$ = MyFunc;

})(window, jQuery);
