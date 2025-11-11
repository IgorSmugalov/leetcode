// Last updated: 12.11.2025, 00:29:44
function mergeAlternately(word1: string, word2: string): string {
    let [i1, i2] = [0,0]
    const res: string[] = []
    let suffix = ''

    // if (word1.length !== word2.length) {
    //     suffix = word1.length > word2.length 
    //     ? word1.slice(word1.length - word2.length - 1)
    //     : word2.slice(word2.length - word1.length - 1)
    // }
    
    while(i1 < word1.length || i2 < word2.length) {
        res.push(word1[i1], word2[i2])

        i1++
        i2++
    }

    return res.join('') + suffix

};