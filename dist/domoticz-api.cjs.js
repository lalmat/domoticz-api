'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function b64encode(data) {
  return typeof window === 'undefined' ? b64encodeNode : b64encodeBrowser(data);
}
function b64encodeBrowser(data) {
  return btoa(data);
}
function b64encodeNode(data) {
  Buffer.from(data, 'base64');
}

var DomoticzApiProvider = /*#__PURE__*/function () {
  function DomoticzApiProvider(options) {
    _classCallCheck(this, DomoticzApiProvider);
    _defineProperty(this, "hostname", '');
    _defineProperty(this, "username", '');
    _defineProperty(this, "password", '');
    _defineProperty(this, "useSSL", void 0);
    _defineProperty(this, "port", void 0);
    _defineProperty(this, "endpoint", '');
    this.hostname = options.hostname;
    this.username = options.username != null ? options.username : '';
    this.password = options.password != null ? options.password : '';
    this.useSSL = options.useSSL != null ? options.useSSL : false;
    this.port = options.port != null ? options.port : 80;
    this.endpoint = this.url('json.htm');
  }
  _createClass(DomoticzApiProvider, [{
    key: "url",
    value: function url(uri) {
      var proto = "http".concat(this.useSSL === true ? 's' : '', "://");
      var host = this.hostname;
      var port = this.port > 0 ? this.port : this.useSSL === true ? 443 : 80;
      var username = this.username !== undefined ? b64encode(this.username) : '';
      var password = this.password !== undefined ? b64encode(this.password) : '';
      var credentials = "?username=".concat(username.toString(), "&password=").concat(password.toString());
      return "".concat(proto).concat(host, ":").concat(port.toString(), "/").concat(uri).concat(credentials);
    }

    // DOMOTICZ NATIVE CALLS
  }, {
    key: "cameras",
    value: function () {
      var _cameras = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.domoticz({
                  type: 'cameras'
                });
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function cameras() {
        return _cameras.apply(this, arguments);
      }
      return cameras;
    }()
  }, {
    key: "command",
    value: function () {
      var _command = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.domoticz(_objectSpread2({
                  type: 'command'
                }, data));
              case 2:
                return _context2.abrupt("return", _context2.sent);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function command(_x) {
        return _command.apply(this, arguments);
      }
      return command;
    }()
  }, {
    key: "devices",
    value: function () {
      var _devices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.domoticz(_objectSpread2({
                  type: 'devices'
                }, data));
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function devices(_x2) {
        return _devices.apply(this, arguments);
      }
      return devices;
    }()
  }, {
    key: "events",
    value: function () {
      var _events = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.domoticz(_objectSpread2({
                  type: 'events'
                }, data));
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function events(_x3) {
        return _events.apply(this, arguments);
      }
      return events;
    }()
  }, {
    key: "notifications",
    value: function () {
      var _notifications = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.domoticz(_objectSpread2({
                  type: 'notifications'
                }, data));
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function notifications(_x4) {
        return _notifications.apply(this, arguments);
      }
      return notifications;
    }()
  }, {
    key: "scenes",
    value: function () {
      var _scenes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.domoticz({
                  type: 'scenes'
                });
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function scenes() {
        return _scenes.apply(this, arguments);
      }
      return scenes;
    }()
  }, {
    key: "setUsed",
    value: function () {
      var _setUsed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(data) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.domoticz(_objectSpread2({
                  type: 'setUsed'
                }, data));
              case 2:
                return _context7.abrupt("return", _context7.sent);
              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function setUsed(_x5) {
        return _setUsed.apply(this, arguments);
      }
      return setUsed;
    }()
  }, {
    key: "checkCredentials",
    value: function () {
      var _checkCredentials = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.__generic('GET', "".concat(this.url('json.htm'), "?api-call"));
              case 2:
                return _context8.abrupt("return", _context8.sent);
              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function checkCredentials() {
        return _checkCredentials.apply(this, arguments);
      }
      return checkCredentials;
    }() // TOOLING
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(uri) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.__generic('GET', this.url("".concat(uri)));
              case 2:
                return _context9.abrupt("return", _context9.sent);
              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function get(_x6) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "domoticz",
    value: function () {
      var _domoticz = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.__generic('GET', this.endpoint.toString(), data);
              case 2:
                return _context10.abrupt("return", _context10.sent);
              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function domoticz(_x7) {
        return _domoticz.apply(this, arguments);
      }
      return domoticz;
    }() // Want to write an new HTTP manager (other than fetch) just create a new
    // DomoticzApiProvider[foobar].js and implement only this method.
    // @ts-expect-error:
  }, {
    key: "__generic",
    value: function () {
      var _generic = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(method, endpoint, data, content) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return new Promise(function () {
                  return null;
                });
              case 2:
                return _context11.abrupt("return", _context11.sent);
              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));
      function __generic(_x8, _x9, _x10, _x11) {
        return _generic.apply(this, arguments);
      }
      return __generic;
    }()
  }]);
  return DomoticzApiProvider;
}();

