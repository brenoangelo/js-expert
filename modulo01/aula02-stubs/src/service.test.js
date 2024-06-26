const Service = require('./service');
const assert = require('assert');
const BASE_URL_1 = 'https://swapi.dev/api/planets/1/';
const BASE_URL_2 = 'https://swapi.dev/api/planets/2/';
const { createSandbox } = require('sinon');

const mocks = {
  alderaan: require('./../mocks/alderaan.json'),
  tatooine: require('./../mocks/tatooine.json')
}

const sinon = createSandbox();

(async () => {
  const service = new Service();
  const stub = sinon.stub(service, service.makeRequest.name);

  stub
    .withArgs(BASE_URL_1)
    .resolves(mocks.tatooine)

  stub
    .withArgs(BASE_URL_2)
    .resolves(mocks.alderaan)

  {
    const expected = {
      name: "Tatooine",
      surfaceWater: "1",
      appearIn: 5
    }

    const results = await service.getPlanets(BASE_URL_1)
    assert.deepStrictEqual(results, expected)
  }

  {
    const expected = {
      name: "Alderaan",
      surfaceWater: "40",
      appearIn: 2
    }

    const results = await service.getPlanets(BASE_URL_2)
    assert.deepStrictEqual(results, expected)
  }
})();
