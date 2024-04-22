const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("returns an array", function () {
    const squareArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = unroll(squareArray);
    expect(Array.isArray(result)).toEqual(true);
  });

  it("correctly unrolls a square array in spiral order", function () {
    const squareArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const expectedResult = [1, 2, 3, 6, 9, 8, 7, 4, 5];
    const result = unroll(squareArray);
    expect(result).toEqual(expectedResult);
  });

  it("handles a single-element square array", function () {
    const squareArray = [[1]];
    const expectedResult = [1];
    const result = unroll(squareArray);
    expect(result).toEqual(expectedResult);
  });

});
