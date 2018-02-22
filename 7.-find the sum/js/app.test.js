describe("findSum", () => {
  it("returns the two digits that total the second argument if passed a array and a number", () => {
    expect(findSum([3, 34, 4, 12, 5, 2], 9)).toEqual([4, 5]);
  });
});
