// Last updated: 08.11.2025, 16:21:20
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    let sbsLength = 1
    while (true){
        let sbs = strs[0].substring(0, sbsLength)
        let isTrue = strs.every((string) => string.substring(0, sbsLength) === sbs && string.length >= sbsLength)
        if (isTrue) {
            sbsLength++; 
            continue; }
        else {
            break
        }
    } 
    return strs[0].substring(0, sbsLength - 1)
};