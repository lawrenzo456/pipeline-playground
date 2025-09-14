// Pipeline Playground - Starter
// =============================

// TODO: Create an object to hold your transforms (e.g., toUpperCase, trim, appendExclamation)

const transformations = {
  upperCase: function (x) {
    return x.toUpperCase();
  },
  trim: function (x) {
    return x.trim();
  },
  print: function (x) {
    return console.log(x);
  },
  append: function (x, string) {
    return x.append(string);
  },
};

// TODO: Write your createPipeline function here
// - It should let you add step functions
// - It should let you run them all in order on some input
function createPipeline() {
  const pipeline = {
    transformations: this.transformations,
    add4: function (x) {
      return x + 4;
    },
    transformCache: [
      this.add4,
      function add2(x) {
        return x + 2;
      },
    ],
    testObj: {
      a: 'b',
      c: 'd',
      e: 'f',
      func: function (x) {
        return x + 2;
      },
    },

    add: function (fn) {},
    run: function (initialValue) {
      // for (let fn of this.transformCache) {
      //     // console.log(fn.toString())
      //     // console.log(initialValue)
      //     // console.log(this.transformCache)
      //     // this.transformCache.push(initialValue);
      //     // transformCache[fn](initialValue);

      // }
      const testObj2 = {
        a: 'b',
        c: 'd',
        e: 'f',
        func2: function (x) {
          return x + 99;
        },
      };
      console.log(JSON.stringify(testObj2));
      console.log(Object.entries(testObj2));
      console.log(JSON.stringify(this.testObj));
      console.log(Object.entries(this.testObj));

      console.log(JSON.stringify(this.transformations));
      for (let i = 0; i < this.transformCache.length; i++) {
        let func = this.transformCache[i];
        console.log(this.transformCache);
        // console.log(func(initialValue));
      }
      console.log(this.transformations);
      //   console.log(this.add4(initialValue));
      //   console.log(transformCache[0](initialValue));
    },
    print: function (cache) {
      console.log(this.transformCache);
    },
    addValue: function (value) {
      this.transformCache.push(value);
    },
  };
  return pipeline;
}
const testPipeline = createPipeline();
testPipeline.addValue(4);

// testPipeline.print();
testPipeline.run(4);

const testObj = {
  addBy2: function (x) {
    return x + 2;
  },
  arr: [this.addBy2],
};

// console.log(testObj.addBy2(3));
console.log(JSON.stringify(transformations));
// TODO: Wire up the DOM
// - Grab the input box, buttons, step list, and output
// - When a transform button is clicked, add that step to the pipeline and show it in the list
// - When "Run Pipeline" is clicked, run the pipeline on the input value and display the result
