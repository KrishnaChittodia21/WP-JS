(function (global, $) {
  var MyFunc = function (firstName, lastName, language) {
    return new MyFunc.init(firstName, lastName, language);
  };

  var supportedLangs = ["en", "es"];

  var greeting = {
    en: "Hello",
    es: "Hola",
  };

  var formalGreeting = {
    en: "Greetings",
    es: "Saludos",
  };

  var logMessages = {
    en: "logged in",
    es: "Indicio sesion",
  };

  MyFunc.prototype = {
    fullName: function () {
      return this.firstName + "" + this.lastName;
    },
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    greetings: function () {
      return (
        greeting[this.language] + " " + this.firstName + " " + this.lastName
      );
    },
    formalGreetings: function () {
      return (
        formalGreeting[this.language] +
        " " +
        this.firstName +
        " " +
        this.lastName
      );
    },
    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greetings();
      }
      if (console) {
        console.log(msg);
      }
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ":" + this.fullName());
      }
      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      return this;
    },
    HTMLGreetings: function (selector, formal) {
      if (!$) {
        throw "JQuery is not loaded";
      }
      if (!selector) {
        throw "Missing jQuery Selector";
      }
      var msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greetings();
      }
      $(selector).html(msg);
      return this;
    },
  };

  MyFunc.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";

    self.validate();
  };

  MyFunc.init.prototype = MyFunc.prototype;

  global.MyFunc = global.M$ = MyFunc;
})(window, jQuery);
