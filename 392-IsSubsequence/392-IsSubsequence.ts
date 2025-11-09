// Last updated: 09.11.2025, 13:27:07
function isSubsequence(s: string, t: string): boolean {
   let str = ''
   let idxForSearch = 0

   for(let char of t) {
        const targetChar = s.charAt(idxForSearch)
        if (char === targetChar) {
            str = str + char
            idxForSearch++

            if (str.length === s.length) {
                break
            }
        }

   } 

   return s === str
};