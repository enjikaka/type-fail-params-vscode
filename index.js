class ExtendedDerp extends DerpClass {
  someMethod (param) {
    return false;
  }

  someOtherMethod (param) {
    return 123;
  }
}

const ed = new ExtendedDerp();

const resultOne = ed.someMethod('hello');
const resultTwo = ed.someOtherMethod(1337);