var DomoticzApiProviderFetch = /*#__PURE__*/function (_DomoticzApiProvider) {
  _inherits(DomoticzApiProviderFetch, _DomoticzApiProvider);
  var _super = _createSuper(DomoticzApiProviderFetch);
  function DomoticzApiProviderFetch() {
    _classCallCheck(this, DomoticzApiProviderFetch);
    return _super.apply(this, arguments);
  }
  _createClass(DomoticzApiProviderFetch, [{
    key: "__generic",
    value: function () {
      var _generic = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(method, endpoint, data, content) {
        var uriParams, options, url, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uriParams = data !== undefined ? dataToURI(data) : '';
                options = {
                  method: method,
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: content !== undefined ? JSON.stringify(content) : null
                };
                url = "".concat(endpoint).concat(uriParams);
                _context.next = 5;
                return fetch(url, options);
              case 5:
                result = _context.sent;
                _context.next = 8;
                return result.json();
              case 8:
                return _context.abrupt("return", _context.sent);
              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function __generic(_x, _x2, _x3, _x4) {
        return _generic.apply(this, arguments);
      }
      return __generic;
    }()
  }]);
  return DomoticzApiProviderFetch;
}(DomoticzApiProvider);
function dataToURI(data) {
  return Object.entries(data).reduce(function (uri, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    var valueStr = castToString(value);
    return "".concat(uri, "&").concat(encodeURI(key), "=").concat(encodeURI(valueStr));
  }, '');
}
function castToString(value) {
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value ? 'true' : 'false';
  if (typeof value === 'number') return '' + value.toString();
  return '';
}

exports.DOMOTICZ_TIMER_TYPE = void 0;
(function (DOMOTICZ_TIMER_TYPE) {
  DOMOTICZ_TIMER_TYPE[DOMOTICZ_TIMER_TYPE["BEFORE_SUNRISE"] = 0] = "BEFORE_SUNRISE";
  DOMOTICZ_TIMER_TYPE[DOMOTICZ_TIMER_TYPE["AFTER_SUNRISE"] = 1] = "AFTER_SUNRISE";
  DOMOTICZ_TIMER_TYPE[DOMOTICZ_TIMER_TYPE["ON_TIME"] = 2] = "ON_TIME";
  DOMOTICZ_TIMER_TYPE[DOMOTICZ_TIMER_TYPE["BEFORE_SUNSET"] = 3] = "BEFORE_SUNSET";
  DOMOTICZ_TIMER_TYPE[DOMOTICZ_TIMER_TYPE["AFTER_SUNSET"] = 4] = "AFTER_SUNSET";
  DOMOTICZ_TIMER_TYPE[DOMOTICZ_TIMER_TYPE["FIXED_DATETIME"] = 5] = "FIXED_DATETIME";
})(exports.DOMOTICZ_TIMER_TYPE || (exports.DOMOTICZ_TIMER_TYPE = {}));

exports.DOMOTICZ_SWITCHCMD = void 0;
(function (DOMOTICZ_SWITCHCMD) {
  DOMOTICZ_SWITCHCMD["ON"] = "On";
  DOMOTICZ_SWITCHCMD["OFF"] = "Off";
  DOMOTICZ_SWITCHCMD["TOGGLE"] = "Toggle";
  DOMOTICZ_SWITCHCMD["STOP"] = "Stop";
  DOMOTICZ_SWITCHCMD["OPEN"] = "Open";
  DOMOTICZ_SWITCHCMD["CLOSE"] = "Close";
  DOMOTICZ_SWITCHCMD["SET_LEVEL"] = "Set Level";
})(exports.DOMOTICZ_SWITCHCMD || (exports.DOMOTICZ_SWITCHCMD = {}));

exports.DOMOTICZ_SUBTYPE = void 0;
(function (DOMOTICZ_SUBTYPE) {
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["ONOFF"] = 0] = "ONOFF";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["DOORBELL"] = 1] = "DOORBELL";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["CONTACT"] = 2] = "CONTACT";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["BLINDS"] = 3] = "BLINDS";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["X10_SIREN"] = 4] = "X10_SIREN";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["SMOKE_DETECTOR"] = 5] = "SMOKE_DETECTOR";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["BLINDS_INVERTED"] = 6] = "BLINDS_INVERTED";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["DIMMER"] = 7] = "DIMMER";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["MOTION_SENSOR"] = 8] = "MOTION_SENSOR";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["PUSH_ON_BUTTON"] = 9] = "PUSH_ON_BUTTON";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["PUSH_OFF_BUTTON"] = 10] = "PUSH_OFF_BUTTON";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["DOOR_CONTACT"] = 11] = "DOOR_CONTACT";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["DUSK_SENSOR"] = 12] = "DUSK_SENSOR";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["BLINDS_PERCENTAGE"] = 13] = "BLINDS_PERCENTAGE";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["VENETIAN_BLINDS_US"] = 14] = "VENETIAN_BLINDS_US";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["VENETIAN_BLINDS_EU"] = 15] = "VENETIAN_BLINDS_EU";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["BLINDS_PERCENTAGE_INVERTED"] = 16] = "BLINDS_PERCENTAGE_INVERTED";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["MEDIA_PLAYER"] = 17] = "MEDIA_PLAYER";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["SELECTOR"] = 18] = "SELECTOR";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["DOOR_LOCK"] = 19] = "DOOR_LOCK";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["DOOR_LOCK_INVERTED"] = 20] = "DOOR_LOCK_INVERTED";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["BLINDS_PERCENTAGE_WITH_STOP"] = 21] = "BLINDS_PERCENTAGE_WITH_STOP";
  DOMOTICZ_SUBTYPE[DOMOTICZ_SUBTYPE["BLINDS_PERCENTAGE_WITH_STOP_INVERTED"] = 22] = "BLINDS_PERCENTAGE_WITH_STOP_INVERTED";
})(exports.DOMOTICZ_SUBTYPE || (exports.DOMOTICZ_SUBTYPE = {}));

