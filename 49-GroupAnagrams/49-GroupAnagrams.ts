// Last updated: 08.11.2025, 16:21:14
function groupAnagrams(strs: string[]): string[][] {
  const hash: Map<string, string[]> = new Map();
  for (const string of strs) {
    const sorted = string.split("").sort().join();
    if (hash.has(sorted)) {
      hash.get(sorted)!.push(string);
    } else {
      hash.set(sorted, [string]);
    }
  }
  return [...hash.values()];
}