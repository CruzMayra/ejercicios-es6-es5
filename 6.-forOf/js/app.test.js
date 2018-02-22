describe("averageArray", () => {
  it("returns string with the average of the elements of a array if passed a number array", () => {
    expect(averageArray([10, 20, 30, 20, 30, 40, 60])).toEqual('El promedio de este arreglo es: 30');
  });
});