exports.DOMOTICZ_NOTIFICATOR = void 0;
(function (DOMOTICZ_NOTIFICATOR) {
  DOMOTICZ_NOTIFICATOR["FCM"] = "fcm";
  DOMOTICZ_NOTIFICATOR["HTTP"] = "http";
  DOMOTICZ_NOTIFICATOR["KODI"] = "kodi";
  DOMOTICZ_NOTIFICATOR["LMS"] = "lms";
  DOMOTICZ_NOTIFICATOR["NMA"] = "nma";
  DOMOTICZ_NOTIFICATOR["PROWL"] = "prowl";
  DOMOTICZ_NOTIFICATOR["PUSHALOT"] = "pushalot";
  DOMOTICZ_NOTIFICATOR["PUSHBULLET"] = "pushbullet";
  DOMOTICZ_NOTIFICATOR["PUSHOVER"] = "pushover";
  DOMOTICZ_NOTIFICATOR["PUSHSAFER"] = "pushsafer";
})(exports.DOMOTICZ_NOTIFICATOR || (exports.DOMOTICZ_NOTIFICATOR = {}));

exports.DOMOTICZ_HUMIDITY = void 0;
(function (DOMOTICZ_HUMIDITY) {
  DOMOTICZ_HUMIDITY[DOMOTICZ_HUMIDITY["NORMAL"] = 1] = "NORMAL";
  DOMOTICZ_HUMIDITY[DOMOTICZ_HUMIDITY["CONFORTABLE"] = 2] = "CONFORTABLE";
  DOMOTICZ_HUMIDITY[DOMOTICZ_HUMIDITY["DRY"] = 3] = "DRY";
  DOMOTICZ_HUMIDITY[DOMOTICZ_HUMIDITY["WET"] = 4] = "WET";
})(exports.DOMOTICZ_HUMIDITY || (exports.DOMOTICZ_HUMIDITY = {}));

