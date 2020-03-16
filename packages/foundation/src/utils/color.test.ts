import { getRelativeLuminance } from "./color";

describe("getRelativeLuminance", () => {
  it("should return full luminance for white", () => {
    expect(getRelativeLuminance("#FFFFFF")).toBe(1);
  });

  it("should return no luminance for black", () => {
    expect(getRelativeLuminance("#000000")).toBe(0);
  })
  
  it("should return right luminance for random color ", () => {
    const L: number = getRelativeLuminance("#FA7014");
    expect(L.toFixed(4)).toBe("0.3196");
  })

  it("should thow an execption when an invalid color is passed", () => {
    expect(() => getRelativeLuminance("FA7014")).toThrow();
  })
})