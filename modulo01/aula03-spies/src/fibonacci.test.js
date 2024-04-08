// Fibonacci: o proximo numero da sequencia é sempre a soma dos anteriores
// input: 3
// 0, 1, 1
// input: 5
// 0, 1, 1, 2, 3

const { createSandbox } = require('sinon');
const Fibonacci = require('./fibonacci');
const assert = require('assert');
const sinon = createSandbox();

(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    // numero de sequencias = 5

    for (const sequencia of fibonacci.execute(5)) {
    }
    const expectedCallCount = 6;

    assert.strictEqual(spy.callCount, expectedCallCount);

    const { args } = spy.getCall(2);

    const expectedParams = [3, 1, 2];
    assert.deepStrictEqual(args, expectedParams, 'os arrays não são iguais!');
  }

  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    // numero de sequencias = 5

    const results = [...fibonacci.execute(5)];

    const expectedCallCount = 6;

    assert.strictEqual(spy.callCount, expectedCallCount);
    const expectedResults = [0, 1, 1, 2, 3];

    assert.deepStrictEqual(results, expectedResults, '');
  }
})();