exports.DOMOTICZ_DEVICE_HUMIDITY = void 0;
(function (DOMOTICZ_DEVICE_HUMIDITY) {
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["HEAVY_SNOW"] = 0] = "HEAVY_SNOW";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["SNOW"] = 1] = "SNOW";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["HEAVY_RAIN"] = 2] = "HEAVY_RAIN";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["RAIN"] = 3] = "RAIN";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["CLOUDY"] = 4] = "CLOUDY";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["SOME_CLOUDS"] = 5] = "SOME_CLOUDS";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["SUNNY"] = 6] = "SUNNY";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["UNKNOWN"] = 7] = "UNKNOWN";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["UNSTABLE"] = 8] = "UNSTABLE";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["STABLE"] = 9] = "STABLE";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_STABLE"] = 0] = "GENERAL_STABLE";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_SUNNY"] = 1] = "GENERAL_SUNNY";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_CLOUDY"] = 2] = "GENERAL_CLOUDY";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_UNSABLE"] = 3] = "GENERAL_UNSABLE";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_THUNDERSTORM"] = 4] = "GENERAL_THUNDERSTORM";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_UNKNOWN"] = 5] = "GENERAL_UNKNOWN";
  DOMOTICZ_DEVICE_HUMIDITY[DOMOTICZ_DEVICE_HUMIDITY["GENERAL_CLOUDY_RAIN"] = 6] = "GENERAL_CLOUDY_RAIN";
})(exports.DOMOTICZ_DEVICE_HUMIDITY || (exports.DOMOTICZ_DEVICE_HUMIDITY = {}));

exports.DOMOTICZ_DEVICE = void 0;
(function (DOMOTICZ_DEVICE) {
  DOMOTICZ_DEVICE["LIGHT"] = "light";
  DOMOTICZ_DEVICE["WEATHER"] = "weather";
  DOMOTICZ_DEVICE["TEMP"] = "temp";
  DOMOTICZ_DEVICE["UTILITY"] = "utility";
  DOMOTICZ_DEVICE["WIND"] = "wind";
  DOMOTICZ_DEVICE["RAIN"] = "rain";
  DOMOTICZ_DEVICE["UV"] = "uv";
  DOMOTICZ_DEVICE["BARO"] = "baro";
  DOMOTICZ_DEVICE["ZWAVEALARM"] = "zwavealarm";
  DOMOTICZ_DEVICE["ALL"] = "all";
})(exports.DOMOTICZ_DEVICE || (exports.DOMOTICZ_DEVICE = {}));

