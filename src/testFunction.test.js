import testFunction from "./testFunction";

describe("testFunction", () => {
  it("is a function", () => {
    expect(typeof testFunction).toBe("function");
  });

  it('returns "Hello"', () => {
    expect(testFunction()).toEqual("Hello");
  });
});
