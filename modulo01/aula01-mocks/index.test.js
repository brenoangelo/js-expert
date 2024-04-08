const { error } = require("./src/constants")
const File = require("./src/file")
const assert = require('assert')

// IFEE
;(async () => {
  // Variaveis criadas nesse bloco, so são validas durante sua execucao
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/invalid-header.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/fiveItems-invalid.csv'
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result = File.csvToJSON(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/threeItems-valid.csv'
    const expected = [
       {
        id: 1,
        name: "Breno Angelo",
        profession: "developer",
        age: 25
       },
       {
        id: 2,
        name: "Geralt",
        profession: "developer",
        age: 120
       },
       {
        id: 3,
        name: "Ana",
        profession: "ux",
        age: 22
       },
    ]
    const result = await File.csvToJSON(filePath)
    assert.deepEqual(result, expected)
  }
})()