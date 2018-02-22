describe("totalByCategory", () => {
  it("returns the total price of an indicated category if passed an array of objects", () => {
    expect(totalByCategory([
      { name: "Inka Cola", category: "beverage", stock: "10" },
      { name: "Cusqueña", category: "beverage", stock: "15" },
      { name: "Pisco", category: "beverage", stock: "20" },
      { name: "Lúcuma", category: "fruit", stock: "30" },
      { name: "Aguaymanto", category: "fruit", stock: "5" },
      { name: "Tequila", category: "beverage", stock: "50" },
      { name: "Mezcal", category: "beverage", stock: "25" },
      { name: "Aguacate", category: "fruit", stock: "100" },
      { name: "Chayote", category: "fruit", stock: "5" },
      { name: "Cuitlacoche", category: "fungus", stock: "10" },
      { name: "Arándonos", category: "fruit", stock: "19" },
      { name: "Ciruela", category: "fruit", stock: "8" }
    ], "beverage")).toEqual(120);
  });
  it("returns zero if do not find the category in the series of numbers passed", () => {
    expect(totalByCategory([
      { name: "Inka Cola", category: "beverage", stock: "10" },
      { name: "Cusqueña", category: "beverage", stock: "15" },
      { name: "Pisco", category: "beverage", stock: "20" },
      { name: "Lúcuma", category: "fruit", stock: "30" },
      { name: "Aguaymanto", category: "fruit", stock: "5" },
      { name: "Tequila", category: "beverage", stock: "50" },
      { name: "Mezcal", category: "beverage", stock: "25" },
      { name: "Aguacate", category: "fruit", stock: "100" },
      { name: "Chayote", category: "fruit", stock: "5" },
      { name: "Cuitlacoche", category: "fungus", stock: "10" },
      { name: "Arándonos", category: "fruit", stock: "19" },
      { name: "Ciruela", category: "fruit", stock: "8" }
    ], "no-existe")).toEqual(0);
  });
});
