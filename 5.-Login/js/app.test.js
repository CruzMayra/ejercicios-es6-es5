describe("user", () => {
  it("returns false if passed no password", () => {
    expect(user('')).toEqual(false);
  });
  it("returns false if passed incorrect password", () => {
    expect(user('contraseña')).toEqual(false);
  });
  it("returns true if passed Laboratoria", () => {
    expect(user('laboratoria')).toEqual(true);
  });
});
