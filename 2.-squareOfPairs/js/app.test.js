describe("square", () => {
  it("returns the elements squared only if the number is positive if passed an array of numbers", () => {
    expect(square([2, 4, 6])).toEqual([4, 16, 36]);
  });
  it("returns the elements squared only if the number is positive if passed an array of negative numbers", () => {
    expect(square([-3, 2, -8, 12, 5])).toEqual([4, 144, 25]);
  });
  it("returns the elements squared only if the number is positive if passed an array of numbers", () => {
    expect(square([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
  });
});