exports.DOMOTICZ_LOG_LEVEL = void 0;
(function (DOMOTICZ_LOG_LEVEL) {
  DOMOTICZ_LOG_LEVEL[DOMOTICZ_LOG_LEVEL["NORMAL"] = 1] = "NORMAL";
  DOMOTICZ_LOG_LEVEL[DOMOTICZ_LOG_LEVEL["STATUS"] = 2] = "STATUS";
  DOMOTICZ_LOG_LEVEL[DOMOTICZ_LOG_LEVEL["ERROR"] = 4] = "ERROR";
  DOMOTICZ_LOG_LEVEL[DOMOTICZ_LOG_LEVEL["ALL"] = 268435455] = "ALL";
})(exports.DOMOTICZ_LOG_LEVEL || (exports.DOMOTICZ_LOG_LEVEL = {}));

exports.DOMOTICZ_DAY = void 0;
(function (DOMOTICZ_DAY) {
  DOMOTICZ_DAY[DOMOTICZ_DAY["EVERYDAY"] = 128] = "EVERYDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["WEEKDAYS"] = 256] = "WEEKDAYS";
  DOMOTICZ_DAY[DOMOTICZ_DAY["WEEKENDS"] = 512] = "WEEKENDS";
  DOMOTICZ_DAY[DOMOTICZ_DAY["MONDAY"] = 1] = "MONDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["TUESDAY"] = 2] = "TUESDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["WEDNESDAY"] = 4] = "WEDNESDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["THURSDAY"] = 8] = "THURSDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["FRIDAY"] = 16] = "FRIDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["SATURDAY"] = 32] = "SATURDAY";
  DOMOTICZ_DAY[DOMOTICZ_DAY["SUNDAY"] = 64] = "SUNDAY";
})(exports.DOMOTICZ_DAY || (exports.DOMOTICZ_DAY = {}));

