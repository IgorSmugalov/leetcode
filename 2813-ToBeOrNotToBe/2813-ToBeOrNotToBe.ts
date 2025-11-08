// Last updated: 08.11.2025, 16:19:40
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(expected: any): ToBeOrNotToBe {
  return {
    toBe: (val) => {
      if (expected === val) return true;
      throw new Error("Not Equal");
    },

    notToBe: (val) => {
      if (expected !== val) return true;
      throw new Error("Equal");
    },
  };
}
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */