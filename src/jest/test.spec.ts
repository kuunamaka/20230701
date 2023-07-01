import greet from "../frontend/test";

describe("greet", () => {
  test("should say hello to Teresa", () => {
    const response: string = greet('Teresa');
    expect(response).toBe('Hello, Teresa!');
  });
});