function useDevices(domoticzApi) {
  return {
    /**
     * Get all devices, including the hidden ones
     */
    items: function items() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var devices;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domoticzApi.devices({
                  used: true,
                  displayhidden: 1
                });
              case 2:
                devices = _context.sent;
                return _context.abrupt("return", devices.result);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /**
     * Get a specific device
     * @param {number} idx
     */
    getByIdx: function getByIdx(idx) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var device;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return domoticzApi.devices({
                  rid: idx
                });
              case 2:
                device = _context2.sent;
                return _context2.abrupt("return", device.result[0]);
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /**
     * Retrieve devices of a specific type
     * @param {DOMOTICZ_DEVICE} filter
     * @param {String} orderBy
     */
    getByType: function getByType(filter) {
      var _arguments = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var orderBy, devices;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                orderBy = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : 'Name';
                _context3.next = 3;
                return domoticzApi.devices({
                  filter: filter,
                  used: true,
                  order: orderBy
                });
              case 3:
                devices = _context3.sent;
                return _context3.abrupt("return", devices.result);
              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    /**
     * Return favorites devices
     */
    getFavorites: function getFavorites() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var devices;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return domoticzApi.devices({
                  used: true,
                  filter: exports.DOMOTICZ_DEVICE.ALL,
                  favorite: 1
                });
              case 2:
                devices = _context4.sent;
                return _context4.abrupt("return", devices.result);
              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    /**
     * Ask Domoticz to action a Light/Switch
     * @param {Number} idx
     * @param {DOMOTICZ_SWITCHCMD} command "On|Off"
     */
    "switch": function _switch(idx) {
      var _arguments2 = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var command;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                command = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : exports.DOMOTICZ_SWITCHCMD.ON;
                _context5.next = 3;
                return domoticzApi.command({
                  param: 'switchlight',
                  idx: idx,
                  switchcmd: command
                });
              case 3:
                return _context5.abrupt("return", _context5.sent);
              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    /**
     * Ask Domoticz to toggle a Light/Switch
     * @param {integer} idx
     */
    toggle: function toggle(idx) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return domoticzApi.command({
                  param: 'switchlight',
                  idx: idx,
                  switchcmd: exports.DOMOTICZ_SWITCHCMD.TOGGLE
                });
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    /**
     * Rename the device identified by idx
     * @param {Number} idx
     * @param {String} name
     */
    rename: function rename(idx, name) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return domoticzApi.command({
                  param: 'renamedevice',
                  idx: idx,
                  name: name
                });
              case 2:
                return _context7.abrupt("return", _context7.sent);
              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    /**
     * Set/Remove the protection on a device identified by idx
     * @param {Number} idx
     * @param {Boolean} enable
     */
    protect: function protect(idx) {
      var _arguments3 = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var enable;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                enable = _arguments3.length > 1 && _arguments3[1] !== undefined ? _arguments3[1] : true;
                _context8.next = 3;
                return domoticzApi.setUsed({
                  used: true,
                  idx: idx,
                  "protected": enable
                });
              case 3:
                return _context8.abrupt("return", _context8.sent);
              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    /**
     * Set the new temperature
     *
     * @param {Number} idx
     * @param {Number} temperature
     * @returns
     */
    updateTemperature: function updateTemperature(idx, temperature) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _this.updateDevice(idx, temperature.toString());
              case 2:
                return _context9.abrupt("return", _context9.sent);
              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    },
    /**
     * Set the humidity datas of a device
     *
     * @param {Number} idx Domoticz Device ID
     * @param {String} humidityPercent  Ex: 45
     * @param {DOMOTICZ_HUMIDITY} humidityState [0: Normal, 1: Confortable, 2: Dry, 3: Wet]
     * @returns
     */
    updateHumidity: function updateHumidity(idx, humidityPercent, humidityState) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(humidityPercent < 0 || humidityPercent > 100)) {
                  _context10.next = 2;
                  break;
                }
                return _context10.abrupt("return", null);
              case 2:
                if (!(humidityState < 0 || humidityState > 5)) {
                  _context10.next = 4;
                  break;
                }
                return _context10.abrupt("return", null);
              case 4:
                _context10.next = 6;
                return _this2.updateDevice(idx, humidityState, humidityPercent.toString());
              case 6:
                return _context10.abrupt("return", _context10.sent);
              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }))();
    },
    /**
     * Set the barometer pressure and define the barometer forecast.
     *
     * @param {Number} idx
     * @param {int} barometer Atmospheric Pressure
     * @param {deviceHumidityType} deviceHumidityType use a deviceHumidityGeneralType (if device.Type is 'General'), or deviceHumidityType otherwise.
     *
     * @returns
     */
    updateBarometer: function updateBarometer(idx, barometer, deviceHumidityType) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return _this3.updateDevice(idx, "".concat(barometer.toString(), ";").concat(deviceHumidityType));
              case 2:
                return _context11.abrupt("return", _context11.sent);
              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }))();
    },
    /**
     * Generic update of a devices
     *
     * @param {Number} idx
     * @param {String} sValue
     * @param {String} nValue
     * @returns
     */
    updateDevice: function updateDevice(idx, svalue) {
      var _arguments4 = arguments;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var nvalue;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                nvalue = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : '0';
                _context12.next = 3;
                return domoticzApi.command({
                  param: 'udevice',
                  idx: idx,
                  svalue: svalue,
                  nvalue: nvalue
                });
              case 3:
                return _context12.abrupt("return", _context12.sent);
              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12);
      }))();
    }
  };
}

