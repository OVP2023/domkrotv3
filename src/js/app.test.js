describe("Пример теста", () => {
  test.each([
    { str: "1", expected: "1" },
    { str: "2", expected: "2" },
  ])
    expect(str).toBe(expected);
  });
});
