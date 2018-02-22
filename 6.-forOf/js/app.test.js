describe("averageArray", () => {
  it("returns false if passed no password", () => {
    expect(averageArray([10, 20, 30, 20, 30, 40, 60])).toEqual('El promedio de este arreglo es: 30');
  });
});