function useCameras(domoticzApi) {
  return {
    /**
     * Get all cameras informations
     */
    items: function items() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domoticzApi.cameras();
              case 2:
                data = _context.sent;
                return _context.abrupt("return", data.result);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
}

function useEvents(domoticzApi) {
  return {
    /**
     * Retrieve all Domoticz Events
     */
    items: function items() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domoticzApi.events({
                  param: 'list'
                });
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
}

function useScenes(domoticzApi) {
  return {
    /**
     * Get all the Domoticz"s scenes
     */
    items: function items() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var scenes;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domoticzApi.scenes();
              case 2:
                scenes = _context.sent;
                return _context.abrupt("return", scenes.result);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /**
     * Switch a state into a specific state
     *
     * @param {Number} idx : Domoticz index of the device
     * @param {String} command : string of the state, ex: 'Off'
     */
    "switch": function _switch(idx, command) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return domoticzApi.command({
                  param: 'switch',
                  idx: idx,
                  switchcmd: command
                });
              case 2:
                return _context2.abrupt("return", _context2.sent);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    /**
     * Toggle a device (ex: On/Off
     *
     * @param {Number} idx : Domoticz index of the device
     */
    toggle: function toggle(idx) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this["switch"](idx, 'Toggle');
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  };
}

function useNotifications(domoticzApi) {
  return {
    /**
     * Send a notification through Domoticz Notification API
     * @param {string} subject
     * @param {string} message
     * @param {notificationType} subSystem
     */
    send: function send(subject, message, subSystem) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var options;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  param: 'sendnotification',
                  subject: subject,
                  body: message
                };
                if (subSystem !== undefined) {
                  options.subsystem = subSystem;
                }
                _context.next = 4;
                return domoticzApi.command(options);
              case 4:
                return _context.abrupt("return", _context.sent);
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  };
}

function useSystem(domoticzApi) {
  return {
    /**
     * Write a message into Domoticz Logs
     * @param {String} message
     */
    log: function log(message) {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return domoticzApi.command({
                  param: 'addlogmessage',
                  message: "DOMOTICZ API : ".concat(message)
                });
              case 2:
                return _context.abrupt("return", _context.sent);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /**
     * Check Credentials
     */
    checkCredentials: function checkCredentials() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return domoticzApi.checkCredentials();
              case 3:
                return _context2.abrupt("return", true);
              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                return _context2.abrupt("return", false);
              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }))();
    },
    /**
     * Check Security Status
     */
    securityStatus: function securityStatus() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return domoticzApi.command({
                  param: 'getsecstatus'
                });
              case 2:
                return _context3.abrupt("return", _context3.sent);
              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    /**
     * Get various informations about the Domoticz Server
     */
    version: function version() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return domoticzApi.command({
                  param: 'getversion'
                });
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    /**
     * Get times (Local time, Sunset, Sunrise, etc.) from Domoticz Server
     */
    datetimes: function datetimes() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return domoticzApi.command({
                  param: 'getSunRiseSet'
                });
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    /**
     * Reboot Domoticz Server
     */
    reboot: function reboot() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return domoticzApi.command({
                  param: 'system_reboot'
                });
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    /**
     * Shutdown the Domoticz Server
     */
    shutdown: function shutdown() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return domoticzApi.command({
                  param: 'system_shutdown'
                });
              case 2:
                return _context7.abrupt("return", _context7.sent);
              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }))();
    },
    /**
     * Start Database backup
     */
    db_backup: function db_backup() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return domoticzApi.get('backupdatabase.php');
              case 2:
                return _context8.abrupt("return", _context8.sent);
              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }))();
    },
    /**
     * Execute database cleanup
     */
    db_vaccum: function db_vaccum() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return domoticzApi.command({
                  param: 'vaccumdatabase'
                });
              case 2:
                return _context9.abrupt("return", _context9.sent);
              case 3:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }))();
    }
  };
}

function useDomoticz(options) {
  var domoticzApi = options.DomoticzApi != null ? new options.DomoticzApi(options) : new DomoticzApiProviderFetch(options);
  return {
    cameraManager: useCameras(domoticzApi),
    deviceManager: useDevices(domoticzApi),
    eventManager: useEvents(domoticzApi),
    notificationManager: useNotifications(domoticzApi),
    sceneManager: useScenes(domoticzApi),
    systemManager: useSystem(domoticzApi)
  };
}

exports.DomoticzApiProvider = DomoticzApiProvider;
exports.DomoticzApiProviderFetch = DomoticzApiProviderFetch;
exports.useCameras = useCameras;
exports.useDevices = useDevices;
exports.useDomoticz = useDomoticz;
exports.useEvents = useEvents;
exports.useNotifications = useNotifications;
exports.useScenes = useScenes;
exports.useSystem = useSystem;
