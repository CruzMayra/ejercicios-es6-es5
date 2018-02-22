describe("findSum", () => {
  it("returns the two digits that add the second argument if passed two arguments", () => {
    expect(findSum([3, 34, 4, 12, 5, 2], 9)).toEqual([4, 5]);
  });
});
