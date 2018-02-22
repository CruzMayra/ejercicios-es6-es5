describe("capitalize", () => {
  it("returns the each initial letter of a word in uppercase of a string if passed an lowercase string", () => {
    expect(capitalize('laboratoria mexico')).toEqual('Laboratoria Mexico');
  });
  it("returns the each initial letter of a word in uppercase of a string if passed an lowercase string", () => {
    expect(capitalize("este ejercicio pasa a mayusculas la primer letra de cada palabra")).toEqual("Este Ejercicio Pasa A Mayusculas La Primer Letra De Cada Palabra");
  });
});
